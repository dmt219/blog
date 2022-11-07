import { createStyles, Paper, Text } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
  },
  cardFinished: {
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },
  },
}));

export default function Tile({ id, difficulty }) {
  const difficultyColors = { 0: "green", 1: "orange", 2: "red" };
  const { classes, cx } = useStyles();
  return (
    <Paper
      withBorder
      radius="md"
      className={cx(classes.card, {
        [classes.cardFinished]: difficulty !== undefined,
      })}
      style={{ backgroundColor: difficultyColors[difficulty] }}
    >
      {difficulty === undefined ? (
        <Text size="sm" className="text-gray-500 flex justify-center">
          {id}
        </Text>
      ) : (
        <Link
          href={`/algorithms/${id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Text
            size="sm"
            className={"font-semibold flex justify-center"}
            style={{ fontFamily: "Roberto" }}
          >
            {id}
          </Text>
        </Link>
      )}
    </Paper>
  );
}
