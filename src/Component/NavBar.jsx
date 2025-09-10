import React, { useState } from "react";

const NavBar = () => {
const [dropdown, setIsDropdown] = useState(false)



  return (
    <div>
      <div className="flex items-center bg-[#F1F1F2] pl-90 gap-100">
        <a className="flex items-center gap-1 mt-2 mb-2">
          <img src="/src/assets/download (1).png" alt="" className="w-5" />
          <p className="text-orange-300 font-Roboto">Sell on Jumia</p>
        </a>
        <div className="flex items-center justify-center gap-5 mt-2 mb-2">
          <img src="/src/assets/download.png" className="w-20" />
          <a className="flex items-center">
            <img src="/src/assets/Screenshot (240).png" alt="" className="w-15" />
          </a>
          <a>  <img src="/src/assets/Screenshot.png" alt="" className="w-25" /></a>
        </div>
      </div>
      <div className=" bg-[#fffdfd] w-full">
        <span className="flex flex-row items-center justify-center gap-15 pt-5 pb-5">
        <img src="/src/assets/download.png" />
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="-mr-9">   <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg></span>
  
            <input
              type="text"
              placeholder="Search products, brands and categories"
              className="border rounded-sm pt-2 pb-2 pl-10 pr-70 placeholder:font-Roboto placeholder:text-[13px]"
            />
          </div>

          <button className="border border-orange-400 bg-orange-400 pt-1.5 pb-1.5 pl-7 pr-7 text-white text-[20px] font-Roboto rounded-md">
            Search
          </button>
          <div className="flex items-center gap-5">
          <a className="relative flex items-center hover:text-orange-300"
                 onMouseEnter={() => setIsDropdown(true)} onMouseLeave={()=>setIsDropdown(false)}>
                  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round-icon lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <p className="font-Roboto text-[15px]">Account</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down-icon lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
          <div className= {({ isActive }) =>
                isActive
                  ? "bg-white absolute top-[20%] left- px-5 py-5 rounded-sm"
                  : ""
              }>
           {dropdown && (
            <div className="flex flex-col ">
              <button className="border border-orange-400 bg-orange-400 pt-1.5 pb-1.5 pl-7 pr-7 text-white text-[20px] font-Roboto rounded-md shadow-md shadow-gray-500">Sign in</button>
              <a className="flex items-center gap-2 mt-5"> 
                <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round-icon lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <p className="font-Roboto text-[15px]">My Account</p>
            </a>
                     <a className="flex items-center gap-2 mt-5"> 
                <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round-icon lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <p className="font-Roboto text-[15px]">Orders</p>
            </a>
                   <a className="flex items-center gap-2 mt-5"> 
                <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round-icon lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <p className="font-Roboto text-[15px]">WishList</p>
            </a>
            </div>
           )}
          </div>
          <a className="flex items-center hover:text-orange-300 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <p className="font-Roboto text-[15px]">Help</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down-icon lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
          <a className="flex items-center hover:text-orange-300 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <p className="font-Roboto text-[15px]">Cart</p>
          </a>
          
        </div>
        
      </div>
      </span>
        </div>
        
    </div>
  );
};

export default NavBar;
