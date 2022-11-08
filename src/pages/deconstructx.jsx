import Link from "next/link";
import Head from "next/head";
export default function DeconstructX() {
  return (
    <>
      <Head>
        <title>Deconstruct X</title>
      </Head>
      <div>
        <h1 className="mb-6">Where X = Git, Redis, Docker, ...</h1>
        <p>
          This section is heavily inspired by my favorite Github repo{" "}
          <a
            href="https://github.com/codecrafters-io/build-your-own-x"
            target="_blank"
            rel="noreferrer noopener"
          >
            Build your own X
          </a>
          . My approach differs in that I don&apos;t expect my readers to{" "}
          <i>build their own X</i> (although they really should). Rather, I
          present the software&apos;s infrastructure using the least amount of
          code possible.
        </p>
        <p>
          It&apos;s a middle ground between using X and building X, i.e.
          learning the high-level logics behind low-level decisions.
          Understanding how these established technologies is created yields
          great dividend in any software crafting career.
        </p>
        <ul>
          <li>
            <Link href="/deconstructx/git">Git</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
