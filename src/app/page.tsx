import { BigPoster } from "./_Components/BigPoster";
import { UpComing } from "./_Components/UpComing";
import { Discription } from "./_Components/discription";
import { Popular } from "./_Components/Popular";
import { TopRated } from "./_Components/TopRated";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col ">
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
