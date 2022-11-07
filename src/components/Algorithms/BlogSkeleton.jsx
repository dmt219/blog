import Head from "next/head";

export default function BlogSkeleton(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div>
        <h1 className="mb-[1.5rem]">
          <a href={props.link} target="_blank" rel="noreferrer noopener">
            {props.title}
          </a>
        </h1>
        <div>{props.children}</div>
      </div>
    </>
  );
}
