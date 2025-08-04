export default function ReviewsSection() {
  const leftReviews = [
    {
      full_name: "Marjolein Baas",
      username: "(cursist)",
      text: "Niemand kan dit soort ingewikkelde en technische dingen zo makkelijk uitleggen als dat Tineke dat kan.",
      date: "21 maart 2025",
      bgColor: "#E6C7FF",
      textColor: "#525252",
    },
    {
      full_name: "Anoniem",
      username: "",
      text: "De markt is zeer volatiel. Je ziet je geld hard stijgen en dalen. Door de begeleiding van Tineke lukt het mij om focus te houden op de lange termijn en dat vind ik heel waardevol.",
      date: "21 maart 2025",
      bgColor: "#7F65CA",
      textColor: "#FFFFFF",
    },
  ];

  const rightReviews = [
    {
      full_name: "Sionna Smith",
      username: "",
      text: "Ze geeft ontzettend veel waarde en blijft dat ook uitbreiden, dus ik voel me zeker en in staat om mijn eigen portfolio nu te beheren.",
      date: "21 maart 2025",
      bgColor: "#e3f0d5",
      textColor: "#525252",
    },
    {
      full_name: "Yara Gilissen",
      username: "",
      text: "Ik ben met een relatief klein bedrag ingestapt en dat is nu al bijna verdrievoudigd.",
      date: "21 maart 2025",
      bgColor: "#F9F6B3",
      textColor: "#525252",
    },
  ];

  return (
    <div className="mb-24">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-5xl text-[#282828]">Wat anderen vinden..</h2>
        <p className="max-w-[550px] text-center">
          De reviews zijn afkomstig van deelnemers die meededen met de Crypto
          Cursus, de Trading cursus en/of de Crypto Alerts.
        </p>
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
                {review.full_name}
                {review.username && (
                  <span className="ml-2 font-normal">{review.username}</span>
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
                {review.full_name}
                {review.username && (
                  <span className="ml-2 font-normal">{review.username}</span>
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
