import { useState } from "react";
import { Collapse, Button } from "@mantine/core";
export default function CollapsibleContent(props) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(!opened)}>{props.buttonText}</Button>
      <Collapse in={opened}>{props.children}</Collapse>
    </>
  );
}
