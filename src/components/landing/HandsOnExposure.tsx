import yosemiteValleyImage from '../../assets/landing/yosemite-valley.jpg';

const HandsOnExposure = () => {
    return ( 
        <div className="w-full flex p-10">
            <img
                className="w-[60vw] h-[50vh] object-cover"
                src={yosemiteValleyImage} // Use the imported image
                alt="Yosemite Valley" 
            />

            <div className="flex w-[30vw] flex-col my-auto gap-2 px-10 mx-auto text-[#0E2F3F]">
                <h3 className="text-[50px] font-extrabold tracking-wide leading-[1.1]">HANDS-ON EXPOSURE</h3> {/* Increased font size, weight, and spacing */}
                <p className="max-w-150 text-[25px]">Invaluable resources to prepare you for your dream career</p>
                <button className="border-[#0E2F3F] border-4 mx-auto px-4 py-2">READ MORE</button>
            </div>
        </div>
    );
}

export default HandsOnExposure;
