import styles from './NewsCard.module.css'

const NewsCard = (props) => {
  return ( 
      <article className={styles.newsCard}>
        <header className={styles.title}>{props.article.title}</header>
        <a href={props.article.url} target='_blank' rel='noreferrer'>
          <img className={styles.image} src={props.article.urlToImage} alt="" />
        </a>
        <p className={styles.content}>{props.article.content}</p>
      </article>
  );
}

export default NewsCard;