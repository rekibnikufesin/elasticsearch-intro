'use strict';

const csv = require('csvtojson');
const ELASTICSEARCH = require('elasticsearch');
const Episodes = `${process.env.PWD}/dataset/simpsons_episodes.csv`;
const ESCLUSTER = 'http://localhost:9200';
const INDEX = 'simpsons';
const TYPE = 'episode';
const BULK = [];
const CLIENT = new ELASTICSEARCH.Client({
    host: ESCLUSTER,
    apiVersion: '5.0'
});

console.log('Bulk import into Elasticsearch');
csv()
    .fromFile(Episodes)
    .on('json',(obj) => {
        BULK.push(
            {index: {_index: INDEX, _type: TYPE, _id: obj.id } },
            obj
        );
        console.log(`Adding ${obj.id} to array`);
    })
    .on('end',() => {
        CLIENT.bulk({
            body: BULK
        }, (err) => {
            if (err) {
                console.log(err);
            } 
        })
        console.log('Processing complete');
    });
