import Head from "next/head";

export default function BlogSkeleton(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div>
        <h1 className="mb-6">{props.title}</h1>
        <div>{props.children}</div>
      </div>
    </>
  );
}
