const Navbar = ({cartCount, openCart}) => {

    return (
        <nav className="bg-orange-500 p-4 text-white flex justify-between">
            <h1 className="text-xl font-bold">Products</h1>
            <button onClick={openCart} className="relative">
                Cart({cartCount})
            </button>

        </nav>
    )

}
export default Navbar