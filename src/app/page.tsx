import { MovieCard } from "../Components/MovieCard";
import BigPoster from "./_components/BigPoster";
import { UpComing } from "./_components/UpComing";
import { Discription } from "./_components/discription";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <Header />
      {/* <MovieCard /> */}
      <BigPoster />
      <Discription />
      <UpComing />
    </div>
  );
}
