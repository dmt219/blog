import { Code } from "@mantine/core";
import BlogSkeleton from "src/components/DeconstructX/BlogSkeleton";

export default function Git() {
  return (
    <BlogSkeleton title="Deconstruct Git">
      <h2>Git Repository</h2>
      <p>A Git Repository (simplified) is comprised of:</p>
      <ul>
        <li>
          A &#34;work tree&#34; - usually a regular directory where your code
          lives
        </li>
        <li>
          A &#34;Git directory&#34; - where Git stores its own data, usually the{" "}
          <Code className="text-lg">.git</Code> directory and a child directory
          of the work tree
        </li>
      </ul>
    </BlogSkeleton>
  );
}
