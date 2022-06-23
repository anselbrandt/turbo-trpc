import { NextPage } from "next";
import superjson from "superjson";
import { Button } from "ui";
import { trpc } from "../utils/trpc";

const data = {
  createdAt: new Date(),
  id: 1,
  name: "nic cage",
  oscar: false,
};

const str = superjson.stringify(data);
const json = JSON.parse(str);
const Web: NextPage<any> = () => {
  const hello = trpc.useQuery(["hello.world", { text: "from tRPC!" }]);
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <h2>superjson</h2>
      <div>
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </div>
      <div>{hello && hello.data && hello.data.greeting}</div>
    </div>
  );
};

export default Web;
