// TODO: find news API and integrate
// https://newsapi.org/docs/get-started#top-headlines

import axios from 'axios';
import {useEffect, useState} from 'react';

export default function news() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [articles, setArticles] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, seterror] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!articles) {

      axios
        .get('https://newsapi.org/v2/everything?q=water&apiKey=612d605ce49c4709bf7cc2a5c5277ba9')
        .then((res) => {
          let articles = res.data.articles;
          console.log('response:', res);
          // setArticles(res.data.articles);
          console.log('state value:', articles);
        }).catch((res) => {
        console.log('response erre:', res);
        seterror(res.toString());
        console.log('state value erre:', error);
      })
    }
  })


  return (
    <div className="mx-40">
      <h1 className="text-center py-10">News</h1>
      <p>coming soon ...</p>
      <p>{articles}</p>
      <p>{error}</p>
    </div>
  )
}