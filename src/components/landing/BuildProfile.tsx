import cvImage from '../../assets/landing/cv.jpg';
import offImage from '../../assets/landing/off.jpg';
import foreignImage from '../../assets/landing/foreign.jpg';
import hiddenImage from '../../assets/landing/hidden.jpg';
import schImage from '../../assets/landing/sch.jpg';
import researchImage from '../../assets/landing/research.jpg';

const BuildProfile = () => {
    return (
        <div className="w-full flex bg-[#0E2F3F] py-10">
            <div className="flex w-[50vw] flex-col mx-10 my-auto gap-10 px-20 text-white">
                <h3 className="text-[60px]">Build Profile</h3>
                <p className="max-w-150 text-[25px]">Everything you need to build your dream profile - collected in one place</p>
                <button className="border-white border-4 mx-auto px-4 py-2">READ MORE</button>
            </div>
            <div className="grid grid-cols-3 w-[50vw] gap-10 mr-10">
                {/* Box 1 */}
                <div className="w-[150px] h-[150px] bg-white rounded-xl relative flex flex-col items-center justify-end overflow-hidden">
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
