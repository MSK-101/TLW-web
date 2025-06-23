

export interface Review {
  id: number;
  name: string;
  username: string;
  stars: number;
  content: string;
  date: string;
  backgroundColor: string;
  textColor: string;
}

interface ReviewCardProps {
  review: Review;
  className?: string;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-xl">
        {index < rating ? '★' : '☆'}
      </span>
    ))}
  </div>
);

const UserAvatar = () => (
  <div className="w-12 h-12 bg-gray-400 bg-opacity-30 rounded-full flex items-center justify-center flex-shrink-0">
    <svg className="w-6 h-6 opacity-70" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

export default function ReviewCard({ review, className = '' }: ReviewCardProps) {
  return (
    <div
      className={`
        ${review.backgroundColor} ${review.textColor}
        rounded-3xl p-6 h-[400px] w-full max-w-[300px]
        flex flex-col justify-between shadow-lg
        transition-transform duration-300 hover:scale-105
        ${className}
      `}
    >
      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <UserAvatar />
        <div className="min-w-0">
          <h3 className="font-semibold text-lg truncate">{review.name}</h3>
          <p className="text-sm opacity-80 truncate">{review.username}</p>
        </div>
      </div>

      {/* Star Rating */}
      <StarRating rating={review.stars} />

      {/* Review Content */}
      <p className="text-sm leading-relaxed flex-grow overflow-hidden">
        {review.content}
      </p>

      {/* Date */}
      <p className="text-sm opacity-75 mt-4">
        {review.date}
      </p>
    </div>
  );
}
