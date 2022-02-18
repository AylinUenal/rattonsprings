import React from 'react';

export default function News({data}) {

  const news = data?.map(article => {
    return (
      <div key={article.publishedAt}
           className="mt-10 mr-10 p-5 bg-gray-50 rounded-lg shadow-xl w-1/4 border-bottom">
        <h3>{article.title}</h3>
        <p>Author: {article.author}</p>
        <p>Published by: {article.source.name}</p>
        <p>{article.content}</p>
      </div>
    );
  })

  return (
    <div className="flex flex-wrap">
      {news}
    </div>
  );
}
