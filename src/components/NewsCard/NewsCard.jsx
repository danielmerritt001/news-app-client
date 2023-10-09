import styles from './NewsCard.module.css'

const NewsCard = (props) => {
  return ( 
    <>
      <div>{props.article.title}</div>
    </>
  );
}

export default NewsCard;