import Image from "next/image";
import hello from "./components/hello";
import Hello from "./components/hello";

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto p-6 min-h-[calc(100vh-6rem)]">
      <h1 className="text-1xl text-center flex ">Wellcome to Next.js</h1>
      <Hello />
    </div>
  );
}
