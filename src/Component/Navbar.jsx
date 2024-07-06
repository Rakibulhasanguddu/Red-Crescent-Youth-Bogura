import { NavLink } from "react-router-dom";


const Navbar = () => {
    const link =<>
    <NavLink><li><a>Home</a></li></NavLink>
    <NavLink to='/about'><li><a>About Us</a></li></NavLink>
    <NavLink to='/unit'><li><a>Unit Member</a></li></NavLink>
    <NavLink to='/work'><li><a>Our Works</a></li></NavLink>
   
    </>
    return (
        <div>
            <div className="navbar  rounded-2xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-red-600 font-extrabold ">
       {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl text-red-600 font-bold">RCY BOGURA</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-red-600 font-extrabold">
    {link}
    </ul>
  </div>
  <div className="navbar-end">
    <img className=" w-20 h-20" src="https://i.postimg.cc/CLNWk3Pv/bdrcs-logo.png" alt="" />
  </div>
</div>
        </div>
    );
};

export default Navbar;