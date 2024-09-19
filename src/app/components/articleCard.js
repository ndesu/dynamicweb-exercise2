import Link from "next/link";
import styles from "../page.module.css";

export default function ArticleCard(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={props.image.url}
        alt={props.image.alt}
      />
      <div className={styles.articleContent}>
        <h2>{props.title}</h2>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.blurb}>{props.blurb}</p>
        <Link className={styles.link} href={`article/${props.id}`}>Read More</Link>
      </div>
    </div>
  );
}
