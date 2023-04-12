import Head from "next/head";
import Header from "components/Header"

export default function Home() {
  return (
      <div>
        <Head>
          <title>Airbnb style app</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Hello World</h1>
        <Header />
      </div>
      )
}
