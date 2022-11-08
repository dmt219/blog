import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

const HEADER_HEIGHT = 70;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#f5f5f5",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#E7E7E7",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: "#babfc2",
      color: "white",
    },
  },

  siteTitle: {
    fontFamily: "Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: "40px",
    fontWeight: 700,
    hyphens: "auto",
    letterSpacing: "-1px",
    lineHeight: 0.7,
    wordWrap: "break-word",
    margin: 0,
    position: "relative",
    paddingTop: "10px",
    a: {
      position: "relative",
      textDecoration: "none",
      color: "#404040",
    },
  },
}));

const links = [
  { link: "/about", label: "About" },
  { link: "/algorithms", label: "Algorithms" },
  { link: "/deconstructx", label: "Deconstruct X" },
  { link: "/books", label: "Books" },
  { link: "/blog", label: "Blog" },
];

export default function HeaderResponsive() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { pathname } = useRouter();
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: pathname === link.link,
      })}
      onClick={() => {
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb="1.5rem" className={classes.root}>
      <Container className={classes.header}>
        <div>
          <h1 className={classes.siteTitle}>
            <Link href={"/"} className="flex">
              Duc Tran
            </Link>
          </h1>
          <span className="text-xs text-gray-500">Software Engineer</span>
        </div>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
