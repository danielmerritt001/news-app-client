//components
import NewsCard from '../../components/NewsCard/NewsCard'

// services
import * as newsService from '../../services/newsService'

// npm modules
import { useState, useEffect } from 'react'

import styles from './NewsList.module.css'

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
    <main className={styles.main}>
      {news.map(article => {
        return <NewsCard key={article.url} article={article} />
      })
      }
    </main>
  );
}

export default NewsList;