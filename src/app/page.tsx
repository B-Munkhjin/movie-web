import { BigPoster } from "./_components/BigPoster";
import { UpComing } from "./_components/UpComing";
// import { Description } from "./_components/description";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";
import { getPopularMovies } from "@/lib/api";

export default async function Home() {
  const popularData = await getPopularMovies(1);
  const movies = popularData.results || [];
  return (
    <div className="w-full h-full flex flex-col ">
      <BigPoster />
      <div className="flex flex-col gap-8">
        <UpComing className="visible" />
        <Popular className="visible" />
        <TopRated className="visible" />
      </div>
    </div>
  );
}
