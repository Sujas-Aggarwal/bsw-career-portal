import cvImage from '../../assets/landing/cv.jpg';
import offImage from '../../assets/landing/off.jpg';
import foreignImage from '../../assets/landing/foreign.jpg';
import hiddenImage from '../../assets/landing/hidden.jpg';
import schImage from '../../assets/landing/Sch.jpg';
import researchImage from '../../assets/landing/research.jpg';

const BuildProfile = () => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center  bg-[var(--theme-color)] py-10">
            <div className="flex px-10 pb-10 w-full md:w-[45vw] flex-col md:mx-10 md:my-auto gap-0 md:px-20 text-white">
                <h3 className="text-[40px] font-[Poppins]">Build Profile</h3>
                <p className="max-w-150">Everything you need to build your dream profile - collected in one place</p>
                <button className="border-white hover:bg-white hover:text-[var(--theme-color)] font-[Poppins] rounded border-2 mr-auto mt-2 px-2 py-1">Read More</button>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3 w-[80%] md:w-[55vw] gap-10 md:mr-10">
                {/* Box 1 */}
                <div className=" w-[150px] h-[150px] bg-white rounded-xl relative flex flex-col items-center justify-end overflow-hidden">
                    <img className="w-full h-full object-cover" src={cvImage} alt="CV Making" />
                    <div className="absolute bottom-0 w-full py-1 bg-gray-100 text-center shadow-md">CV Making</div>
                </div>
                {/* Box 2 */}
                <div className="w-[150px] h-[150px] bg-white rounded-xl relative flex flex-col items-center justify-end overflow-hidden">
                    <img className="w-full h-full object-cover" src={offImage} alt="Off-Campus" />
                    <div className="absolute bottom-0 w-full py-1 bg-gray-100 text-center shadow-md">Off-Campus</div>
                </div>
                {/* Box 3 */}
                <div className="w-[150px] h-[150px] bg-white rounded-xl relative flex flex-col items-center justify-end overflow-hidden">
                    <img className="w-full h-full object-cover" src={foreignImage} alt="Foreign Opportunities" />
                    <div className="absolute bottom-0 w-full py-1 bg-gray-100 text-center shadow-md">Foreign</div>
                </div>
                {/* Box 4 */}
                <div className="w-[150px] h-[150px] bg-white rounded-xl relative flex flex-col items-center justify-end overflow-hidden">
                    <img className="w-full h-full object-cover" src={hiddenImage} alt="Hidden Gems" />
                    <div className="absolute bottom-0 w-full py-1 bg-gray-100 text-center shadow-md">Hidden Gems</div>
                </div>
                {/* Box 5 */}
                <div className="w-[150px] h-[150px] bg-white rounded-xl relative flex flex-col items-center justify-end overflow-hidden">
                    <img className="w-full h-full object-cover" src={schImage} alt="Scholastic" />
                    <div className="absolute bottom-0 w-full py-1 bg-gray-100 text-center shadow-md">Scholastic</div>
                </div>
                {/* Box 6 */}
                <div className="w-[150px] h-[150px] bg-white rounded-xl relative flex flex-col items-center justify-end overflow-hidden">
                    <img className="w-full h-full object-cover" src={researchImage} alt="Research" />
                    <div className="absolute bottom-0 w-full py-1 bg-gray-100 text-center shadow-md">Research</div>
                </div>
            </div>
        </div>
    );
}

export default BuildProfile;
