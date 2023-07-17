import { useState } from "react";
import { Navbar } from "@mantine/core";
import {
  IconBellRinging,
  IconSwitchHorizontal,
  IconLogout,
  IconHome,
  IconActivity,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useStyles } from "./side-navbar.styles";

interface SideNavComponentProps {
  hidden?: boolean;
}

const navLinks = [
  { link: "/", label: "Home", icon: IconHome },
  { link: "/task", label: "Tasks", icon: IconActivity },
  { link: "", label: "Notifications", icon: IconBellRinging },
];

export const SideNavBar = ({ hidden }: SideNavComponentProps) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Home");

  const links = navLinks.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar width={{ sm: 200, lg: 300 }} p="md" hidden={hidden}>
      <Navbar.Section grow>{links}</Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
};
