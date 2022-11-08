import BlogSkeleton from "src/components/Algorithms/BlogSkeleton";
import { Prism } from "@mantine/prism";

export default function LeetCode5() {
  const naiveSolution = `
    class Solution:
      def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        for i in range(len(temperatures)):
            if i == (len(temperatures) - 1):
                res[i] = 0
                break
            for j in range(i + 1, len(temperatures)):
                if temperatures[i] < temperatures[j]:
                    res[i] = j-i
                    break
        return res
  `;

  const betterSolution = `
    class Solution:
      def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # Monotonic stack solution 
        res, stack = [0] * len(temperatures), deque()
        for i, temp in enumerate(temperatures):
            while stack and temp > temperatures[stack[-1]]:
                index = stack.pop()
                res[index] = i - index
            stack.append(i)
        return res
  `;
  return (
    <BlogSkeleton
      title="Daily Temperatures"
      link="https://algorithms.com/problems/daily-temperatures"
    >
      <div className="mb-8">
        <h3 className="mb-2">Naive Solution:</h3>
        <Prism language="python">{naiveSolution}</Prism>
      </div>
      <div className="mb-8">
        <h3 className="mb-2">Better Solution:</h3>
        <Prism language="python">{betterSolution}</Prism>
      </div>
    </BlogSkeleton>
  );
}
