// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// GET: https://newsapi.org/v2/everything?q=bitcoin&apiKey=612d605ce49c4709bf7cc2a5c5277ba9
//
// var url = 'https://newsapi.org/v2/everything?' +
//     'q=Apple&' +
//     'from=2021-11-23&' +
//     'sortBy=popularity&' +
//     'apiKey=612d605ce49c4709bf7cc2a5c5277ba9';
//
// var req = new Request(url);
//
// fetch(req)
//     .then(function(response) {
//       console.log(response.json());
//     })
//
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// import { NextApiRequest, NextApiResponse } from "next";
//
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   res.send("Hello world!");
// };

// import axios from 'axios';
//
// axios
//     .get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=612d605ce49c4709bf7cc2a5c5277ba9')
//     .then((res) => {
//       console.log('log from axios response:', res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('612d605ce49c4709bf7cc2a5c5277ba9');
// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });