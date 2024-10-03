import React, { useState } from 'react';
import unnamed from '../images/unnamed.jpg'; // Assuming the image is stored at this path

const Demo = () => {
    const [image, setImage] = useState(true); // Assuming the image is true to show the image

    return (
        <div className="min-h-[100px] grid gap-0 scroll-smooth">
            {/* Title and Meta Section */}
            <div className="px-6 space-y-1"> 
                <h1 className="px-8 py-4 text-lg font-bold leading-tight tracking-normal md:text-2xl lg:text-4xl md:font-extrabold lg:leading-loose">
                    Some North West Facing House Vastu Tips to Maintain a Prosperous Life
                </h1>
                <p className="px-6 mx-2 text-xs leading-tight tracking-normal text-blue-500 md:text-sm lg:text-base md:font-extrabold lg:leading-loose lg:tracking-wider">
                    Posted on 21 September, 2024, 12:20 IST
                </p>
            </div>

            {/* Image Section */}
            {image && (
                <div className="flex items-center justify-center px-8">
                    <img src={unnamed} className="w-full max-w-full" alt="Demo" />
                </div>
            )}

            {/* Paragraph Section */}
            <div className="grid gap-4 m-4 space-y-4 sm:grid-cols-12">
           
                <div className="min-h-[100px] text-left capitalize sm:col-span-3 space-y-4 px-8 py-9">
                    <h1 className="font-bold text-black">Table of Content</h1>
                     <a href="#main-entrance">
                        <h2 className="font-bold text-black">1. Main Entrance Placement</h2>
                    </a>
                    <a href="#living-room">
                        <h2 className="font-bold text-black">2. Living Room Vastu</h2>
                    </a>
                    <a href="#kitchen-placement">
                        <h2 className="font-bold text-black">3. Kitchen Placement</h2>
                    </a>
                    <a href="#master-bedroom">
                        <h2 className="font-bold text-black">4. Master Bedroom Location</h2>
                    </a>
                </div>

                <div className="min-h-[100px] sm:col-span-9 space-y-4 px-6 py-5">
                    <h1>
                        A North-West facing house can be auspicious if built and designed according to Vastu principles. 
                        Vastu Shastra emphasizes balance and harmony within a home by leveraging natural elements. 
                        The North-West direction is governed by the air element, and careful attention to its design can enhance prosperity, peace, 
                        and well-being. Below are some important Vastu tips to follow for a North-West facing house.
                    </h1>

                    <p>
                        <h2 id='main-entrance' className="font-bold">1. Main Entrance Placement</h2> 
                        The main entrance is pivotal in Vastu Shastra for a North-West facing house, ideally situated in the North-West corner facing West. This positioning aligns with the air element's influence, fostering a balanced flow of energy. Ensure the door is of substantial size, ideally the largest in the house, to symbolize openness to opportunities. Use sturdy materials like high-quality wood or metal for durability. Keep the area well-lit with soft, welcoming lighting to invite positive energy. Avoid obstructions such as heavy objects or large plants nearby to maintain a clear pathway for energy to enter freely. Incorporate auspicious symbols and light shades for decor, while a clean threshold and smooth-opening door enhance the ease of energy flow.
                    </p> 

                    <p>
                        <h2 id='living-room' className="font-bold">2. Living Room Vastu</h2> 
                        In a North-West facing house, the living room should ideally be positioned in the East or North-East direction to harness natural light effectively. Natural light promotes positivity and calmness, creating a serene atmosphere within the home. Opt for light-colored walls such as white or soothing pastel shades to amplify the brightness and enhance the sense of spaciousness. Arrange furniture thoughtfully to allow for smooth energy flow throughout the room, avoiding blocking pathways or creating cluttered spaces. Incorporate elements of nature through indoor plants or natural materials to further harmonize the living space with its surroundings, fostering a tranquil environment for relaxation and social gatherings alike.
                    </p> 

                    <p>
                        <h2 id='kitchen-placement' className="font-bold">3. Kitchen Placement</h2> 
                        In a North-West facing house, the kitchen should ideally be situated in the South-East direction, which is governed by the fire element according to Vastu Shastra. This placement harnesses the positive energies associated with fire, essential for cooking and nourishment. If locating the kitchen in the South-East direction isn't feasible, the North-West direction can also be considered, albeit with caution. It's crucial to maintain a clutter-free environment in the kitchen to facilitate the smooth flow of energy. Avoid placing the stove and sink adjacent to each other, as this could lead to a clash between the fire and water elements, potentially disrupting harmony within the household. Ensure ample ventilation and natural light in the kitchen to promote a healthy and vibrant cooking environment.
                    </p> 

                    <p>
                        <h2 id='master-bedroom' className="font-bold">4. Master Bedroom Location</h2> 
                        In a North-West facing house, the master bedroom should be ideally situated in the South-West corner. This placement is believed to provide stability and security to the occupants, enhancing their overall well-being. It is advisable to avoid placing the bed directly in front of the door to prevent the direct flow of energy towards it while sleeping. Additionally, using soothing colors like beige or light brown for the bedroom walls and décor can create a calming atmosphere conducive to restful sleep. These colors are believed to promote relaxation and harmony within the bedroom, facilitating a peaceful and rejuvenating rest environment.
                    </p> 
                </div>
            </div>
        </div>
    );
}

export default Demo;
