import Card from "../ClubList/Card";
import { TClub } from "../../types/club";

interface TagsProps {
  data: TClub[];
}

const Tags = ({ data }: TagsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {data.map((club) => (
        <Card
          key={club.clubId}
          clubId={club.clubId}
          imageUrl={club.imageUrl}
          tags={club.hashtags}
          clubName={club.name}
          description={club.description}
        />
      ))}
    </div>
  );
};

export default Tags;
