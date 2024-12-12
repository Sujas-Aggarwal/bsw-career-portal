import yosemiteValleyImage from '../../assets/landing/yosemite-valley.jpg';

const HandsOnExposure = () => {
    return ( 
        <div className="w-full flex flex-col md:flex-row p-10">
            <img
                className="md:w-[50vw] md:h-[50vh] w-full aspect-video overflow-hidden object-cover object-center"
                src={yosemiteValleyImage} // Use the imported image
                alt="Yosemite Valley" 
            />

            <div className="flex w-full md:w-[40vw]  py-10 md:py-auto flex-col my-auto gap-0 md:px-10 md:mx-auto text-[#0E2F3F]">
                <h3 className="text-[30px] font-[Poppins]">Hands-on Exposure</h3>
                <p className="max-w-150">Invaluable resources to prepare you for your dream career</p>
                <button className="border-[var(--theme-color)] hover:bg-[var(--theme-color)] hover:text-white border-2 mt-2 mr-auto px-3 py-1">Read More</button>
            </div>
        </div>
    );
}

export default HandsOnExposure;
