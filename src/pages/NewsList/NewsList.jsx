//components
import NewsCard from '../../components/NewsCard/NewsCard'

// services
import * as newsService from '../../services/newsService'

// npm modules
import { useState, useEffect } from 'react'

const NewsList = () => {

  const [news, setNews] = useState([])

  const fetchNews = async () => {
    const data = await newsService.index()
    setNews(data.articles)
  }

  if (news.length == 0) {
    fetchNews()
  }

  return ( 
    <>
      <div>NewsList</div>
      {news.map(article => {
        return <NewsCard key={article.url} article={article} />
      })
      }
    </>
  );
}

export default NewsList;