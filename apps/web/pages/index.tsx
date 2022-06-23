import superjson from "superjson";
import { Button } from "ui";

const data = {
  createdAt: new Date(),
  id: 1,
  name: "nic cage",
  oscar: false,
};

const str = superjson.stringify(data);
const json = JSON.parse(str);
export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <h2>superjson</h2>
      <div>
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </div>
    </div>
  );
}
