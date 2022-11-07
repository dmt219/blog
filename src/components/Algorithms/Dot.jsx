import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  dot: {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    borderWidth: "1px",
    display: "inline-block",
    borderStyle: "groove",
  },
}));
export default function Dot({ color }) {
  const { classes } = useStyles();
  return <div className={classes.dot} style={{ backgroundColor: color }} />;
}
