import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const products = [
  { id: 1, name: 'Product A', price: '$99' },
  { id: 2, name: 'Product B', price: '$149' },
  { id: 3, name: 'Product C', price: '$199' },
]

export default function Products() {
  return (
    <>
      <Head>
        <title>Products - NextJS App 01</title>
        <meta name="description" content="Product catalog" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Products</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <Link href="/">
          <a className={styles.link}>← Back to Home</a>
        </Link>
      </main>
    </>
  )
}
