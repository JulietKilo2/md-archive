import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import DefaultCard from "./components/cards/DefaultCard";
import ItemCard from "./components/cards/ItemCard";

export default function Home() {
  return (
    <main className="layout-basics">
      <div className=" space-y-[16px]">
        <DefaultCard title="My archive"></DefaultCard>
        <DefaultCard title={"Currently learning"}>
          <p>Nextjs, advanced JavaScript and TypeScript</p>
        </DefaultCard>
        <DefaultCard title={"Skills"}>
          <p>JavaScript, TypeScript, React, Nextjs, TailwindCSS</p>
        </DefaultCard>
        <ul>
          <ItemCard
            title="sample title"
            tags={["html", "css"]}
            description="test description"
          />
        </ul>
      </div>
    </main>
  );
}
