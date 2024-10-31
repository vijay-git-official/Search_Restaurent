const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-red-500 shadow-md">
            <img
                className="w-28 h-auto rounded-lg"
                src="https://img.freepik.com/premium-vector/beautiful-unique-food-restaurant-company-logo-design_981150-2182.jpg"
                alt="Restaurant Logo"
            />
            <nav>
                <ul className="flex space-x-5">
                    <li className="hover:text-yellow-500 cursor-pointer">Home</li>
                    <li className="hover:text-yellow-500 cursor-pointer">About</li>
                    <li className="hover:text-yellow-500 cursor-pointer">Menu</li>
                    <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
