// "use client";
import BigPoster from "./_components/BigPoster";
import { UpComing } from "./_components/UpComing";
import { Discription } from "./_components/discription";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";

// import { useState, useEffect } from "react";

export default function Home() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count]);
  // const increase = () => {
  //   setCount(count + 1);
  // };
  // const dicrease = () => {
  //   setCount(count - 1);
  // };
  return (
    <div className="w-full h-full flex flex-col ">
      {/* <button
        onClick={dicrease}
        className="size-10 bg-black rounded-2xl text-white"
      >
        -
      </button>
      {count}
      <button
        onClick={increase}
        className="size-10 bg-black rounded-2xl text-white"
      >
        +
      </button> */}

      <BigPoster />
      <Discription className="w-full h-66 flex flex-col gap-5 p-5 sm:hidden " />
      <div className="flex flex-col gap-8">
        <UpComing className="visible" />
        <Popular className="visible" />
        <TopRated className="visible" />
      </div>
    </div>
  );
}
