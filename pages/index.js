import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/Product";
import { Gallary } from "../styles/Gallary";
import Navbar from "../components/Navbar";

export default function Home() {
  const [results] = useQuery({ query: PRODUCT_QUERY });

  const { data, error, fetching } = results;

  const products = data?.products.data;

  if (error) return <p>Oh no....{error.message}</p>;

  if (fetching) return <p>Loading...</p>;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Gallary>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallary>
      </main>
    </div>
  );
}