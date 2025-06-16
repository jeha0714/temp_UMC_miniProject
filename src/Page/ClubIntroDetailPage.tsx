import { useParams } from "react-router-dom";
import ClubDetailCard from "../components/ClubIntroDetail/ClubDetailCard";

const ClubIntroDetailPage = () => {
  const { clubId } = useParams<{ clubId: string }>();

  if (!clubId || isNaN(Number(clubId))) {
    return <div>동아리가 없습니다.</div>;
  }

  return <ClubDetailCard clubId={Number(clubId)} />;
};

export default ClubIntroDetailPage;
