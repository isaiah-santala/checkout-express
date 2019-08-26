# SDC images
> An images module for an e-commerce items details page styled after google express. the front end code base for this project can be found here: https://github.com/ghrsea-express/product_info-RL

## Purpose
> My goal with this project was to take a legacy code base and build out a back end withe a database of 10million primary records, then deploy the service scaled with load balancing to handle a minimum of 500 requests per second. 

## Summary 
### Seeding
> I started by by selecting a database, To do this I chose to test PostgreSQL (a SQL option) vs MongoDB (a noSQL option). I seeded both databases with 10million primary records the restults of my testing can be found here: https://docs.google.com/document/d/1aWr0Lm5T8rNs9qUTkASSq8WBPdQaDdUl5ludDP2axAc/edit I chose to use PostgreSQL because it's look up time for individual items was much faster than MongoDB.
### Deployment
> I then linked up my database to my front end with an express server and dockerized them for testing my service on my local machine. 
> For deployment I chose to use seporate AWS EC2 instances for my databse and service. I pulled a docker Postgres image into an EC2 container and seeded it with the CSV file i had generated on my local machine. 
> I then updated my service to query my deployed database, and then deployed my dockerized service in an EC2 container. 
### Stress Testing and Scaling
> For stress testing I first tried using a tool called artillery which runs locally but chose to change to a cloud based service due to variance in data caused my the performance of my local machine. 
> I found a cloud based tool called loader.io which allowed me to test a max of 10k requests over a shortest possible duration of 15 seconds. 
> My first run of tests with only one server resulted in an avg error rate of 65% and an avg response time of 1850 ms.
> By adding NGINX and scaling horizontaly with 2 more servers I was able to get that error rate down t0 0% with an avg response time of 75ms



