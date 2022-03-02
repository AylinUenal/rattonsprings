import React from 'react';

export default function News({data}) {

  const news = data?.map(article => {

    let formattedNewsContent = article.content.split("[")[0];
    let formattedNewsDate = article.publishedAt.split("T")[0];

    return (
      <div key={article.publishedAt}
           className="mt-10 mr-10 p-5 bg-gray-50 rounded-lg shadow-xl w-72 border-bottom">
        <h3 className="mb-5">{article.title}</h3>
        <p>Author: {article.author}</p>
        <p>Source: {article.source.name}</p>
        <p className="mb-5">Date: {formattedNewsDate}</p>
        <p className="mb-5">{formattedNewsContent}</p>
        <a href={article.url} target={"_blank"} className="text-secondary" rel="noreferrer">Read more</a>
      </div>
    );
  })

  return (
    <div className="flex flex-wrap">
      {news}
    </div>
  );
}
