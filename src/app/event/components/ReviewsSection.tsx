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
    {
      name: "1:1 klant over Anníka van Loon",
      title: "",
      text: "Het contact met Anníka verloopt vanaf het begin heel erg prettig. Anníka is begripvol, zakelijk, vriendelijk en alert. Ze geeft me vertrouwen in een goed verloop van het proces door de bullrun. Niek geeft duidelijke uitleg, neemt de tijd om te verhelderen, luistert naar wat ik zeg en beantwoordt mijn vragen goed.",
      date: "21 maand 2025",
      bgColor: "#FFE4E1",
      textColor: "#4A4A4A",
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
    {
      name: "Kelly over Michael de Jong en Sjoerd Lommen",
      title: "",
      text: "Echt dikke complimenten voor Michael en Sjoerd. Geen onnodig ingewikkeld gedoe, maar heldere uitleg, eerlijke inzichten en praktische tips waar je echt iets aan hebt. Of je nu net begint of al wat ervaring hebt, hun content geeft je telkens weer nieuwe inzichten.",
      date: "21 maart 2025",
      bgColor: "#fbf8bc",
      textColor: "#525252",
    },
    {
      name: "Samantha van Vianen over Giovanni Jimmink",
      title: "",
      text: "In Spanje is het vaak een wild westen als het op makelaars aankomt, maar bij Giovanni weet je zeker dat je in goede handen bent. Hij spreekt de taal, kent de markt door en door, en – misschien wel het belangrijkste – hij denkt echt met je mee, ook ver na de aankoop.",
      date: "21 maart 2025",
      bgColor: "#c1ecf5",
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
