import TilesGrid from "src/components/Algorithms/TilesGrid";
import Head from "next/head";
import { Accordion } from "@mantine/core";
export default function Algorithms() {
  return (
    <>
      <Head>
        <title>Algorithms</title>
      </Head>
      <h1 className="mb-6">Algorithms</h1>
      <Accordion variant="contained" className="mb-6">
        <Accordion.Item value="newcomers">
          <Accordion.Control>How I learn</Accordion.Control>
          <Accordion.Panel>
            <p>
              Familiarity with common algorithms and data structures helps we
              solve challenging problems. For newcomers, I recommend:
            </p>
            <ul>
              <li>
                Pick a book or video lectures.{" "}
                <a
                  href="https://teachyourselfcs.com/#algorithms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  teachyourselfcs
                </a>{" "}
                offers a wide range of recommendations, can&apos;t go wrong with
                any. I personally chose{" "}
                <a
                  href="https://smile.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <i>The Algorithm Design Manual</i>
                </a>{" "}
                by Steven Skiena, along with the{" "}
                <a
                  href="https://www3.cs.stonybrook.edu/~skiena/373/videos/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  set of video lectures
                </a>{" "}
                Skiena generously provides online.
              </li>
              <li>
                Implement common algorithms and data structures in your chosen
                language. See my implementations{" "}
                <a href="#" target="_blank" rel="noreferrer noopener">
                  here
                </a>
                .
              </li>
              <li>
                Practice{" "}
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LeetCode
                </a>
                .
              </li>
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <p>
        My solutions and explanations to{" "}
        <a
          href="https://leetcode.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          LeetCode
        </a>{" "}
        problems:
      </p>
      <TilesGrid />
    </>
  );
}
