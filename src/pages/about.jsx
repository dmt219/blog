import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import profilePic from "public/images/your-host.jpg";
import { Code } from "@mantine/core";

export default function About() {
  return (
    <>
      <Head>
        <title>About Duc Tran</title>
      </Head>
      <div>
        <h1 className="mb-6">About me</h1>
        <div className="sm:flex gap-x-4">
          <div>
            <p>
              Hi, I&apos;m Duc. I develop web applications at{" "}
              <a
                href="https://ipvm.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                IPVM
              </a>
              .
            </p>
            <p>
              I created this website to log my personal intellectual
              development. I attempt to present my study in{" "}
              <a
                href="https://en.wikipedia.org/wiki/First_principle"
                target="_blank"
                rel="noreferrer noopener"
              >
                first principle
              </a>
              , which is usually how I like to think about things.
            </p>
            <p>
              I hope any fellow practitioner stumbling upon my website can have
              a good time pick up what I learnt and derive some values here.
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
            <Link href="/algorithms">Algorithms</Link>: How I learn algorithms,
            along with my solutions to{" "}
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
    </>
  );
}
