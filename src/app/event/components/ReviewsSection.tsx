export default function ReviewsSection() {
  const leftReviews = [
    {
      name: "Christel Kersten over Tineke Zwart",
      title: "(cursist)",
      text: "Tineke heeft me echt al geld opgeleverd en het is allemaal zo veel makkelijker dan je denkt.",
      date: "21 maart 2025",
      bgColor: "#E6C7FF",
      textColor: "#525252",
    },
    {
      name: "Charlotte de Groof over Kim de Graeve",
      title: "",
      text: "Dankzij Kim is er financiële rust, structuur en vertrouwen in mezelf en in de toekomst.",
      date: "21 maand 2025",
      bgColor: "#7F65CA",
      textColor: "#FFFFFF",
    },
  ];

  const rightReviews = [
    {
      name: "Koen Ketelaars over Otto Schapendonk",
      title: "",
      text: "Otto toont keer op keer de markt een stapje voor te zijn met waardevolle en praktische inzichten over hoe je je geld het beste kunt investeren zodat je vermogen weet op te bouwen.",
      date: "21 maart 2025",
      bgColor: "#e3f0d5",
      textColor: "#525252",
    },
  ];

  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2>Reviews</h2>
        <h1 className="text-4xl leading-none">
          Reviews over de sprekers op deze dag
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-10">
        <div className="flex flex-col gap-5 md:flex-1/2">
          {leftReviews.map((review, index) => (
            <div
              className="p-6 rounded-3xl flex flex-col gap-5"
              style={{
                backgroundColor: review.bgColor,
                color: review.textColor,
              }}
              key={index}
            >
              <h3 className="text-2xl">
                {review.name}
                {review.title && (
                  <span className="ml-2 font-normal">{review.title}</span>
                )}
              </h3>
              <p>{review.text}</p>
              <p>{review.date}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 md:flex-1/2">
          {rightReviews.map((review, index) => (
            <div
              className="p-6 rounded-3xl flex flex-col gap-5"
              style={{
                backgroundColor: review.bgColor,
                color: review.textColor,
              }}
              key={index}
            >
              <h3 className="text-2xl">
                {review.name}
                {review.title && (
                  <span className="ml-2 font-normal">{review.title}</span>
                )}
              </h3>
              <p>{review.text}</p>
              <p>{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
