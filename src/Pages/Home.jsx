import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavBar from "../Component/NavBar";
const Home = () => {
  const [hover, setIsHovered] = useState(false);
  const [hover1, setIsHovered1] = useState(false);
  const [hover2, setIsHovered2] = useState(false);
  const [hover3, setIsHovered3] = useState(false);
  const [hover4, setIsHovered4] = useState(false);
  const [hover5, setIsHovered5] = useState(false);
  const [hover6, setIsHovered6] = useState(false);
  const [hover7, setIsHovered7] = useState(false);
  const [hover9, setIsHovered9] = useState(false);
  const [hover10, setIsHovered10] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-row items-start justify-center gap-5 mt-5">
      <div className="bg-white rounded-md shadow-md shadow-gray-400 px-3 ">
        <div
          className="relative flex items-center gap-2 mt-1 hover:text-orange-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-headset"
          >
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
            <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
          </svg>
          <a className="text-[15px] font-Roboto">Appliances</a>
        </div>
        <div className="absolute top-41 z-20 left-[28%]">
          {hover && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-30 bg-white pt-1 pl-2">
              <div className="">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>SMALL APPLIANCES</b>
                </a>
                <span className="flex flex-col mb-7">
                  <a className="text-[13px] font-Roboto text-[#]">Blender</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Deep Fryers
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Juicers</a>
                  <a className="text-[13px] font-Roboto text-[#]">Air Fryers</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Rice Cookers
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Toaster and Ovens
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">MicroWaves</a>
                  <a className="text-[13px] font-Roboto text-[#]">Bundles</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Vacuum Cleaners
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Kettle</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Yam Pounders
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">irons</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Electric Cookwarea
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Electric Drink Mixers
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Food Processors
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Coffee Makers
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Electric Pressure Cookers
                  </a>
                </span>
              </div>
              <div>
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>LARGE APPLIANCES</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto text-[#]">
                    Wasing Machines
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Fridges</a>
                  <a className="text-[13px] font-Roboto text-[#]">Freezers</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Air Conditioners
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Heaters</a>
                  <a className="text-[13px] font-Roboto text-[#]">Fans</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Air Purifers
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Water Dispensers
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Generators & Inventers
                  </a>
                </span>
                <a className="border-b-1 border-gray-400 mt-5 text-[15px] font-Roboto">
                  <b>HOME APPLIANCES</b>
                </a>
              </div>
              <div className="flex flex-col mr-40">
                <a className="text-[13px] font-Roboto text-[#]">Nexus</a>
                <a className="text-[13px] font-Roboto text-[#]">Hisense</a>
                <a className="text-[13px] font-Roboto text-[#]">PolyStar</a>
                <a className="text-[13px] font-Roboto text-[#]">TCL</a>
              </div>
            </div>
          )}
        </div>

        <div
          className="flex items-center gap-2 mt-2 hover:text-orange-300"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
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
            class="lucide lucide-smartphone-icon lucide-smartphone"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
          <p className="text-[15px] font-Roboto">Phones & Tablet</p>
        </div>
        <div className="absolute top-41 z-20 left-[28%]">
          {hover1 && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-20 bg-white pt-1 pl-2">
              <div className="flex flex-col ">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>MOBILE PHONES</b>
                </a>
                <span className="flex flex-col mb-5">
                  <a className="text-[13px] font-Roboto">Smartphones</a>
                  <a className="text-[13px] font-Roboto">Android Phones</a>
                  <a className="text-[13px] font-Roboto">iPhones</a>
                  <a className="text-[13px] font-Roboto">Android Phones</a>
                  <a className="text-[13px] font-Roboto">iPhones</a>
                  <a className="text-[13px] font-Roboto">Basic Phones</a>
                  <a className="text-[13px] font-Roboto">Refurbished Phones</a>
                  <a className="text-[13px] font-Roboto">Rugged Phones</a>
                  <a className="text-[13px] font-Roboto">Cordless Telephones</a>
                  <a className="text-[13px] font-Roboto">Dual Sim Phones</a>
                </span>
                <div className="mt-1 ">
                  <a className="border-b-1 border-gray-400 text-[15px] font-Roboto">
                    <b>TABLETS</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto text-[#]">iPads</a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Android Tablets
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Educational Tablets
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Tablet Accessories
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Amazon Fire Tablets
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Microsoft Tablets
                    </a>
                  </span>
                </div>
              </div>
              <div className="">
                <a className="border-b-1 border-gray-400 text-[15px] font-Roboto">
                  <b>MOBILE ACCESSORIES</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto text-[#]">
                    Accessory Kits
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Adapters</a>
                  <a className="text-[13px] font-Roboto text-[#]">Batteries</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Battery Chargers
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Bluetooth Headsets
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Cables</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Car Accessories
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Chargers</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Earphones & Headsets
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    MicroSD Cards
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Screen Protectors
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Selfie Sticks & Tripods
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Smart Watches
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Power Banks
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Phone Camera Lenses
                  </a>
                </span>
              </div>

              <div className="flex flex-col mb-11 pr-30">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>TOP SMARTPHONES</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto text-[#]">
                    iPhone 15 & 15 Pro Max
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Samsung Galaxy S24 & S24 Ultra
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Tecno Spark 20 & 20 Pro
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Itel S23 & S23 Plus
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Infinix Smart 8
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Xiaomi Redmi 13c
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Infinix Hot 40i
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Tecno Pop 8
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Itel A70</a>
                </span>
                <div className="mt-1 ">
                  <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                    <b>TOP PHONE BRANDS</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">Samsung</a>
                    <a className="text-[13px] font-Roboto">Apple</a>
                    <a className="text-[13px] font-Roboto">Xiaomi</a>
                    <a className="text-[13px] font-Roboto">Itel</a>
                    <a className="text-[13px] font-Roboto">Tecno</a>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="flex items-center gap-2 mt-2 hover:text-orange-300"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
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
            class="lucide lucide-git-pull-request-draft-icon lucide-git-pull-request-draft"
          >
            <circle cx="18" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <path d="M18 6V5" />
            <path d="M18 11v-1" />
            <line x1="6" x2="6" y1="9" y2="21" />
          </svg>
          <p className="font-Roboto text-[15px]">Health & Beauty</p>
        </div>
        <div className="absolute top-41 z-20 left-[28%]">
          {hover2 && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-10 bg-white pt-1 pl-2">
              <div className="flex flex-col mb-20">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>MAKE UP</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">
                    Concealers & Color Correctors
                  </a>
                  <a className="text-[13px] font-Roboto">Foundation</a>
                  <a className="text-[13px] font-Roboto">Powder</a>
                  <a className="text-[13px] font-Roboto">Lipstick</a>
                  <a className="text-[13px] font-Roboto">Eyeliner & Kajal</a>
                  <a className="text-[13px] font-Roboto">Mascara</a>
                </span>

                <div className="mt-5 ">
                  <a className="border-b-1 border-gray-400 text-[15px] font-Roboto">
                    <b>PERSONAL CARE</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto text-[#]">
                      Skin Care
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Sunscreens & Tanning Products
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Contraceptives & Lubricants
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Piercing & Tattoo Supplies
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Deodorants & Antiperspirants
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">Lip Care</a>
                  </span>
                </div>
              </div>

              <div className="">
                <a className="border-b-1 border-gray-400 text-[15px] font-Roboto">
                  <b>FRAGRANCES</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto text-[#]">Women’s</a>
                  <a className="text-[13px] font-Roboto text-[#]">Men’s</a>
                </span>
                <div className="flex flex-col">
                  <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                    <b>HAIR CARE</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">
                      Hair Cutting Tools
                    </a>
                    <a className="text-[13px] font-Roboto">
                      Shampoo & Conditioner
                    </a>
                    <a className="text-[13px] font-Roboto">
                      Wigs & Accessories
                    </a>
                  </span>
                </div>
                <div className="flex flex-col">
                  <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                    <b>ORAL CARE</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">Teeth Whitening</a>
                    <a className="text-[13px] font-Roboto">Toothpaste</a>
                  </span>
                </div>
              </div>

              <div className="flex flex-col pr-20">
                <a className="border-b-1 border-gray-400 text-[15px]">
                  <b>HEALTH CARE</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">First Aid</a>
                  <a className="text-[13px] font-Roboto">
                    Medical Supplies & Equipment
                  </a>
                  <a className="text-[13px] font-Roboto">
                    Alternative Medicine
                  </a>
                  <a className="text-[13px] font-Roboto">Feminine Care</a>
                  <a className="text-[13px] font-Roboto">Diabetes Care</a>
                </span>
                <div className="mt-1 ">
                  <a className="border-b-1 font-Roboto border-gray-400 text-[15px]">
                    <b>VITAMINS & DIETARY SUPPLEMENTS</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">
                      Vitamins & Minerals
                    </a>
                    <a className="text-[13px] font-Roboto">Supplements</a>
                    <a className="text-[13px] font-Roboto">
                      Multi & Prenatal Vitamins
                    </a>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="flex relative items-center gap-2 mt-2 hover:text-orange-300"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
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
            class="lucide lucide-house-icon lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <p className="font-Roboto text-[15px]">Home and Office</p>
        </div>
        <div className="absolute top-41 z-20 left-[28%]">
          {hover3 && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-10 bg-white pt-1 pl-2">
              <div className="flex flex-col mb-41">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>HOME & KITCHEN</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Bath</a>
                  <a className="text-[13px] font-Roboto">Bedding</a>
                  <a className="text-[13px] font-Roboto">Home Decor</a>
                  <a className="text-[13px] font-Roboto">Home Furniture</a>
                  <a className="text-[13px] font-Roboto">
                    Vacuums & Floor Care
                  </a>
                  <a className="text-[13px] font-Roboto">Wall Art</a>
                  <a className="text-[13px] font-Roboto">Cookware</a>
                  <a className="text-[13px] font-Roboto">Bakeware</a>
                  <a className="text-[13px] font-Roboto">Small Appliances</a>
                  <a className="text-[13px] font-Roboto">
                    Cutlery & Knife Accessories
                  </a>
                </span>
              </div>

              <div className="">
                <a className="border-b-1 border-gray-400 text-[15px] font-Roboto">
                  <b>OFFICE PRODUCTS</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto text-[#]">
                    Office & School Supplies
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Office Furniture & Lighting
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Packaging Material
                  </a>
                </span>
              </div>

              <div className="flex flex-col pr-37">
                <a className="border-b-1 border-gray-400 text-[15px]">
                  <b>HOME & OFFICE FURNITURE</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Kitchen & Dining</a>
                  <a className="text-[13px] font-Roboto">Lighting</a>
                  <a className="text-[13px] font-Roboto">Stationery</a>
                  <a className="text-[13px] font-Roboto">
                    Storage & Organization
                  </a>
                </span>
                <div className="mt-1 ">
                  <a className="border-b-1 border-gray-400 text-[15px]">
                    <b>OUTDOOR & GARDEN</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">Generator</a>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="flex relative items-center gap-2 mt-2 hover:text-orange-300"
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
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
            class="lucide lucide-tv-icon lucide-tv"
          >
            <path d="m17 2-5 5-5-5" />
            <rect width="20" height="15" x="2" y="7" rx="2" />
          </svg>
          <p className="text-[15px] font-Roboto">Electronics</p>
        </div>
        <div className="absolute top-41 z-20 left-[28%]">
          {hover4 && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-10 bg-white pt-1 pl-2">
              <div className="flex flex-col mb-27">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>TELEVISION & VIDEO</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Televisions</a>
                  <a className="text-[13px] font-Roboto">Smart TVs</a>
                  <a className="text-[13px] font-Roboto">LED & LCD TVs</a>
                  <a className="text-[13px] font-Roboto">QLED & OLED TVs</a>
                  <a className="text-[13px] font-Roboto">Curved TV</a>
                  <a className="text-[13px] font-Roboto">LG TV</a>
                  <a className="text-[13px] font-Roboto">Hisense TV</a>
                  <a className="text-[13px] font-Roboto">Samsung TV</a>
                  <a className="text-[13px] font-Roboto">Smart TV 32 Inches</a>
                  <a className="text-[13px] font-Roboto">Smart TV 43 Inches</a>
                  <a className="text-[13px] font-Roboto">Smart TV 55 Inches</a>
                  <a className="text-[13px] font-Roboto">TV Accessories</a>
                  <a className="text-[13px] font-Roboto">
                    DVD Players & Recorders
                  </a>
                </span>
              </div>

              <div className="">
                <a className="border-b-1 border-gray-400 text-[15px] font-Roboto">
                  <b>CAMERAS & PHOTOS</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto text-[#]">
                    Digital Cameras
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Projectors</a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Video Surveillance
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    CCTV Cameras
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Compact Cameras
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    SLR Digital Cameras
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Professional Video Cameras
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Sport & Action Cameras
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Instant Cameras
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">
                    Drones with Camera
                  </a>
                  <a className="text-[13px] font-Roboto text-[#]">Nikon</a>
                </span>
              </div>

              <div className="flex flex-col pr-25">
                <a className="border-b-1 border-gray-400 text-[15px]">
                  <b>HOME AUDIO</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">
                    Home Theatre Systems
                  </a>
                  <a className="text-[13px] font-Roboto">
                    Receivers & Amplifiers
                  </a>
                  <a className="text-[13px] font-Roboto">Sound Bars</a>
                  <a className="text-[13px] font-Roboto">
                    LG Home Theater System
                  </a>
                  <a className="text-[13px] font-Roboto">Hisense Sound Bar</a>
                  <a className="text-[13px] font-Roboto">Bluetooth Speakers</a>
                  <a className="text-[13px] font-Roboto">Subwoofers</a>
                  <a className="text-[13px] font-Roboto">LG</a>
                  <a className="text-[13px] font-Roboto">JBL</a>
                </span>
                <div className="mt-1 ">
                  <a className="border-b-1 border-gray-400 text-[15px]">
                    <b>GENERATORS & PORTABLE POWER</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">Generators</a>
                    <a className="text-[13px] font-Roboto">Power Inverters</a>
                    <a className="text-[13px] font-Roboto">
                      Solar & Wind Power
                    </a>
                    <a className="text-[13px] font-Roboto">Stabilizers</a>
                    <a className="text-[13px] font-Roboto">Batteries</a>
                    <a className="text-[13px] font-Roboto">Lithium Battery</a>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="flex items-center gap-2 mt-2 hover:text-orange-300"
          onMouseEnter={() => setIsHovered5(true)}
          onMouseLeave={() => setIsHovered5(false)}
        >
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
            class="lucide lucide-shirt-icon lucide-shirt"
          >
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
          </svg>
          <p className="text-[15px] font-Roboto">Fashion</p>
        </div>
        <div className="absolute top-41 z-20 left-[28%]">
          {hover5 && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-20 bg-white pt-1 pl-2">
              <div className="flex flex-col mb-15">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>WOMEN'S FASHION</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Clothing</a>
                  <a className="text-[13px] font-Roboto">Shoes</a>
                  <a className="text-[13px] font-Roboto">Accessories</a>
                  <a className="text-[13px] font-Roboto">Jewelry</a>
                  <a className="text-[13px] font-Roboto">Handbags & Wallets</a>
                  <a className="text-[13px] font-Roboto">
                    Underwear & Sleepwear
                  </a>
                  <a className="text-[13px] font-Roboto">Maternity</a>
                  <a className="text-[13px] font-Roboto">Dresses</a>
                  <a className="text-[13px] font-Roboto">Traditional</a>
                  <a className="text-[13px] font-Roboto">Beach & Swimwear</a>
                  <a className="text-[13px] font-Roboto">Flats</a>
                  <a className="text-[13px] font-Roboto">
                    Women Costumes & Accessories
                  </a>
                </span>
                <div className="">
                  <a className="border-b-1 border-gray-400 text-[15px] font-Roboto">
                    <b>KID'S FASHION</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto text-[#]">
                      Boy’s Fashion
                    </a>
                    <a className="text-[13px] font-Roboto text-[#]">
                      Girl’s Fashion
                    </a>
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <a className="border-b-1 border-gray-400 text-[15px]">
                  <b> MEN'S FASHION</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Clothing</a>
                  <a className="text-[13px] font-Roboto">Shoes</a>
                  <a className="text-[13px] font-Roboto">Accessories</a>
                  <a className="text-[13px] font-Roboto">
                    Underwear & Sleepwear
                  </a>
                  <a className="text-[13px] font-Roboto">
                    Traditional & Cultural Wear
                  </a>
                  <a className="text-[13px] font-Roboto">T-Shirts</a>
                  <a className="text-[13px] font-Roboto">Polo Shirts</a>
                  <a className="text-[13px] font-Roboto">Trousers & Chinos</a>
                  <a className="text-[13px] font-Roboto">Sneakers</a>
                  <a className="text-[13px] font-Roboto">Jewelry</a>
                  <a className="text-[13px] font-Roboto">Jerseys</a>
                </span>
                <div className="mt-1 ">
                  <a className="border-b-1 border-gray-400 text-[15px]">
                    <b>ALL FASHION</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">Fabrics</a>
                    <a className="text-[13px] font-Roboto">
                      Luggage & Travel Gear
                    </a>
                    <a className="text-[13px] font-Roboto">Multi-Pack</a>
                    <a className="text-[13px] font-Roboto">
                      Traditional & Cultural Wear
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col pr-28">
                <a className="border-b-1 border-gray-400 text-[15px]">
                  <b> WATCHES</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Men’s Watches</a>
                  <a className="text-[13px] font-Roboto">Women’s Watches</a>
                </span>
                <div className="mt-1 ">
                  <a className="border-b-1 border-gray-400 text-[15px]">
                    <b>SUNGLASSES</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">Men’s Sunglasses</a>
                    <a className="text-[13px] font-Roboto">Women’s Sunglasses</a>
                  </span>
                </div>
                    <div className="mt-1 ">
                  <a className="border-b-1 border-gray-400 text-[15px]">
                    <b>TOP BRANDS</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">Adidas</a>
                    <a className="text-[13px] font-Roboto">DeFacto</a>
                    <a className="text-[13px] font-Roboto">Nike</a>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-2 hover:text-orange-300" onMouseEnter={() => setIsHovered6(true)}
          onMouseLeave={() => setIsHovered6(false)}>
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
            class="lucide lucide-apple-icon lucide-apple"
          >
            <path d="M12 6.528V3a1 1 0 0 1 1-1h0" />
            <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />
          </svg>
          <p className="text-[15px] font-Roboto">Supermarket</p>
        </div>
<div className="absolute top-41 z-20 left-[28%]">
          {hover6 && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-20 bg-white pt-1 pl-2">
              <div className="flex flex-col mb-56">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>FOOD CUPBOARD</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Grains&Rice</a>
                  <a className="text-[13px] font-Roboto">Pasta & Noodles</a>
                  <a className="text-[13px] font-Roboto">Herbs, Spices & Seasoning</a>
                  <a className="text-[13px] font-Roboto">Malt Drinks</a>
                  <a className="text-[13px] font-Roboto">Coffee</a>
                  <a className="text-[13px] font-Roboto">Water</a>
                  <a className="text-[13px] font-Roboto">Cooking Oil</a>
                
                </span>
                </div>

              <div className="flex flex-col">
                <a className="border-b-1 border-gray-400 text-[15px]">
                  <b> BEVERAGES</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Soft Drink</a>
                  <a className="text-[13px] font-Roboto">Milk & Cream</a>
                  <a className="text-[13px] font-Roboto">Energy Drink</a>
                  <a className="text-[13px] font-Roboto">Bottled  Beverages</a>
                  <a className="text-[13px] font-Roboto">Juices</a>
                 
                </span>
                <div className="mt-2 ">
                  <a className="border-b-1 border-gray-400 text-[15px] ">
                    <b>HOUSEHOLD CLEANING</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">Laundry</a>
                    <a className="text-[13px] font-Roboto">Air Freshener </a>
                    <a className="text-[13px] font-Roboto">Toilet Paper & Wipers</a>
                    <a className="text-[13px] font-Roboto">Bathroom Cleaners</a>
                    <a className="text-[13px] font-Roboto">Dishwashing</a>
                    <a className="text-[13px] font-Roboto">Cleaning Tools</a>

                
                 
                  </span>
                      <div className="flex flex-col mb-10 mt-2">
                <a className="border-b-1 border-gray-400 text-[15px]">
                  <b>BEER, WINE & SPIRIT</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Beers</a>
                  
                  </span>
                </div>
                </div>
              </div>
              <div className="flex flex-col pr-33">
                <a className="border-b-1 border-gray-400 text-[15px]">
                  <b> BABY PRODUCTS</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Disposable Diapers</a>
                  <a className="text-[13px] font-Roboto">Bottle Feeding</a>
                  <a className="text-[13px] font-Roboto">Wipers & Refills</a>
                  </span>
                </div>
      
              </div>
  
          )}
        </div>

        <div className="flex items-center gap-2 mt-2 hover:text-orange-300" onMouseEnter={() => setIsHovered7(true)}
          onMouseLeave={() => setIsHovered7(false)}>
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
            class="lucide lucide-laptop-icon lucide-laptop"
          >
            <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
            <path d="M20.054 15.987H3.946" />
          </svg>
          <p className="text-[15px] font-Roboto">Computing</p>
        </div>
<div className="absolute top-41 z-20 left-[28%]">
          {hover7 && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-20 bg-white pt-1 pl-2">
              <div className="flex flex-col mb-25">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>COMPUTER</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Desktop</a>
                  <a className="text-[13px] font-Roboto">Laptops</a>
                  <a className="text-[13px] font-Roboto">Macbooks</a>
                  <a className="text-[13px] font-Roboto">Gaming Laptops</a>
                  <a className="text-[13px] font-Roboto">Hp EliteBook </a>
                  <a className="text-[13px] font-Roboto">Dell Latitude</a>
                  <a className="text-[13px] font-Roboto">Lenovo Thinkpad</a>
                  <a className="text-[13px] font-Roboto">Asus Zenbook</a>
                
                </span>
   <a className="border-b-1 border-gray-400 font-Roboto text-[15px] mt-5">
                  <b>DATA STORAGE</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">External Hard Drives</a>
                  <a className="text-[13px] font-Roboto">Usb Flash Drives</a>
                  <a className="text-[13px] font-Roboto">External Solid State</a>
                  
                
                </span>
                </div>

              <div className="flex flex-col">
                <a className="border-b-1 font-Roboto border-gray-400 text-[15px]">
                  <b> PRINTERS</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">Inkjet Printers</a>
                  <a className="text-[13px] font-Roboto">Laser Printers</a>
                  <a className="text-[13px] font-Roboto">Printer Ink & Toner</a>
                
                
                </span>
                <div className="mt-1 ">
                  <a className="border-b-1 font-Roboto border-gray-400 text-[15px] mt-5">
                    <b>COMPUTER ACCESSORIES</b>
                  </a>
                  <span className="flex flex-col">
                    <a className="text-[13px] font-Roboto">Keyboard & Mice</a>
                    <a className="text-[13px] font-Roboto">PC Gaming Hardware</a>
                    <a className="text-[13px] font-Roboto">Uninterrupted Power Supply</a>
                    <a className="text-[13px] font-Roboto">Memory Cards</a>
                    <a className="text-[13px] font-Roboto">Batteries</a>
                    <a className="text-[13px] font-Roboto">Scanners</a>
                    <a className="text-[13px] font-Roboto">Video Projectors</a>
                    <a className="text-[13px] font-Roboto">Bluetooth Keyboards</a>
                    <a className="text-[13px] font-Roboto">Bluetooth Mouse</a> 
                  </span>
                </div>
              </div>
              <div className="flex flex-col pr-47">
                <a className="border-b-1 font-Roboto border-gray-400 text-[15px]">
                  <b>TOP BRANDS</b>
                </a>
                <span className="flex flex-col">
                  <a className="text-[13px] font-Roboto">HP</a>
                  <a className="text-[13px] font-Roboto">Lenovo</a>
                  <a className="text-[13px] font-Roboto">Apple</a>
                  <a className="text-[13px] font-Roboto">Asus</a>
                  <a className="text-[13px] font-Roboto">Huawei</a>
                  <a className="text-[13px] font-Roboto">Microsoft</a>
                  <a className="text-[13px] font-Roboto">Kingston</a>
                  <a className="text-[13px] font-Roboto">Seagate</a>
                  <a className="text-[13px] font-Roboto">Samsung</a>
                  <a className="text-[13px] font-Roboto">Sandisk</a>
                  <a className="text-[13px] font-Roboto">Toshiba</a>
                  
                  </span>
                </div>
      
              </div>
  
          )}
        </div>
        <div
          className="flex items-center gap-2 mt-2 hover:text-orange-300"
          onMouseEnter={() => setIsHovered9(true)}
          onMouseLeave={() => setIsHovered9(false)}
        >
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
            class="lucide lucide-baby-icon lucide-baby"
          >
            <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
            <path d="M15 12h.01" />
            <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
            <path d="M9 12h.01" />
          </svg>
          <p className="text-[15px] font-Roboto">Baby Products</p>
        </div>

        <div className="absolute top-41 z-20 left-[28%]">
          {hover9 && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-20 bg-white pt-1 pl-2">
              <div className="flex flex-col mb-8">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>APPAREL & ACCESSORIES</b>
                </a>
                <span className="flex flex-col font-Roboto">
                  <a className="text-[13px] font-Roboto">Baby Boys</a>
                  <a className="text-[13px] font-Roboto">Baby Girls</a>
                </span>
                <div className="mt-10 mb-5">
                  <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                    <b>DIAPERING</b>
                  </a>
                  <span className="flex flex-col">
                    <a  className="text-[13px] font-Roboto">Disposable Diapers</a>
                    <a  className="text-[13px] font-Roboto">Diaper Bags</a>
                    <a  className="text-[13px] font-Roboto">Wipes & Holders</a>
                  </span>
                </div>
                <div className="mt-10 mb-5">
                  <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                    <b>BABY & TODDLER TOYS</b>
                  </a>
                  <span className="flex flex-col">
                    <a  className="text-[13px] font-Roboto">Activity Play Centers</a>
                    <a  className="text-[13px] font-Roboto">Music & Sound</a>
                    <a  className="text-[13px] font-Roboto">Bath Toys</a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <a className="border-b-1 font-Roboto border-gray-400 text-[15px]">
                  <b>BATHING & SKIN CARE</b>
                </a>
                <span className="flex flex-col">
                  <a  className="text-[13px] font-Roboto">Washcloths & Towels</a>
                  <a  className="text-[13px] font-Roboto">Grooming & Healthcare Kits</a>
                  <a  className="text-[13px] font-Roboto">Skin Care</a>
                  <a  className="text-[13px] font-Roboto">Bathing Tubs & Seats</a>
                </span>
                <div>
                  <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                    <b>FEEDING</b>
                  </a>
                  <span className="flex flex-col">
                    <a  className="text-[13px] font-Roboto">Bibs & Burp Cloths</a>
                    <a  className="text-[13px] font-Roboto">Breastfeeding</a>
                    <a  className="text-[13px] font-Roboto">Bottle-Feeding</a>
                    <a  className="text-[13px] font-Roboto">Pacifiers & Accessories</a>
                    <a  className="text-[13px] font-Roboto">Food Storage</a>
                    <a  className="text-[13px] font-Roboto">Highchairs & Booster Seats</a>
                    <a  className="text-[13px] font-Roboto">Solid Feeding</a>
                  </span>
                </div>
              </div>

              <div className="pr-18">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px] ">
                  <b>Gear</b>
                </a>
                <span className="flex flex-col">
                  <a  className="text-[13px] font-Roboto">Backpacks & Carriers</a>
                  <a  className="text-[13px] font-Roboto">Swings, Jumpers & Bouncers</a>
                  <a  className="text-[13px] font-Roboto">Walkers</a>
                </span>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative flex items-center gap-2 mt-1 hover:text-orange-300"
          onMouseEnter={() => setIsHovered10(true)}
          onMouseLeave={() => setIsHovered10(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-headset"
          >
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
            <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
          </svg>
          <p className="font-Roboto text-[15px]">Gaming</p>
        </div>
        <div className="absolute top-41 z-20 left-[28%]">
          {hover10 && (
            <div className="border-l-2 border-gray-400 rounded-sm flex gap-30 bg-white pt-1 pl-2">
              <div className="flex flex-col pr-17">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>PLAYSTATION</b>
                </a>
                <span className="flex flex-col">
                  <a  className="text-[13px] font-Roboto">Playstation 5</a>
                  <a  className="text-[13px] font-Roboto">Playstation 4</a>
                  <a  className="text-[13px] font-Roboto">Playstation 3</a>
                  <a  className="text-[13px] font-Roboto">Playstation Vita</a>
                </span>
                <div className="mt-19 mb-5">
                  <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                    <b>XBOX</b>
                  </a>
                  <span className="flex flex-col">
                    <a  className="text-[13px] font-Roboto">XBOX One</a>
                    <a  className="text-[13px] font-Roboto">XBOX 360</a>
                    <a  className="text-[13px] font-Roboto">XBOX</a>
                  </span>
                </div>
              </div>
              <div>
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>NINTENDO</b>
                </a>
                <span className="flex flex-col">
                  <a  className="text-[13px] font-Roboto">Nintendo 3DS </a>
                  <a  className="text-[13px] font-Roboto">Nintendo DS </a>
                  <a  className="text-[13px] font-Roboto">Nintendo Switch</a>
                  <a  className="text-[13px] font-Roboto">Nintendo Wii</a>
                </span>
              </div>
              <div className="mb-26">
                <a className="border-b-1 border-gray-400 font-Roboto text-[15px]">
                  <b>TOP GAMES</b>
                </a>
                <span className="flex flex-col pr-24">
                  <a  className="text-[13px] font-Roboto"> FIFA '23 PS5</a>
                  <a  className="text-[13px] font-Roboto">PES '23 PS4</a>
                  <a  className="text-[13px] font-Roboto">God of War</a>
                  <a  className="text-[13px] font-Roboto">Spiderman</a>
                  <a  className="text-[13px] font-Roboto">Call of Duty</a>
                  <a  className="text-[13px] font-Roboto">Assassin’s Creed Valhalla</a>
                  <a  className="text-[13px] font-Roboto">The Last Of Us</a>
                  <a  className="text-[13px] font-Roboto">The Witcher 3</a>
                  <a  className="text-[13px] font-Roboto">Metal Gear Solid</a>
                  <a  className="text-[13px] font-Roboto">Fallout</a>
                  <a  className="text-[13px] font-Roboto">Madden NFL</a>
                  <a  className="text-[13px] font-Roboto">Far Cry</a>
                  <a  className="text-[13px] font-Roboto">Grand Theft Auto</a>
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-2 hover:text-orange-300">
          <p className="text-[15px] font-Roboto ">Musical Instrument</p>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-3">
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
            class="lucide lucide-ellipsis-icon lucide-ellipsis"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
          <p className="font-Roboto text-[15px]">Other Categories</p>
        </div>
      </div>
      <div className="absolute top-41 z-20 left-[28%]">
        {/*   {hover11 && <div className="border-l-2 border-gray-400 rounded-sm flex gap-30 bg-white pt-1 pl-2">
            <div className="">
              <a className="border-b-1 border-gray-400 "><b>SMALL APPLIANCES</b></a><span className="flex flex-col"></span>
              </div>
              </div>
  } */}
      </div>
      <div className="w-180">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          arrows={false}
          showDots={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          <div>
            <img src="/src/assets/712X384_livenow.gif" alt="" className="" />
          </div>
          <div>
            <img src="/src/assets/712X384-G.png" alt="" />
          </div>
          <div>
            <img src="/src/assets/712x384 (1).png" alt="" />
          </div>
          <div>
            <img src="/src/assets/712x384 (1).jpg" alt="" />
          </div>
          <div>
            <img src="/src/assets/712x384 (3).png" alt="" />
          </div>
          <div>
            <img src="/src/assets/New-Arrival-Updated.jpg" alt="" />
          </div>
          <div>
            <img src="/src/assets/712x384-Flashsales.gif" alt="" />
          </div>
          <div>
            <img src="/src/assets/712x384.jpg" alt="" />
          </div>
        </Carousel>
      </div>
      <div className="flex flex-col gap-10">
        <div className="bg-white px-3 rounded-md pt-3">
          <div className="flex items-center gap-2">
            <span className="border rounded-4xl px-2 py-2 border-orange-300 ">
            
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
                class="lucide lucide-phone-icon lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </span>

            <p>
              CALL TO ORDER<span className="block">0</span>
            </p>
          </div>
          <div className="flex items-center  gap-2 mt-2">
            <span className="border rounded-4xl px-2 py-2 border-orange-300">
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
                class="lucide lucide-store-icon lucide-store"
                border=""
              >
                <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
                <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
                <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
              </svg>
            </span>

            <p className="">Sell on Jumia</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-2">
              {" "}
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
                class="lucide lucide-truck-icon lucide-truck"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
            </span>

            <p>Send Your Packages</p>
          </div>
        </div>
        <div>
          <img src="/src/assets/JFORCE-2.gif" alt="" />
        </div>
      </div>
      <div className="bg-white">
        <></>
      </div>
    </div>
  );
};

export default Home;
