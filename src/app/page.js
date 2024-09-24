import styles from "./page.module.css";
import data from "./data.json";
import ArticleCard from "./components/articleCard";

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.header}>Articles</h1>
      {data.map((article, i) => (
        <ArticleCard
          key={i}
          id={article.id}
          title={article.title}
          date={article.publishedDate}
          blurb={article.blurb}
          image={article.image}
        />
      ))}
    </main>
  );
}
