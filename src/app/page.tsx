import { MovieCard } from "../Components/MovieCard";
import BigPoster from "./_components/BigPoster";
import { UpComing } from "./_components/UpComing";
import { Discription } from "./_components/discription";
import Header from "./_components/Header";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";
// import { Bottom } from "./_components/Bottom";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <BigPoster />
      <Discription />
      <div className="flex flex-col gap-8">
        <UpComing />
        <Popular />
        <TopRated />
      </div>
      {/* <Bottom /> */}
    </div>
  );
}
