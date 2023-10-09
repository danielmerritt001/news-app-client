// services
import * as newsService from '../../services/newsService'

// npm modules
import { useState, useEffect } from 'react'

const NewsList = () => {

  const [news, setNews] = useState([])

  // const fetchNews = async () => {
  //   const data = await newsService.index()
  //   setNews(data)
  // }
  // fetchNews()

  return ( 
    <>
      <div>NewsList</div>
    </>
  );
}

export default NewsList;