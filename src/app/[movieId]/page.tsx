import { MovieDetails } from "./_components/MovieDetails";

type PageProps = {
  params: Promise<{ movieId: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { movieId } = await params;
  return (
    <div>
      <MovieDetails movieId={movieId} />
    </div>
  );
};
export default Page;
