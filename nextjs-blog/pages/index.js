import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, i'm Gichohi Simon. I'm a softwatre engineer. I enjoy writing next js</p>
        <p>
        I like to write code, and on my freetime i like reading self help books to help me become a better human being.
        </p>
      </section>
    </Layout>
  )
}