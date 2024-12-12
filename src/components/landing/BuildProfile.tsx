import { Link } from "react-router-dom";
const BuildProfile = () => {
  const fields = ["SDE", "Quant", "Core", "Finance", "AI-ML", "Consulting"];

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center  bg-[var(--theme-color)] py-10 md:pt-16 md:pb-0">
      <div className="flex px-10 pb-10 w-full md:w-[80vw] flex-col md:mx-10 md:my-auto gap-0 md:px-20 text-white">
        <h3 className="text-[40px] font-[Poppins]">Build Profile</h3>
        <p className="max-w-150">
          FAQs, CV making guides and tips to get started, from seniors at the
          top of their fields.
        </p>
        <div className="flex gap-2 pt-2 justify-start items-center flex-wrap">
          {fields.map((item, index) => {
            return (
              <Link to={"/build/" + item.toLowerCase()}>
                <button
                  key={index}
                  className="border-white whitespace-nowrap hover:bg-white hover:text-[var(--theme-color)] font-[Poppins] rounded border-2 mr-auto mt-2 px-2 py-1"
                >
                  {item}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-[80%] md:w-[55vw] gap-10 md:flex hidden h-full">
        <img
          src="/assets/landing/build.svg"
          alt=""
          className="mb-0 object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
export default BuildProfile;
