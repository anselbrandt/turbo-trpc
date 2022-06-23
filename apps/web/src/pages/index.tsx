import { Note } from "db";
import prisma from "db/client";
import { NextPage } from "next";
import superjson from "superjson";
import { SuperJSONResult } from "superjson/src/types";
import { Button } from "ui";
import { trpc } from "../utils/trpc";

const user = {
  createdAt: new Date(),
  id: 1,
  name: "nic cage",
  oscar: false,
};

const str = superjson.stringify(user);
const json = JSON.parse(str);

interface NotesProps {
  data: SuperJSONResult;
}

const Notes: NextPage<NotesProps> = ({ data }) => {
  if (!data) return null;
  const notes = superjson.deserialize(data) as Note[];
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.content}</div>
      ))}
    </div>
  );
};

interface Props {
  data: any;
}

const Web: NextPage<Props> = ({ data }) => {
  const hello = trpc.useQuery(["hello.world", { text: "from tRPC!" }]);
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <h2>superjson</h2>
      <div>
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </div>
      <h2>{hello && hello.data && hello.data.greeting}</h2>
      <h2>prisma:</h2>
      <Notes data={data} />
    </div>
  );
};

export default Web;

export const getServerSideProps = async () => {
  const data = await prisma.note.findMany();

  return {
    props: {
      data: superjson.serialize(data),
    },
  };
};
