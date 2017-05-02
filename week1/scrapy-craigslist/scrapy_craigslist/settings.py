# -*- coding: utf-8 -*-
import os
import random

BOT_NAME = 'scrapy_craigslist'

SPIDER_MODULES = ['scrapy_craigslist.spiders']
NEWSPIDER_MODULE = 'scrapy_craigslist.spiders'

ITEM_PIPELINES = {
    'scrapy_craigslist.pipelines.DuplicatesPipeline': 10,
    'scrapy_craigslist.pipelines.MongoDBPipeline': 20,
}


USER_AGENTS_FILE = os.path.join(os.path.dirname(__file__), 'user_agents.txt')
USER_AGENTS = []

with open(USER_AGENTS_FILE, 'r') as uaf:
    for ua in uaf.readlines():
        if ua:
            USER_AGENTS.append(ua.strip()[1:-1])
random.shuffle(USER_AGENTS)
random.choice(USER_AGENTS)
USER_AGENT = random.choice(USER_AGENTS)


MONGODB_SERVER = "ds127801.mlab.com"
MONGODB_PORT = 27801
MONGODB_DB = "capstone"
MONGODB_COLLECTION = "result"
MONGODB_USER = "angus"
MONGODB_PASSWORD = "angus"
