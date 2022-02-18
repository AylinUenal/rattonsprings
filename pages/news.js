// https://newsapi.org/docs/get-started#top-headlines
import News from '../components/News'
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function news() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataArticles, setDataArticles] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!dataArticles) {

      axios
        .get('https://newsapi.org/v2/everything?q=water&apiKey=612d605ce49c4709bf7cc2a5c5277ba9')
        .then((res) => {
          setDataArticles(res.data.articles);
        }).catch((res) => {
        console.log('response erre:', res);
        setError(res.toString());
        console.log('state value erre:', error);
      })
    }
  })

  console.log('initial data:', dataArticles);

  if (dataArticles) {
    return (
      <div className="mx-40">
        <h1 className="text-center py-10">News</h1>
        <News data={dataArticles}/>
      </div>
    )
  }
  return <h2>No News!!</h2>
}