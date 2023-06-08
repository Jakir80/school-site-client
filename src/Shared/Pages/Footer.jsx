
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-500 py-8 mt-64 p-8 mb-10">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                        <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                       <div className="flex gap-2 items-center">
                        <h1 className="text-white">Toy's World</h1>
                       <img className="h-14 w-auto" src="https://i.ibb.co/qdYFr2f/box.png" alt="" />
                       </div>
                        <p className="text-white text-sm">We are dedicated to bringing joy and imagination to kids through our wide range of high-quality toys. Explore our collection and spark your child's creativity today!</p>
                    </div>
                    <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                        <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
                        <p className="text-white text-sm">123 Main Street</p>
                        <p className="text-white text-sm">City, State, ZIP</p>
                        <p className="text-white text-sm">Phone: 123-456-7890</p>
                        <p className="text-white text-sm">Email: info@example.com</p>
                    </div>
                    <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                        <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4 text-white">
                          <button ><FaInstagram className="w-12 h-12"></FaInstagram></button>
                           <button> <FaFacebook className="w-12 h-12"></FaFacebook></button>
                            <button><FaTwitter className="w-12 h-12"></FaTwitter></button>
                            
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-white text-sm">© 2023 Toy's World . All rights reserved.</p>
                </div>
            </footer>

        </div>

    );
};

export default Footer;