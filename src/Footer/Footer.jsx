import { Text, Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
export default function Footer() {
  return (
    <>
      <Flex gap="5">
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Product</Text>
        <Text>Contact</Text>
      </Flex>
    </>
  );
}
