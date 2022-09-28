import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";
export default function Videos() {
  const { data: videos, isError, isLoading, error } = useGetVideosQuery();
  console.log(videos);

  let content = null;
  if (isLoading) {
    content = <VideoLoader></VideoLoader>;
  }
  if (!isLoading && isError) {
    content = <Error message="there was an error"></Error>;
  }
  if (!isLoading && !isError && videos.length === 0) {
    content = <Error message="No videos found"></Error>;
  }
  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }
  return <>{content}</>;
}
