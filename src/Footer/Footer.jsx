import { Flex, Link, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
export default function Footer() {
  return (
    <>
      <Theme>
        <Flex gap="9">
          <Link href="#" color="orange" size="3">
            Home
          </Link>
          <Link href="/1" color="orange" size="3">
            {" "}
            Aboute
          </Link>
          <Link href="/2" color="orange" size="3">
            {" "}
            Product
          </Link>
          <Link href="/3" color="orange" size="3">
            {" "}
            Contact
          </Link>
        </Flex>
      </Theme>
    </>
  );
}
