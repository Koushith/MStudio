import { Image, Navbar } from "@mantine/core";
import Logo from "../../../assets/logo.svg";

export const TopNavbar = () => {
  return (
    <nav>
      <Image src={Logo} height={30} width={"auto"} />
    </nav>
  );
};
