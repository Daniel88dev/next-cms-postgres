import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <h1>NEXT CMS Postgres</h1>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Some Footer content</p>
      </footer>
    </div>
  );
}
