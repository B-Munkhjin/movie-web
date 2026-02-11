import BigPoster from "./_components/BigPoster";
import { UpComing } from "./_components/UpComing";
import { Discription } from "./_components/discription";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col ">
      <BigPoster />
      <Discription />
      <div className="flex flex-col gap-8">
        <UpComing className="visible" />
        <Popular className="visible" />
        <TopRated className="visible" />
      </div>
    </div>
  );
}
