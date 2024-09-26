import data from "../../data.json";
import { formatDateForArticle } from "@/app/components/utils";
import styles from "../../page.module.css";
import ArticleTextDisplay from "@/app/components/ArticleTextDisplay";

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
        <p className={styles.date}>{formatDateForArticle(articleData.publishedDate)}</p>
        <p className={styles.articleBlurb}>{articleData.blurb}</p>
      </div>
      <div className={styles.articlePageContentWrapper}>
        {articleData?.articleText?.map((paragraph, i) => (
          <ArticleTextDisplay key={i} data={paragraph.data} type={paragraph.type}/>
        ))}
      </div>
    </main>
  );
}
