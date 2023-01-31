import Head from 'next/head'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found!</title>
      </Head>
      <main>
        <h1>Error 404</h1>
        <h2>This is not the page you are looking for!</h2>
      </main>
    </>
  )
}
