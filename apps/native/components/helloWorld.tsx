import { trpc } from "api/src/trpc";
import { Text } from "react-native";

export function HelloWorld() {
  const hello = trpc.useQuery(["hello.world", { text: "from tRPC!" }]);
  return <Text>{hello && hello.data && hello.data.greeting}</Text>;
}
