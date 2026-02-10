import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About - NextJS App 01</title>
        <meta name="description" content="About page" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          This is a sample Next.js 13.4 application using the Pages Router.
        </p>
        <Link href="/">
          <a className={styles.link}>← Back to Home</a>
        </Link>
      </main>
    </>
  )
}
