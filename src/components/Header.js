import { useState } from "react";

const Header = () => {
    const [btn, setBtn] = useState('Login')
    console.log("Header Rendering")

    return (
        <div className="flex justify-between items-center p-4 bg-red-500 shadow-md">
            <img
                className="w-28 h-auto rounded-lg"
                src="https://img.freepik.com/premium-vector/beautiful-unique-food-restaurant-company-logo-design_981150-2182.jpg"
                alt="Restaurant Logo"
            />
            <nav>
                <ul className="flex space-x-5 text-2xl font-bold">
                    <li className="hover:text-yellow-500 cursor-pointer">Home</li>
                    <li className="hover:text-yellow-500 cursor-pointer">About</li>
                    <li className="hover:text-yellow-500 cursor-pointer">Menu</li>
                    <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
                    <button className="login p-3 bg-black
                     text-white rounded-lg" onClick={() => {
                        btn === "Login" ? setBtn("Logout") : setBtn("Login")
                    }}>{btn}</button>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
