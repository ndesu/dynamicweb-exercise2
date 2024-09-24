import data from "../../data.json";
import { formatDateForArticle } from "@/app/components/utils";
import styles from "../../page.module.css";

export default function Article({ params }) {
  const slug = params.slug;
  const articleData = data.find((article) => slug === article.id);

  return (
    <main>
      <div
        className={styles.articlePageHeaderWrapper}
        style={{
          backgroundImage: `url(${articleData.image.url})`,
        }}
      >
        <h1>{articleData.title}</h1>
        <p>{formatDateForArticle(articleData.publishedDate)}</p>
        <p>{articleData.blurb}</p>
      </div>
      <div className={styles.articlePageContentWrapper}>
        {articleData?.articleText?.map((paragraph, i) => (
          <p key={i}>{paragraph.data}</p>
        ))}
      </div>
    </main>
  );
}
