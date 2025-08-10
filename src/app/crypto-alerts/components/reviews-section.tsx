"use client";

import Markdown from "@/components/ui/markdown";

export default function ReviewsSection({
  reviewsSectionData,
}: {
  reviewsSectionData: any;
}) {
  const { reviews, heading, description } = reviewsSectionData;

  return (
    <div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-5xl text-[#282828]">{heading}</h2>
        <p className="max-w-[550px] text-center">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col gap-5">
          {reviews
            .slice(0, Math.ceil(reviews.length / 2))
            .map((review: any) => (
              <div
                className="p-6 rounded-3xl flex flex-col gap-5"
                key={review.id}
                style={{
                  backgroundColor: review.bg_color_code,
                  color: review.text_color_code,
                }}
              >
                <h3 className="text-2xl">{review.username}</h3>
                <div className="flex flex-col gap-3">
                  <Markdown>{review.review}</Markdown>
                </div>
                {review.date && <p className="mt-auto">{review.date}</p>}
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-5">
          {reviews.slice(Math.ceil(reviews.length / 2)).map((review: any) => (
            <div
              className="p-6 rounded-3xl flex flex-col gap-5"
              key={review.id}
              style={{
                backgroundColor: review.bg_color_code,
                color: review.text_color_code,
              }}
            >
              <h3 className="text-2xl">{review.username}</h3>
              <div className="flex flex-col gap-3">
                <Markdown>{review.review}</Markdown>
              </div>
              {review.date && <p className="mt-auto">{review.date}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
