type ImdbProps = {
  review: number;
  className: string;
  color: string;
};
export const Imdb = (props: ImdbProps) => {
  const { review, className, color } = props;
  return (
    <div className={className}>
      <h2 className={color}>{review}</h2>
      <span className="text-[#71717A]">/10</span>
    </div>
  );
};
