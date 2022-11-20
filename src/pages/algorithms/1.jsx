import BlogSkeleton from "src/components/Algorithms/BlogSkeleton";
import CollapsibleContent from "src/components/Algorithms/CollapsibleContent";
import { Prism } from "@mantine/prism";
import { Code, Tabs } from "@mantine/core";

export default function LeetCode1() {
  const bruteForce = `
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      for i in range(0, len(nums)):
        for j in range(i+1, len(nums)):
          if nums[i] + nums[j] == target:
            return [i, j]
  `;

  const hashTable = `
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      dict = {}
        for index, item in enumerate(nums):
          if item in dict: return [dict[item], index]
          dict[target - item] = index
  `;

  const twoPointers = `
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      i, j, sortedNums = 0, len(nums) - 1, sorted(nums)
      while i != j:
        if sortedNums[i] + sortedNums[j] == target: return [nums.index(sortedNums[i]), len(nums) - 1 - nums[::-1].index(sortedNums[j])]
        elif sortedNums[i] + sortedNums[j] < target: i += 1
        else: j -= 1
  `;
  return (
    <BlogSkeleton title="LeetCode 1: Two Sum">
      <div className="mb-8">
        <h2 className="mb-2">Problem</h2>
        <p>
          <a
            href="https://leetcode.com/problems/two-sum"
            rel="noreferrer noopener"
            target="_blank"
          >
            Two Sum
          </a>
        </p>
      </div>
      <Tabs defaultValue="step-by-step">
        <Tabs.List>
          <Tabs.Tab value="step-by-step">Step by Step Guide</Tabs.Tab>
          <Tabs.Tab value="solutions">Solutions</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="step-by-step">
          <div className="mb-8">
            <h2 className="mb-2">Step by Step Guide</h2>
          </div>
          <p>
            Can you solve this in O(n<sup>2</sup>) time?
          </p>
          <CollapsibleContent buttonText="Show Hint">
            <h3 className="mb-2">Brute Force</h3>
            <p>
              The most straightforward solution is to use a double for loop to
              iterate through all pairs of numbers until we arrive at a
              solution. Can you solve this now?
            </p>
            <CollapsibleContent buttonText="Show Brute Force Solution">
              <Prism language="python">{bruteForce}</Prism>
              <p>
                Complexity: O(n<sup>2</sup>) time.
              </p>
              <p>Can we do this with 1 loop? Think about it.</p>
              <CollapsibleContent buttonText="Show Hint">
                <h3 className="mb-2">Hash Table</h3>
                <p>
                  At any iteration, we know the current number, and we know the
                  target. If any future number matches
                  <Code>target - current number</Code>, then we have our pair.
                  Indeed, we only need a single pass through the array!
                </p>
                <p>
                  Now, the problem boils down to how to efficiently store and
                  lookup <Code>target - current number</Code>. A hash table is
                  perfect because with a nice hash function its lookup time is
                  O(1). Can you solve this now?
                </p>
                <CollapsibleContent buttonText="Show Hash Table Solution">
                  <Prism language="python">{hashTable}</Prism>
                  <p>Complexity: O(n) time and O(n) space.</p>
                  <p>
                    Bonus: Any idea how to do this in O(nlogn) time and O(1)
                    space?
                  </p>
                  <CollapsibleContent buttonText="Show Hint">
                    <h3 className="mb-2">Two Pointers</h3>
                    <p>What common algorithm reminds you of O(nlogn)?</p>
                    <CollapsibleContent buttonText="Show Hint">
                      <p>
                        The idea is to first sort the array, place 1 pointer{" "}
                        <Code>i</Code> at the beginning of the sorted array, and
                        another pointer <Code>j</Code> at the end of the sorted
                        array (hence the name Two Pointers). Can you solve this
                        now?
                      </p>
                      <p>
                        Then we increment <Code>i</Code> if current sum is
                        smaller than target, or decrement <Code>j</Code> if
                        current sum is larger than target. This is possible
                        because the array is sorted.
                      </p>
                      <CollapsibleContent buttonText="Show Two Pointers Solution">
                        <Prism language="python">{twoPointers}</Prism>
                        <p>Complexity: O(nlogn) for sorting the array.</p>
                      </CollapsibleContent>
                    </CollapsibleContent>
                  </CollapsibleContent>
                </CollapsibleContent>
              </CollapsibleContent>
            </CollapsibleContent>
          </CollapsibleContent>
        </Tabs.Panel>
        <Tabs.Panel value="solutions">
          <div className="mb-8">
            <h2 className="mb-2">Solutions</h2>
          </div>
          <h3 className="mb-2">Brute Force</h3>
          <p>
            The most straightforward solution is to use a double for loop to
            iterate through all pairs of numbers until we arrive at a solution.
          </p>
          <Prism language="python">{bruteForce}</Prism>
          <p>
            Complexity: O(n<sup>2</sup>) time.
          </p>
          <h3 className="mb-2">Hash Table</h3>
          <p>
            At any iteration, we know the current number, and we know the
            target. If any future number matches
            <Code>target - current number</Code>, then we have our pair. Indeed,
            we only need a single pass through the array!
          </p>
          <p>
            Now, the problem boils down to how to efficiently store and lookup{" "}
            <Code>target - current number</Code>. A hash table is perfect
            because with a nice hash function its lookup time is O(1).
          </p>
          <Prism language="python">{hashTable}</Prism>
          <p>Complexity: O(n) time and O(n) space.</p>
          <h3 className="mb-2">Two Pointers</h3>
          <p>
            The idea is to first sort the array, place 1 pointer <Code>i</Code>{" "}
            at the beginning of the sorted array, and another pointer{" "}
            <Code>j</Code> at the end of the sorted array (hence the name Two
            Pointers).
          </p>
          <p>
            Then we increment <Code>i</Code> if current sum is smaller than
            target, or decrement <Code>j</Code> if current sum is larger than
            target. This is possible because the array is sorted.
          </p>
          <Prism language="python">{twoPointers}</Prism>
          <p>Complexity: O(nlogn) for sorting the array.</p>
        </Tabs.Panel>
      </Tabs>
    </BlogSkeleton>
  );
}
