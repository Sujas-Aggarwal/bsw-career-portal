import resourceImage1 from '../../assets/landing/Resource.jpg'; // Replace with the correct file name
import resourceImage2 from '../../assets/landing/HR.jpg'; // Replace with the correct file name
import resourceImage3 from '../../assets/landing/Interview.jpg'; // Replace with the correct file name

const Prepare = () => {
    return (
        <div className="w-full flex p-10 bg-[#0E2F3F]">
            <div className="flex w-[40vw] flex-col my-auto gap-4 pl-10 mx-auto text-white">
                <h3 className="text-[50px]">HANDS-ON EXPOSURE</h3>
                <p className="max-w-150 text-[25px]">Invaluable resources to prepare you for your dream career</p>
                <button className="border-[#fff] border-4 mx-auto px-4 py-2">READ MORE</button>
            </div>
            <div className="grid grid-cols-3 px-10 gap-10 w-[60vw]">
                {/* Box 1 */}
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <img src={resourceImage1} alt="Resource 1" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 text-black left-0 right-0 w-full text-center bold">RESOURCES</div>
                </div>
                {/* Box 2 */}
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <img src={resourceImage2} alt="Resource 2" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 text-black left-0 right-0 w-full text-center bold">HR PREP</div>
                </div>
                {/* Box 3 */}
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <img src={resourceImage3} alt="Resource 3" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 text-black left-0 right-0 w-full text-center bold">INTERVIEW PREP</div>
                </div>
            </div>
        </div>
    );
}

export default Prepare;
