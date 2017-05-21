System design goal 
Users can use this system to find frequency of apartment news and average apartment price everyday quickly  

Requirement
Basic Function
1.	Crawling the apartment information of one area in Craigslist
2.	Analyze the information and utilize the heatmap to show the information 

Extended Function
1.	Show the different area’s heatmap by searching
2.	Show the specific area according to the user’s login in location
3.	Click the points in the heatmap and show the detailed information in the same web page

Selection of technical skills and framework
1. Frontend: Node (Restful) + React (with Webpack and Babel)+Materialize (UI design)
2. Backend: Python (Scrapy, Selector is xpath), Node+Express (Server)
3. Database: MongoDB (Storage), Redis(Cache)

Timeline
Week one: 
1.	Finish web crawling and connected with database
2.	Design corresponding test cases and test

Week two: 
1.	Finish frontend design
2.	Connect frontend service with backend service
3.	Design corresponding test cases and test
4.	Service of connect DB and server

Week three: 
1.	Implement the extended function
2.	Final system test
