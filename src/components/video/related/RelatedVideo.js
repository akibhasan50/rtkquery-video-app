import { Link } from "react-router-dom";

export default function RelatedVideo({ relatedVideo }) {
  const { id, title, views, description, date, author, thumbnail } =
    relatedVideo;

  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to={`/videos/${id}`}>
          <img src={thumbnail} className="object-cover" alt={title} />
        </Link>
      </div>

      <div className="flex flex-col w-full">
        <Link to={`/videos/${id}`}>
          <p className="text-slate-900 text-sm font-semibold">{title}</p>
        </Link>
        <span className="text-gray-400 text-xs mt-2 hover:text-gray-600">
          {author}
        </span>
        <p className="text-gray-400 text-xs mt-1">
          {views} views . {date}
        </p>
      </div>
    </div>
  );
}
