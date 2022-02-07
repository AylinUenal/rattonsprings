const GoogleNewsRss = require('google-news-rss');

const googleNews = new GoogleNewsRss();

googleNews
  .search('unicorns')
  .then(resp => console.log(resp));