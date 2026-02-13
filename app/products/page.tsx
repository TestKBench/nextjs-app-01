import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export const metadata = {
  title: 'Products - NextJS App 01',
  description: 'Product catalog',
}

const products = [
  { id: 1, name: 'Product A', price: '$99' },
  { id: 2, name: 'Product B', price: '$149' },
  { id: 3, name: 'Product C', price: '$199' },
]

export default function Products() {
  return (
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
      <Link href="/" className={styles.link}>← Back to Home</Link>
    </main>
  )
}
