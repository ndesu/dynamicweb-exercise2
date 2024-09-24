import Link from "next/link";
import styles from "../page.module.css";
import { formatDateForArticle } from "./utils";

export default function ArticleCard({ blurb, id, image, date, title }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image.url} alt={image.alt} />
      <div className={styles.articleContent}>
        <h2>{title}</h2>
        <p className={styles.date}>{formatDateForArticle(date)}</p>
        <p className={styles.blurb}>{blurb}</p>
        <Link className={styles.link} href={`article/${id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
