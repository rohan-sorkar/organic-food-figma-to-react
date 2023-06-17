import { useState } from "react";
import arrowDownSvg from "../assets/svg-icons/arrowDown.svg";
import arrowRightSvg from "../assets/svg-icons/arrowRight.svg";
import searchSvg from "../assets/svg-icons/search.svg";
import cartSvg from "../assets/svg-icons/cart.svg";
import homeOffer from "../assets/images/home-offer.png";
import homeOfferTwo from "../assets/images/home-offer-two.png";
import logo from "../assets/images/Logo.png";
import hamburgerMenu from "../assets/svg-icons/hamburger-menu-icon.svg";
import crossSvg from "../assets/svg-icons/cross.svg";
import orangeImg from "../assets/images/orange.png";
import veganFoodImg from "../assets/images/vegan-food.png";
import mailBoxImg from "../assets/images/mailbox-quality.png";
import calabreseImg from "../assets/images/products/calabrese.png";
import bananaImg from "../assets/images/products/banana.png";
import nutsImg from "../assets/images/products/nuts.png";
import tomatoImg from "../assets/images/products/tomato.png";
import mungBeanImg from "../assets/images/products/mung-bean.png";
import brownHazeNutImg from "../assets/images/products/brown-hazelnut.png";
import eggImg from "../assets/images/products/egg.png";
import sujiImg from "../assets/images/products/suji.png";
import avatar from "../assets/images/avatar.jpg";
import ecoFriendlyImg from "../assets/images/eco-friendly.png";
import organicJuiceImg from "../assets/images/organic-juice.png";
import organicFoodImg from "../assets/images/organic-food.png";
import nutsCookieImg from "../assets/images/nuts-cookie.png";
import blogOneImg from "../assets/images/blog-one.png";
import blogTwoImg from "../assets/images/blog-two.png";
import blankAvatar from "../assets/images/person.png";
import newsLetterImg from "../assets/images/newsletter.jpg";
import instaSvg from "../assets/svg-icons/Insta.svg";
import fbSvg from "../assets/svg-icons/Fb.svg";
import twitterSvg from "../assets/svg-icons/Twiter.svg";
import pinterestSvg from "../assets/svg-icons/Pintrest.svg";

