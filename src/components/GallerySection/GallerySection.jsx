import { FaChevronDown } from "react-icons/fa6"
import ProjectCard from "./ProjectCard"

const GallerySection = () => {
    return(
        <div className="bg-med-gray px-4 lg:px-24 flex flex-col h-[60vh] shadow-2xl pt-16">
            <div className="text-2xl w-full text-center">Gallery</div>
            <div className="flex flex-row overflow-x-auto lg:flex-row h-full items-center justify-between">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <a href="#contact" className="w-full flex justify-center z-20 cursor-pointer">
                <div className="flex flex-col w-24 h-14 bg-dark-gray/80 backdrop-blur-sm rounded-t-full items-center justify-end text-white text-sm shadow-md hover:scale-[103%] transition-all duration-200">
                    <div>See More</div>
                    <FaChevronDown />
                </div>
            </a>
        </div>
    )
}

export default GallerySection