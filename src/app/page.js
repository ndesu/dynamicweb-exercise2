// import styles from "./page.module.css";
import data from "./data.json"

export default function Home() {
  console.log({data})
  return (
    <main>
      <h1>Article Listing</h1>
      {data.map((article) => (
        <h2>{article.title}</h2>
      ))}
    </main>
  );
}