const Home = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <section>
      {/* navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 bg-[#ffffff] px-4 py-3 shadow-sm xl:px-20 xl:py-5 2xl:px-40">
        <div className="flex items-center justify-between">
          <div className="flex cursor-pointer items-center gap-1 lg:gap-3">
            <img src={logo} className="h-10 w-7" alt="brand-logo" />
            <h2 className="text-lg font-bold text-blue-dianne lg:text-2xl">
              Organick
            </h2>
          </div>
          <ul className="hidden items-center gap-6 text-lg font-medium text-blue-dianne lg:flex xl:gap-12">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="group relative">
              <button className=" flex cursor-default items-center">
                {" "}
                Pages
                <img
                  className="ml-1 mt-1"
                  src={arrowDownSvg}
                  alt="arrow-down"
                />
              </button>
              <div className="invisible absolute -left-48 top-0 z-50 min-w-[560px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
                <div className="relative top-6 w-full rounded-xl bg-[#ffffff] p-6 shadow-xl">
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              className="-mx-2 block rounded-lg p-2 font-semibold text-blue-dianne transition duration-300 ease-in-out hover:bg-alabaster"
                            >
                              Course Editor
                              <p className="text-gray-500 font-normal">
                                All-in-one editor
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="-mx-2 block rounded-lg p-2 font-semibold text-blue-dianne transition duration-300 ease-in-out hover:bg-alabaster"
                            >
                              Accept payments
                              <p className="text-gray-500 font-normal">
                                Pre-build payments page
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="-mx-2 block rounded-lg p-2 font-semibold text-blue-dianne transition duration-300 ease-in-out hover:bg-alabaster"
                            >
                              Closed Captioning
                              <p className="text-gray-500 font-normal">
                                Use AI to generate captions
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              className="-mx-2 block rounded-lg p-2 font-semibold text-blue-dianne transition duration-300 ease-in-out hover:bg-alabaster"
                            >
                              Plugins
                              <p className="text-gray-500 font-normal">
                                Tweak existing functionality
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="-mx-2 block rounded-lg p-2 font-semibold text-blue-dianne transition duration-300 ease-in-out hover:bg-alabaster"
                            >
                              Batch uploads
                              <p className="text-gray-500 font-normal">
                                Get your time back
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="-mx-2 block rounded-lg p-2 font-semibold text-blue-dianne transition duration-300 ease-in-out hover:bg-alabaster"
                            >
                              Social sharing
                              <p className="text-gray-500 font-normal">
                                Generate content for socials
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">News</li>
          </ul>
          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex justify-between rounded-[36px] bg-[#fafafa] py-1 pl-6 pr-1">
              <input
                type="text"
                className="rounded-[36px] bg-[#fafafa] caret-acapulco outline-none"
              />
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-acapulco">
                <img src={searchSvg} alt="search" />
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-[36px] border border-[#e0e0e0] py-1 pl-1 pr-6">
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-dianne">
                <img src={cartSvg} alt="cart" />
              </div>
              <p className="xl:text-body">Cart (0)</p>
            </div>
          </div>
          {isOpenMenu ? (
            <img
              onClick={() => setIsOpenMenu(false)}
              className="h-5 w-5 cursor-pointer lg:hidden"
              src={crossSvg}
              alt="menu"
            />
          ) : (
            <img
              onClick={() => setIsOpenMenu(true)}
              className="cursor-pointer lg:hidden"
              src={hamburgerMenu}
              alt="menu"
            />
          )}
        </div>
      </nav>
      {isOpenMenu && (
        <div className="fixed top-16 z-10 w-full bg-[#ffffff] pb-5 shadow-lg lg:hidden">
          <div className="space-y-3 text-center">
            <h1 className="cursor-pointer bg-alabaster py-1 font-medium text-blue-dianne">
              Home
            </h1>
            <h1 className="cursor-pointer bg-alabaster py-1 font-medium text-blue-dianne">
              About
            </h1>
            <h1 className="cursor-pointer bg-alabaster py-1 font-medium text-blue-dianne">
              Pages
            </h1>
            <h1 className="cursor-pointer bg-alabaster py-1 font-medium text-blue-dianne">
              Shop
            </h1>
            <h1 className="cursor-pointer bg-alabaster py-1 font-medium text-blue-dianne">
              Projects
            </h1>
            <h1 className="cursor-pointer bg-alabaster py-1 font-medium text-blue-dianne">
              News
            </h1>
          </div>
          <div></div>
        </div>
      )}

      {/* banner */}
      <div className="home-banner w-full pt-16 md:h-[460px] lg:h-[660px]">
        <div className="space-y-5 p-10 md:pl-32 md:pt-20 lg:pl-72 lg:pt-32">
          <h3 className=" font-yellowtail text-2xl text-acapulco lg:text-4xl">
            100% Natural Food
          </h3>
          <h1 className=" text-heading-4 text-blue-dianne md:text-heading-3 lg:text-heading-1">
            Choose the best <br />
            healthier way <br />
            of life
          </h1>
          <button className=" flex items-center justify-center gap-3 rounded-2xl bg-golden-sand px-6 py-3 font-semibold text-blue-dianne md:px-10 md:py-4">
            Explore Now
            <img
              className=" rounded-xl bg-blue-dianne p-1"
              src={arrowRightSvg}
              alt="arrow-right"
            />
          </button>
        </div>
      </div>
      {/* offer */}
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-8 md:flex-row md:gap-8 md:py-16 lg:gap-14 lg:py-24">
        <img
          className="h-full  object-contain md:h-52 lg:h-72"
          src={homeOffer}
          alt="offer"
        />
        <img
          className="h-full object-contain md:h-52  lg:h-72"
          src={homeOfferTwo}
          alt="offer"
        />
      </div>
      {/* about us */}
      <div className="flex justify-center gap-10 bg-alabaster px-3 py-10 md:px-10 md:py-24">
        <div className="">
          <img
            className="hidden h-[34rem] object-contain lg:block"
            src={orangeImg}
            alt="orange"
          />
        </div>
        <div className="w-[702px]">
          <h5 className=" font-yellowtail text-[30px] text-acapulco md:text-[36px]">
            About Us
          </h5>
          <h1 className=" my-3 text-heading-5 text-blue-dianne md:text-heading-2">
            We Believe in Working <br />
            Accredited Farmers
          </h1>
          <p className="text-abbey md:text-body">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="my-6 md:my-10">
            <div className="mb-7 flex items-start gap-5">
              <div className="rounded-lg bg-[#ffffff] p-4 md:p-2">
                <img src={veganFoodImg} alt="vegan-food" />
              </div>
              <div className="-mt-1">
                <h5 className="text-[18px] font-medium text-blue-dianne md:text-heading-6">
                  Organic Foods Only
                </h5>
                <p className="text-[14px] text-abbey md:text-body">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="rounded-lg bg-[#ffffff] p-4 md:p-2">
                <img src={mailBoxImg} alt="mail-box" />
              </div>
              <div>
                <h5 className=" text-[18px] font-medium text-blue-dianne md:text-heading-6">
                  Quality Standards
                </h5>
                <p className="text-[14px] text-abbey md:text-body">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center gap-3 rounded-2xl bg-blue-dianne px-6 py-3 font-semibold text-[#ffffff] md:px-10 md:py-4">
            Shop Now
            <img
              className=" rounded-xl bg-acapulco p-1"
              src={arrowRightSvg}
              alt="arrow-right"
            />
          </button>
        </div>
      </div>
      {/* products category */}
      <div className="py-8 md:py-20">
        <div className="text-center">
          <h5 className=" font-yellowtail text-2xl text-acapulco md:text-4xl">
            Categories
          </h5>
          <h2 className=" mt-2 text-heading-5 text-blue-dianne md:text-heading-3">
            Our Products
          </h2>
        </div>

        <div className="mx-auto my-12 grid max-w-7xl grid-cols-1 place-items-center gap-5 px-5 md:grid-cols-2  md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
            <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
              vegetables
            </span>
            <img
              className="mx-auto h-44 w-44 object-cover"
              src={calabreseImg}
              alt="vegetable"
            />
            <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
              Calabrese Broccoli
            </p>
            <div className="flex items-center justify-between gap-7 pt-5">
              <div className="flex  gap-2">
                <del className=" text-alto">$20.00</del>
                <p className=" text-lg font-semibold text-blue-dianne">
                  $13.00
                </p>
              </div>
              <ul className="flex">
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul>
            </div>
          </div>
          <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
            <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
              fresh
            </span>
            <img
              className="mx-auto h-44 w-44 object-cover"
              src={bananaImg}
              alt="vegetable"
            />
            <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
              Fresh Banana Fruites
            </p>
            <div className="flex items-center justify-between gap-7 pt-5">
              <div className="flex  gap-2">
                <del className=" text-alto">$20.00</del>
                <p className=" text-lg font-semibold text-blue-dianne">
                  $14.00
                </p>
              </div>
              <ul className="flex">
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul>
            </div>
          </div>
          <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
            <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
              millets
            </span>
            <img
              className="mx-auto h-44 w-44 object-cover"
              src={nutsImg}
              alt="vegetable"
            />
            <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
              White Nuts
            </p>
            <div className="flex items-center justify-between gap-7 pt-5">
              <div className="flex  gap-2">
                <del className=" text-alto">$20.00</del>
                <p className=" text-lg font-semibold text-blue-dianne">
                  $15.00
                </p>
              </div>
              <ul className="flex">
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul>
            </div>
          </div>
          <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
            <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
              vegetables
            </span>
            <img
              className="mx-auto h-44 w-44 object-cover"
              src={tomatoImg}
              alt="vegetable"
            />
            <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
              Vegan Red Tomato
            </p>
            <div className="flex items-center justify-between gap-7 pt-5">
              <div className="flex  gap-2">
                <del className=" text-alto">$20.00</del>
                <p className=" text-lg font-semibold text-blue-dianne">
                  $17.00
                </p>
              </div>
              <ul className="flex">
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul>
            </div>
          </div>
          <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
            <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
              health
            </span>
            <img
              className="mx-auto h-44 w-44 object-cover"
              src={mungBeanImg}
              alt="vegetable"
            />
            <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
              Mung Bean
            </p>
            <div className="flex items-center justify-between gap-7 pt-5">
              <div className="flex  gap-2">
                <del className=" text-alto">$20.00</del>
                <p className=" text-lg font-semibold text-blue-dianne">
                  $11.00
                </p>
              </div>
              <ul className="flex">
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul>
            </div>
          </div>
          <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
            <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
              nuts
            </span>
            <img
              className="mx-auto h-44 w-44 object-cover"
              src={brownHazeNutImg}
              alt="vegetable"
            />
            <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
              Brown Hazelnut
            </p>
            <div className="flex items-center justify-between gap-7 pt-5">
              <div className="flex  gap-2">
                <del className=" text-alto">$20.00</del>
                <p className=" text-lg font-semibold text-blue-dianne">
                  $12.00
                </p>
              </div>
              <ul className="flex">
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul>
            </div>
          </div>
          <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
            <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
              fresh
            </span>
            <img
              className="mx-auto h-44 w-44 object-cover"
              src={eggImg}
              alt="vegetable"
            />
            <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
              Eggs
            </p>
            <div className="flex items-center justify-between gap-7 pt-5">
              <div className="flex  gap-2">
                <del className=" text-alto">$20.00</del>
                <p className=" text-lg font-semibold text-blue-dianne">
                  $17.00
                </p>
              </div>
              <ul className="flex">
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul>
            </div>
          </div>
          <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
            <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
              fresh
            </span>
            <img
              className="mx-auto h-44 w-44 object-cover"
              src={sujiImg}
              alt="vegetable"
            />
            <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
              Zelco Suji Elaichi Rusk
            </p>
            <div className="flex items-center justify-between gap-7 pt-5">
              <div className="flex  gap-2">
                <del className=" text-alto">$20.00</del>
                <p className=" text-lg font-semibold text-blue-dianne">
                  $15.00
                </p>
              </div>
              <ul className="flex">
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul>
            </div>
          </div>
        </div>

        <button className="mx-auto flex items-center justify-center gap-3 rounded-2xl bg-blue-dianne px-6 py-3 font-semibold text-[#ffffff] md:px-10 md:py-4">
          Load More
          <img
            className=" rounded-xl bg-acapulco p-1"
            src={arrowRightSvg}
            alt="arrow-right"
          />
        </button>
      </div>
      {/* testimonial */}
      <div className="bg-alabaster py-14 md:py-20">
        <div className="mb-8 text-center md:mb-12">
          <h5 className=" font-yellowtail text-2xl text-acapulco md:text-4xl">
            Testimonial
          </h5>
          <h2 className=" mt-2 text-heading-5 text-blue-dianne md:text-heading-3">
            What Our Customer Saying?
          </h2>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center px-6 pb-10 md:w-[590px] md:pb-14 lg:w-[780px]">
          <img className="h-16 w-16 rounded-full" src={avatar} alt="avatar" />
          <ul className="mb-5 mt-3 flex">
            <li>⭐</li>
            <li>⭐</li>
            <li>⭐</li>
            <li>⭐</li>
            <li>⭐</li>
          </ul>
          <p className="text-body text-blue-dianne">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <div className="text-center">
            <h6 className="mt-3 text-[20px] font-medium text-blue-dianne">
              Sara Taylor
            </h6>
            <p className="text-[15px] text-blue-dianne">Consumer</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="h-3 w-3 rounded-full bg-alto"></div>
              <div className="h-3 w-3 rounded-full bg-acapulco"></div>
              <div className="h-3 w-3 rounded-full bg-alto"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-5 border-t border-alto px-5 pt-10 md:gap-10 md:pt-14">
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-saltpan ring-4 ring-acapulco md:h-36 md:w-36">
            <h2 className="mt-2 text-2xl font-medium text-blue-dianne md:text-heading-4">
              100%
            </h2>
            <p className="text-[12px] text-blue-dianne md:text-[15px]">
              Organic
            </p>
          </div>
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-saltpan ring-4 ring-acapulco md:h-36 md:w-36">
            <h2 className="mt-2 text-2xl font-medium text-blue-dianne md:text-heading-4">
              285
            </h2>
            <p className="text-[12px] text-blue-dianne md:text-[15px]">
              Active product
            </p>
          </div>
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-saltpan ring-4 ring-acapulco md:h-36 md:w-36">
            <h2 className="mt-2 text-2xl font-medium text-blue-dianne md:text-heading-4">
              350+
            </h2>
            <p className="text-[12px] text-blue-dianne md:text-[15px]">
              Organic orchads
            </p>
          </div>
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-saltpan ring-4 ring-acapulco md:h-36 md:w-36">
            <h2 className="mt-2 text-2xl font-medium text-blue-dianne md:text-heading-4">
              25+
            </h2>
            <p className="text-[12px] text-blue-dianne md:text-[15px]">
              Years of farming
            </p>
          </div>
        </div>
      </div>
      {/* organic offer */}
      <div className=" bg-blue-dianne px-5 py-20">
        <div className=" mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between">
            <div className="">
              <h5 className="font-yellowtail text-2xl text-acapulco md:text-3xl">
                Offers
              </h5>
              <h2 className="mt-2 text-xl font-medium text-[#ffffff] md:text-heading-5">
                We Offer Organic For You
              </h2>
            </div>
            <button className="flex items-center justify-center gap-1.5 rounded-2xl bg-golden-sand px-4 py-3 text-xs font-semibold text-blue-dianne md:gap-3 md:px-10 md:py-4 md:text-sm">
              View All Product
              <img
                className=" rounded-xl bg-acapulco p-1"
                src={arrowRightSvg}
                alt="arrow-right"
              />
            </button>
          </div>
          <div className="mx-auto grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
              <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
                vegetables
              </span>
              <img
                className="mx-auto h-44 w-44 object-cover"
                src={calabreseImg}
                alt="vegetable"
              />
              <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
                Calabrese Broccoli
              </p>
              <div className="flex items-center justify-between gap-7 pt-5">
                <div className="flex  gap-2">
                  <del className=" text-alto">$20.00</del>
                  <p className=" text-lg font-semibold text-blue-dianne">
                    $13.00
                  </p>
                </div>
                <ul className="flex">
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                </ul>
              </div>
            </div>
            <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
              <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
                fresh
              </span>
              <img
                className="mx-auto h-44 w-44 object-cover"
                src={bananaImg}
                alt="vegetable"
              />
              <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
                Fresh Banana Fruites
              </p>
              <div className="flex items-center justify-between gap-7 pt-5">
                <div className="flex  gap-2">
                  <del className=" text-alto">$20.00</del>
                  <p className=" text-lg font-semibold text-blue-dianne">
                    $14.00
                  </p>
                </div>
                <ul className="flex">
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                </ul>
              </div>
            </div>
            <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
              <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
                millets
              </span>
              <img
                className="mx-auto h-44 w-44 object-cover"
                src={nutsImg}
                alt="vegetable"
              />
              <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
                White Nuts
              </p>
              <div className="flex items-center justify-between gap-7 pt-5">
                <div className="flex  gap-2">
                  <del className=" text-alto">$20.00</del>
                  <p className=" text-lg font-semibold text-blue-dianne">
                    $15.00
                  </p>
                </div>
                <ul className="flex">
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                </ul>
              </div>
            </div>
            <div className="max-w-xs rounded-3xl bg-alabaster px-5 pb-3 pt-5">
              <span className="rounded-lg bg-blue-dianne px-[9px] py-[3px] text-[15px] text-[#ffffff]">
                vegetables
              </span>
              <img
                className="mx-auto h-44 w-44 object-cover"
                src={tomatoImg}
                alt="vegetable"
              />
              <p className=" border-b border-alto pb-2 text-quotes text-blue-dianne">
                Vegan Red Tomato
              </p>
              <div className="flex items-center justify-between gap-7 pt-5">
                <div className="flex  gap-2">
                  <del className=" text-alto">$20.00</del>
                  <p className=" text-lg font-semibold text-blue-dianne">
                    $17.00
                  </p>
                </div>
                <ul className="flex">
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                  <li>⭐</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* friendly store */}
      <div className="flex items-center">
        <img
          className=" hidden object-cover md:block md:h-[700px] md:max-w-[450px] lg:h-[900px] lg:max-w-[850px] "
          src={ecoFriendlyImg}
          alt="eco-friendly"
        />
        <div className="max-w-[790px] rounded-xl bg-[#ffffff] p-6 md:-ml-20 md:p-14">
          <div className="mb-4 lg:mb-7">
            <h4 className=" font-yellowtail text-2xl text-acapulco md:text-3xl lg:text-4xl">
              Eco Friendly
            </h4>
            <h1 className=" mt-2 text-heading-5 text-blue-dianne lg:text-heading-3">
              Econis is a Friendly <br />
              Organic Store
            </h1>
          </div>
          <div className="mb-2 lg:mb-5">
            <h6 className="mb-2 text-[17px] font-medium text-blue-dianne lg:text-[25px]">
              Start with Our Company First
            </h6>
            <p className="text-[15px] font-normal text-abbey lg:text-[18px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div className="mb-5">
            <h6 className="mb-2 text-[17px] font-medium text-blue-dianne lg:text-[25px]">
              Learn How to Grow Yourself
            </h6>
            <p className="text-[15px] font-normal text-abbey lg:text-[18px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div className="mb-5">
            <h6 className="mb-2 text-[17px] font-medium text-blue-dianne lg:text-[25px]">
              Farming Strategies of Today
            </h6>
            <p className="text-[15px] font-normal text-abbey lg:text-[18px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>
      {/* organic juice, food, nuts */}
      <div className="flex flex-wrap items-center justify-center gap-10 bg-[#F1F8F4] px-6 py-10 md:py-24">
        <div className="relative max-w-sm">
          <img className="" src={organicJuiceImg} alt="juice" />
          <button className="absolute left-[25%] top-[43%]  rounded-2xl bg-[#ffffff] px-10 py-4 text-lg font-semibold tracking-wider text-blue-dianne">
            Organic Juice
          </button>
        </div>
        <div className="relative max-w-sm">
          <img className="" src={organicFoodImg} alt="food" />
          <button className="absolute left-[25%] top-[43%]  rounded-2xl bg-[#ffffff] px-10 py-4 text-lg font-semibold tracking-wider text-blue-dianne">
            Organic Food
          </button>
        </div>
        <div className="relative max-w-sm">
          <img className="" src={nutsCookieImg} alt="nuts" />
          <button className="absolute left-[25%] top-[43%]  rounded-2xl bg-[#ffffff] px-10 py-4 text-lg font-semibold tracking-wider text-blue-dianne">
            Nuts cookies
          </button>
        </div>
      </div>
      {/* discover & news */}
      <div className="px-6 pb-44 pt-10 md:pt-20">
        <div className="mx-auto mb-10 flex max-w-7xl items-center justify-between md:mb-16 ">
          <div className="">
            <h5 className="font-yellowtail text-2xl text-acapulco md:text-3xl">
              News
            </h5>
            <h2 className="mt-2 text-xl font-medium text-blue-dianne md:text-heading-5">
              Discover weekly content about <br /> organic food, & more
            </h2>
          </div>
          <button className="flex items-center justify-center gap-1.5 rounded-2xl border border-blue-dianne px-4 py-3 text-xs font-semibold text-blue-dianne md:gap-3 md:px-10 md:py-4 md:text-sm">
            More News
            <img
              className=" rounded-xl bg-acapulco p-1"
              src={arrowRightSvg}
              alt="arrow-right"
            />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-9 space-y-28 xl:space-y-0">
          <div className="relative">
            <img src={blogOneImg} alt="blog" />
            <div className="absolute left-8 top-8 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#ffffff]">
              <h3 className="text-[16px] font-semibold text-blue-dianne md:-mb-1.5 md:text-quotes">
                25
              </h3>
              <h3 className="-mt-1.5 text-[15px] font-medium text-blue-dianne md:text-[17px]">
                Nov
              </h3>
            </div>
            <div className="absolute -bottom-28 left-8 right-8 max-w-[613px] rounded-3xl bg-[#ffffff] p-8 shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <img src={blankAvatar} alt="avatar" />
                <p className="text-[16px] text-blue-dianne md:text-[18px]">
                  By Rachi Card
                </p>
              </div>
              <div className="mb-4">
                <h6 className="text-[18px] font-medium text-blue-dianne md:text-[25px] md:font-bold">
                  The Benefits of Vitamin D & How to Get It
                </h6>
                <p className="text-[16px] text-abbey md:text-[18px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
              <button className="flex items-center justify-center gap-1.5 rounded-2xl bg-golden-sand px-4 py-3 text-xs font-semibold text-blue-dianne md:gap-3 md:px-10 md:py-4 md:text-sm">
                Read More
                <img
                  className=" rounded-xl bg-acapulco p-1"
                  src={arrowRightSvg}
                  alt="arrow-right"
                />
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={blogTwoImg} alt="blog" />
            <div className="absolute left-8 top-8 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#ffffff]">
              <h3 className="text-[16px] font-semibold text-blue-dianne md:-mb-1.5 md:text-quotes">
                25
              </h3>
              <h3 className="-mt-1.5 text-[15px] font-medium text-blue-dianne md:text-[17px]">
                Nov
              </h3>
            </div>
            <div className="absolute -bottom-28 left-8 right-8 max-w-[613px] rounded-3xl bg-[#ffffff] p-8 shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <img src={blankAvatar} alt="avatar" />
                <p className="text-[16px] text-blue-dianne md:text-[18px]">
                  By Rachi Card
                </p>
              </div>
              <div className="mb-4">
                <h6 className="text-[18px] font-medium text-blue-dianne md:text-[25px] md:font-bold">
                  Our Favourite Summertime Tommeto
                </h6>
                <p className="text-[16px] text-abbey md:text-[18px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
              <button className="flex items-center justify-center gap-1.5 rounded-2xl bg-golden-sand px-4 py-3 text-xs font-semibold text-blue-dianne md:gap-3 md:px-10 md:py-4 md:text-sm">
                Read More
                <img
                  className=" rounded-xl bg-acapulco p-1"
                  src={arrowRightSvg}
                  alt="arrow-right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* news letter */}
      <div className="relative mx-auto max-w-7xl pt-5  md:pt-10">
        <img
          className="min-h-[200px] rounded-[30px]"
          src={newsLetterImg}
          alt="news-letter"
        />
        <div className="absolute top-[20%] w-full md:top-[33%]">
          <div className="flex flex-col items-center justify-between px-10 md:flex-row">
            <h1 className="mb-2 text-heading-6 text-[#ffffff] md:text-heading-4 lg:text-heading-3">
              Subscribe to <br />
              our Newsletter
            </h1>
            <div>
              <input
                className="mr-1.5 rounded-xl px-6 py-3 shadow-sm outline-none lg:mr-3 lg:px-10 lg:py-4"
                type="text"
                placeholder="Your Email Address"
              />
              <button className="rounded-2xl bg-blue-dianne px-6 py-3 text-sm font-semibold tracking-wider text-[#ffffff] lg:px-10 lg:py-4 lg:text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="mx-auto flex max-w-7xl flex-col justify-center px-5 py-10 md:flex-row lg:py-24">
        <div className="border-b border-alto pb-6 md:border-none md:pr-8">
          <h4 className="mb-5 text-lg font-bold text-blue-dianne lg:text-[30px]">
            Contact Us
          </h4>
          <div className="mb-3">
            <h6 className="text-[18px] font-semibold text-abbey">Email</h6>
            <p className="text-[18px] text-abbey">needhelp@Organia.com</p>
          </div>
          <div className="mb-3">
            <h6 className="text-[18px] font-semibold text-abbey">Phone</h6>
            <p className="text-[18px] text-abbey">666 888 888</p>
          </div>
          <div className="mb-3">
            <h6 className="text-[18px] font-semibold text-abbey">Address</h6>
            <p className="text-[18px] text-abbey">
              88 road, borklyn street, USA
            </p>
          </div>
        </div>
        <div className="border-alto py-6 md:border-l md:border-r md:px-8">
          <div className="mb-5 flex items-center gap-1 md:justify-center lg:gap-3">
            <img src={logo} className="h-10 w-7" alt="brand-logo" />
            <h2 className="text-lg font-bold text-blue-dianne lg:text-[30px]">
              Organick
            </h2>
          </div>
          <p className="text-[18px] text-abbey md:text-center">
            Simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum simply dummy text of the printing
          </p>
          <div className="mt-5 flex gap-3 md:mt-10 md:justify-center">
            <div className=" rounded-full bg-alabaster px-4 py-4">
              <img src={instaSvg} alt="instagram" />
            </div>
            <div className=" rounded-full bg-alabaster px-4 py-4">
              <img src={fbSvg} alt="facebook" />
            </div>
            <div className=" rounded-full bg-alabaster px-4 py-4">
              <img src={twitterSvg} alt="twitter" />
            </div>
            <div className=" rounded-full bg-alabaster px-4 py-4">
              <img src={pinterestSvg} alt="pinterest" />
            </div>
          </div>
        </div>
        <div className="border-t border-alto pt-6 md:border-none md:pl-8">
          <h3 className="mb-5 text-lg font-bold text-blue-dianne lg:text-[30px]">
            Utility Pages
          </h3>
          <p className="mb-2 text-[18px] text-abbey">Style Guide</p>
          <p className="mb-2 text-[18px] text-abbey">404 Not Found</p>
          <p className="mb-2 text-[18px] text-abbey">Password Protected</p>
          <p className="mb-2 text-[18px] text-abbey">Licences</p>
          <p className="mb-2 text-[18px] text-abbey">Changelog</p>
        </div>
      </footer>
      {/* copyright */}
      <p className="border-t border-t-alto px-5 pb-4 pt-8 text-center text-[18px] text-abbey">
        Copyright © <strong className=" font-bold">Organick</strong> | Designed
        by <strong className=" font-bold">VictorFlow</strong> Templates -
        Powered by <strong className=" font-bold">Webflow</strong>
      </p>
    </section>
  );
};

export default Home;
