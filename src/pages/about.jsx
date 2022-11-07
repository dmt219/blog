import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import profilePic from "public/images/your-host.jpg";
import { Code } from "@mantine/core";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Duc Tran</title>
      </Head>
      <div style={{ fontSize: "1.25rem" }}>
        <h1 className="mb-6">About me</h1>
        <div className="sm:flex gap-x-4">
          <div>
            <p>
              Hi, I&apos;m Duc. I develop web applications at{" "}
              <a
                href="https://ipvm.com/forums/video-surveillance/topics/welcome-duc-tran-to-ipvm"
                target="_blank"
                rel="noreferrer noopener"
              >
                IPVM
              </a>
              .
            </p>
            <p>
              This website is designed to document my personal intellectual
              development in a way that can be helpful to others. I attempt to
              capture my study in{" "}
              <a
                href="https://en.wikipedia.org/wiki/First_principle"
                target="_blank"
                rel="noreferrer noopener"
              >
                first principle
              </a>{" "}
              so that any fellow practitioner can naturally and intuitively pick
              up what I learn. The majority of content is geared towards
              technology enthusiasts, though I hope anybody can acquire some
              values here no matter how small.
            </p>
          </div>
          <div className="relative">
            <div className="block">
              <Image
                src={profilePic}
                alt={"Duc Tran's image"}
                width={150}
                height={200}
              />
            </div>
            <p className="text-sm mt-1 text-gray-500">Your host, Duc Tran</p>
          </div>
        </div>
        <p className="mb-2">I&apos;m writing about:</p>
        <ul className="mt-0">
          <li>
            <Link href="/algorithms">Algorithms</Link>: How I&apos;m learning
            algorithms, along with my solutions and explanations to{" "}
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LeetCode
            </a>{" "}
            problems.
          </li>
          <li>
            <Link href="/deconstructx">Deconstruct X</Link>: Breakdowns of our
            favorite technologies such as Git, Redis, Docker.
          </li>
          <li>
            <Link href="books">Books</Link>: <i>What</i> I read. <i>How</i> I
            read.
          </li>
          <li>
            <Link href="blog">Blog</Link>: Other things I find interesting.
          </li>
        </ul>
        <p className="mt-6">
          Contact:{" "}
          <Code color="blue" className="text-lg">
            minhduc20021997 at gmail dot com
          </Code>
          . Feedback about my website, have questions, or just want to chat?
          I&apos;d love to hear from you.
        </p>
      </div>
    </div>
  );
}
