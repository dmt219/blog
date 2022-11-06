import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  dot: {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    borderWidth: "1px",
    display: "inline-block",
  },
}));
export default function Dot({ color }) {
  const { classes } = useStyles();
  return <div className={classes.dot} style={{ backgroundColor: color }} />;
}
