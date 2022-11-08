import Head from "next/head";
export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        <h1 className="mb-6">Blog</h1>
        <ul>
          <li>IEEE 754: floating point in modern computers</li>
        </ul>
      </div>
    </>
  );
}
