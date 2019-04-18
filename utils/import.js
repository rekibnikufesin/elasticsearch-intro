"use strict";

const csv = require("csvtojson");
const ELASTICSEARCH = require("elasticsearch");
const Episodes = `./dataset/simpsons_episodes.csv`;
const ESCLUSTER = "http://localhost:9200";
const INDEX = "simpsons";
const TYPE = "episode";
const CLIENT = new ELASTICSEARCH.Client({
  host: ESCLUSTER,
  apiVersion: "7.0"
});

console.log("Bulk import into Elasticsearch");
csv()
  .fromFile(Episodes)
  .then(objs => {
    const BULK = [];
    objs.forEach(element => {
      BULK.push(
        { index: { _index: INDEX, _type: TYPE, _id: element.id } },
        element
      );
      console.log(`Adding ${element.id} to array`);
    });
    return BULK;
  })
  .then(result => {
    CLIENT.bulk(
      {
        body: result
      },
      (err, response) => {
        if (err) {
          console.log(err);
        }
        console.log("Processing complete", response);
      }
    );
  })
  .catch("error", err => {
    console.log(`File: import.js,`, `Line: 37 => `, process.env.PWD);
    console.log(`File: import.js,`, `Line: 37 => `, err);
  });
