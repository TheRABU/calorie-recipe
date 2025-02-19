const Navbar = () => {
  return (
    <div className="navbar my-4 bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Recipe Calories</a>
      </div>
      <div className="hidden lg:flex flex-1">
        <ul className="flex justify-center items-center space-x-5">
          <li className="px-7 py-5 rounded-xl text-black cursor-pointer hover:bg-lime-500">
            Home
          </li>
          <li className="px-7 py-5 rounded-xl text-black cursor-pointer hover:bg-lime-500">
            Recipes
          </li>
          <li className="px-7 py-5 rounded-xl text-black cursor-pointer hover:bg-lime-500">
            About
          </li>
          <li className="px-7 py-5 rounded-xl text-black cursor-pointer hover:bg-lime-500">
            Search
          </li>
        </ul>
      </div>
      <div className="flex-none gap-5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full bg-green-500">
              <img alt="Tailwind CSS Navbar component" src="./Frame.png" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
