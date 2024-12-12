import resourceImage1 from '../../assets/landing/Resource.jpg'; // Replace with the correct file name
import resourceImage2 from '../../assets/landing/HR.jpg'; // Replace with the correct file name
import resourceImage3 from '../../assets/landing/Interview.jpg'; // Replace with the correct file name

const Prepare = () => {
    return (
        <div className="w-full py-20 flex flex-col md:flex-row md:p-10 bg-[var(--theme-color)]">
            <div className="flex w-full md:w-[40vw] flex-col my-auto gap-1 pl-10 mx-auto text-white">
                <h3 className="text-[30px] font-[Poppins]">Hands-on Experience</h3>
                <p className="max-w-150">Invaluable resources to prepare you for your dream career</p>
                <button className="border-[#fff] hover:bg-white hover:text-[var(--theme-color)] border-2 mr-auto px-3 py-1 mt-2">Read More</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:px-10 pt-10 md:pt-0 gap-10 mx-auto w-[80%] md:w-[60vw]">
                {/* Box 1 */}
                <div className="aspect-square relative rounded-2xl ">
                    <img src={resourceImage1} alt="Resource 1" className="w-full rounded-3xl h-full object-contain object-center" />
                    <div className="absolute  font-[Poppins] bottom-[-30px] text-white left-0 right-0 w-full text-center bold">Resources</div>
                </div>
                {/* Box 2 */}
                <div className="aspect-square relative rounded-2xl ">
                    <img src={resourceImage2} alt="Resource 2" className="w-full rounded-3xl h-full object-contain object-center" />
                    <div className="absolute  font-[Poppins] bottom-[-30px] text-white left-0 right-0 w-full text-center bold">HR Prep</div>
                </div>
                {/* Box 3 */}
                <div className="aspect-square relative rounded-2xl ">
                    <img src={resourceImage3} alt="Resource 3" className="w-full rounded-3xl h-full object-contain object-center" />
                    <div className="absolute  font-[Poppins] bottom-[-30px] text-white left-0 right-0 w-full text-center bold">Interview Prep</div>
                </div>
            </div>
        </div>
    );
}

export default Prepare;
