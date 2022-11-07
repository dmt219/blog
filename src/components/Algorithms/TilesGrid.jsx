import { SimpleGrid } from "@mantine/core";
import Tile from "src/components/Algorithms/Tile";
import Dot from "src/components/Algorithms/Dot";

const maxLength = 1001;
const indexes = Array.from(Array(maxLength).keys()).slice(1);

const finished = { 1: 0, 2: 1, 3: 1, 5: 1 };
/*
  {id: difficulty} with difficulty being
  0: Easy, 1: Medium, 2: Hard
 */

export default function TilesGrid() {
  const cards = indexes.map((index) => (
    <Tile key={index} difficulty={finished[index]} id={index} />
  ));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <div className="flex gap-2">
          <Dot color="green" />
          <span> Easy </span>
        </div>
        <div className="flex gap-2">
          <Dot color="orange" />
          <span> Medium </span>
        </div>
        <div className="flex gap-2">
          <Dot color="red" />
          <span> Hard </span>
        </div>
        <div className="flex gap-2">
          <Dot color="white" />
          <span> Not finished </span>
        </div>
      </div>
      <SimpleGrid
        cols={20}
        breakpoints={[
          { maxWidth: "md", cols: 10 },
          { maxWidth: "sm", cols: 5 },
        ]}
      >
        {cards}
      </SimpleGrid>
    </div>
  );
}
