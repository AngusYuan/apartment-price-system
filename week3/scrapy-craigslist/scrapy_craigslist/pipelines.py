# -*- coding: utf-8 -*-
import codecs
import json
from scrapy.exceptions import DropItem
import pymongo
from scrapy.conf import settings

class DuplicatesPipeline(object):

    def __init__(self):
        self.titles_seen = set()

    def process_item(self, item, spider):
        if item['title'] in self.titles_seen:
            raise DropItem("Duplicate item found: %s" % item)
        else:
            self.titles_seen.add(item['title'])
            return item

class JsonWithEncodingPipeline(object):
    #design the output of json and use this to test the spider
    def __init__(self):
        self.file = codecs.open('result.json', 'w', encoding="utf-8")
    def process_item(self, item, spider):
        lines = json.dumps(dict(item), ensure_ascii=False) + "\n"
        self.file.write(lines)
        return item
    def spider_closed(self, spider):
        self.file.close()

class MongoDBPipeline(object):

    def __init__(self):
        connection = pymongo.MongoClient(
            settings['MONGODB_SERVER'],
            settings['MONGODB_PORT']
        )
        db = connection[settings['MONGODB_DB']]
        db.authenticate(settings['MONGODB_USER'], settings['MONGODB_PASSWORD'])
        self.collection = db[settings['MONGODB_COLLECTION']]

    def process_item(self, item, spider):
        valid = True
        for data in item:
            if not data:
                valid = False
                raise DropItem("Missing {0}!".format(data))
        if valid:
            self.collection.insert(dict(item))
            log.msg("Question added to MongoDB database!",
                    level=log.DEBUG, spider=spider)
        return item
