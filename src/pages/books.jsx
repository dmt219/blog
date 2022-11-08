import Link from "next/link";
import Head from "next/head";
import { Blockquote } from "@mantine/core";

export default function Books() {
  return (
    <>
      <Head>
        <title>Books</title>
      </Head>
      <div>
        <h1 className="mb-6">Books</h1>
        <Blockquote cite="– George R.R. Martin">
          A reader lives a thousand lives before he dies . . . The man who never
          reads lives only one.
        </Blockquote>
        <p>
          I used to remember very little about most books I read. This is
          understandable as learning comes from repetition, and books are not
          designed for repetition. That said, there&apos;re techniques that help
          me read more actively, retain more information, and better internalize
          books. To learn more, check out{" "}
          <a
            href="https://robertheaton.com/2018/06/25/how-to-read/"
            target="_blank"
            rel="noreferrer noopener"
          >
            How to read
          </a>{" "}
          by Robert Heaton.
        </p>
        <p>
          This section is designed for me to practice the aforementioned
          methods. Read my reviews:
        </p>
        <ul>
          <li>
            <Link href="/books/sapiens">
              <i>Sapiens</i>
            </Link>{" "}
            by Yuval Noah Harari
          </li>
        </ul>
      </div>
    </>
  );
}
