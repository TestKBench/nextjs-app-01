import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export const metadata = {
  title: 'About - NextJS App 01',
  description: 'About page',
}

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        This is a sample Next.js 15 application using the App Router.
      </p>
      <Link href="/" className={styles.link}>← Back to Home</Link>
    </main>
  )
}
