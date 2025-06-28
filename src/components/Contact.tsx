import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <section className="flex justify-center bg-white text-[#282828] mx-4 lg:mx-0 mt-16 lg:mt-20 py-20 lg:py-40">
      <div className="w-full px-6 lg:px-0 lg:w-1/3 text-center">
        <h1 className="text-3xl lg:text-6xl mb-6 lg:mb-8 px-4">
          Felis tortor feugiat et in congue.
        </h1>
        <div className="flex items-center relative mb-4">
          <input
            type="email"
            placeholder="janjansen@mail.com"
            className="w-full bg-[#F0F0F0] rounded-full py-3 lg:py-4 pl-6 pr-14 focus:outline-[#7F65CA]"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            width={20}
            className="cursor-pointer hover:text-[#7F65CA] absolute right-4"
          />
        </div>
        <div className="flex items-center justify-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-gray-600 text-sm lg:text-base">
            Ik ga akkoord met de algemene voorwaarden
          </span>
        </div>
      </div>
    </section>
  );
}
