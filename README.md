# Getting Started with Elasticsearch

This is the repo accompanying the egghead.io course *Getting Started with Elasticsearch*. During the course, you'll learn how to use elasticsearch in an efficient manner, creating indices and types, store and retrieve data, and analyze the health and performance of your Elasticsearch cluster.

## Setting Up
But as they say, we must learn to walk before we run. In this context, before we can run Elasticsearch we must set it up, so we'll start there.

In this repo, you'll find a docker-compose.yml that will set up a basic elasticsearch and kibana server for you. This requires that you are running Docker, of course. If you need help installing Docker, please see the excellent Docker docs [here](https://www.docker.com/). You don't have to use this docker-compose.yml. There is nothing magical about it. Any existing, updated Elasticsearch cluster that you have access to will work just fine. If you use the docker configuration from this repo, please make sure you are running Docker version 1.12 or higher.

For lesson 1, you need data in the Elasticsearch cluster for the examples to work. If you don't have an existing cluster to use, change the variable name `ESCLUSTER` on line 5 in `utils/import.js` to match your cluster information. (HINT: If you don't know and are using the docker-compose.yml above, it's `http://localhost:9200` and is already correctly specified in the file). From within the repo directory, run
`npm install` then
`utils/import.js` to import the sample dataset for this lesson.

## About this course
We'll be using the Simpsons [dataset](https://www.kaggle.com/wcukierski/the-simpsons-by-the-data) during this course. The Simpsons is an American animated television show. The dataset contains the characters, locations and episodes for most, if not all of the Simpson's shows. This dataset has many qualities that make it appealing to this course:
- it is large enough to provide some insightful data, but small enough that you can run it on your local workstation
- the data has relationships that can be modeled in our Elasticsearch maps so you learn how mapping works
- it's not overly complex, distracting away from the focus of the course (imagine if you had to learn landsat imagery data just to get something out of this course!)
- there is junk data in there too, which is extremely valuable as I show you how to *prevent* indexing it and adding unnecessary load to your Elasticsearch cluster

## Aye Carumba!
Sometimes I make mistakes. **DOH!**
If you are having problems with the code from one of the demos, check this repo first. Sometimes in my haste to cut out awkward silence, mis-pronunciations, or a slew of f-bombs I cut out something relevant to the course. I test all of the code before pushing it to the repo so odds are, even if it is not shown in the demo, if it's required for the demo to work it will be in the repo. If that isn't true, or you still have issues- don't hesitate to contact me for help. Use the discussion boards in the course, or shout out on [twitter](https://twitter.com/wfbutton).
