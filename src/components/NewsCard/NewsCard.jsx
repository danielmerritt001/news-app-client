import styles from './NewsCard.module.css'

const NewsCard = (props) => {
  return ( 
      <article className={styles.newsCard}>
        <a href={props.article.url} target='_blank' rel='noreferrer'>
          <img className={styles.image} src={props.article.urlToImage} alt="" />
        </a>
        <header className={styles.title}>{props.article.title}</header>
        {/* <p className={styles.content}>{props.article.content}</p> */}
      </article>
  );
}

export default NewsCard;