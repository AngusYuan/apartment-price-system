__author__ = 'angus'

from scrapy.linkextractors import LinkExtractor
from scrapy.linkextractors.lxmlhtml import LxmlLinkExtractor
from scrapy.spiders import Rule, CrawlSpider
from scrapy.selector import Selector
from scrapy_craigslist.items import ScrapyCraigslistItem


class MySpider(CrawlSpider):
    name = 'craigslist'
    allowed_domains = ['sfbay.craigslist.org']
    start_urls = ['https://sfbay.craigslist.org/search/apa']

    rules = (
        Rule(LxmlLinkExtractor(
            allow=(r'sfbay.craigslist.org/search/apa.*'),
            deny = (r'.*format\=rss.*')
        ),
            callback="parse_items",
            follow= True,
             ),
        )



    def parse_items(self, response):
        """
        This function takes teh content from contents and map them according to the
        items from items.py.
        """
        self.logger.info('You are now crawling: %s', response.url)
        items = []
        hxs = Selector(response)
        # print response.url
        contents = hxs.xpath("//ul[@class='rows']/*")
        for content in contents:
            item = ScrapyCraigslistItem()
            item ["title"] = content.xpath("//a[@class='result-title hdrlnk']/text()").extract()[0]
            item ["post_date"] = content.xpath("//time[@class='result-date']/text()").extract()[0]
            item ["price"] = content.xpath("//span[@class='result-price']/text()").extract()[0]
            item ["location"] = content.xpath("//span[@class='result-hood']/text()").extract()[0].strip()
            items.append(item)
        return items
