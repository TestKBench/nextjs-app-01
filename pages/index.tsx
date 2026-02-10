import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS App 01 - Home</title>
        <meta name="description" content="Sample NextJS 13.4 application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to NextJS App 01
        </h1>
        <p className={styles.description}>
          Running on Next.js 13.4 with Pages Router
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
              <p>Learn more about this application</p>
            </a>
          </Link>

          <Link href="/products">
            <a className={styles.card}>
              <h2>Products &rarr;</h2>
              <p>View our product catalog</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
