import Airplane from "@/assets/airplane";
import AppStore from "@/assets/appStore";
import Arrow from "@/assets/arrow";
import ArrowBlue from "@/assets/arrowBlue";
import Calender from "@/assets/calender";
import Company from "@/assets/company";
import Facebook from "@/assets/facebook";
import FLy from "@/assets/fly";
import Hamburger from "@/assets/hamburger";
import Instagram from "@/assets/instagram";
import Light from "@/assets/light";
import Line from "@/assets/line";
import LinkedIn from "@/assets/linkedIn";
import SvgIcon from "@/assets/logo";
import Money from "@/assets/money";
import Plus from "@/assets/planet";
import Play from "@/assets/play";
import Pointer from "@/assets/pointer";
import Quote from "@/assets/quote";
import Testing from "@/assets/testing";
import Twitter from "@/assets/twitter";

export default function Home() {
  return (
    <main>
      <div className="h-[80px] bg-[#fff] flex items-center ">
        <div className=" flex items-center justify-between max-w-[1440px] mx-auto w-full lg:px-[50px] lg:mx-auto xl:mx-auto xl:px-[100px] msm:px-[10px] ">
          <div>
            <SvgIcon />
          </div>
          <div className="flex items-center space-x-8 msm:hidden">
            <div className="cursor-pointer text-body-2 text-gray5 font-satoshi">
              <a>Home</a>
            </div>
            <div className="cursor-pointer text-body-2 text-gray5 font-satoshi">
              <a>Find agents</a>
            </div>
            <div className="cursor-pointer text-body-2 text-gray5 font-satoshi">
              <a>Visa services</a>
            </div>
            <div className="cursor-pointer text-body-2 text-gray5 font-satoshi">
              <a>About us</a>
            </div>
            <div className="cursor-pointer text-body-2 text-gray5 font-satoshi">
              <a>Travel News</a>
            </div>
          </div>
          <div className="md:hidden">
            <Hamburger />
          </div>
          <div className="flex items-center gap-4 msm:hidden">
            <div>
              <button className="text-body-1 text-blue2">Login</button>
            </div>
            <div>
              <button className=" text-body-1 px-[32px] py-[12px] bg-[#125699] text-white rounded-[60px]">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFC] pt-20 pb-20 lg:px-[50px] xl:px-[100px] md:px-[20px] msm:pt-[0px]">
        <div className="max-w-[1440px] border mx-auto relative h-full msm:border-none ">
          {/* Airplane component */}
          <div className="relative z-[0] 2xl:mt-[-150.52px] 2xl:ml-[320.66px] xl:mt-[-150px] xl:ml-[260px] lg:mt-[-70px] lg:ml-[260px] md:mt-[35px] md:ml-[230px] msm:hidden">
            {/* <Airplane className="" /> */}
            <img
              src="/airplane.png"
              alt="airplane"
              className="2xl:h-full 2xl:w-full xl:h-full xl:w-full lg:h-[650px] lg:w-[1000px]"
            />
          </div>

          {/* Other content */}
          <div className="absolute inset-x-0 top-0 h-full msm:static">
            <div className="flex items-center gap-48 lg:gap-48 md:gap-0 msm:gap-0 msm:flex-col">
              <div className="msm:p-[20px]">
                <h2 className="pb-4 text-h-1 text-blue4 font-satoshi xl:max-w-[582px] msm:text-body-8 msm:max-w-full">
                  Your Gateway to Seamless Travel.
                </h2>
                <p className="pb-14 text-body-2 text-gray5 xl:max-w-[582px]">
                  Gain access to vetted and verified visa service agents to make
                  your travel goals a reality. Experience the world without the
                  paper work hassle.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-[12px] px-[59px] py-[14px] lg:px-[59px] lg:py-[14px] md:px-[40px] md:py-[10px] bg-[#125699] rounded-[60px] msm:px-[21px] msm:py-[12px]">
                    <p className="text-white text-body-1"> Get Started</p>
                    <Arrow />
                  </button>
                  <button
                    className="flex items-center gap-4  py-[7px] px-[19px] bg-[#fff] rounded-[40px]"
                    style={{
                      boxShadow: "0px 12px 30px 0px rgba(70, 87, 147, 0.1)",
                    }}
                  >
                    <Play />
                    <p className="text-footer-s text-gray5">Watch Intro</p>
                  </button>
                </div>
              </div>
              <div className="md:hidden">
                <img src="/happypeoplephone.png" alt="happy" />
              </div>
              <div className="2xl:w-auto xl:w-auto lg:w-full lg:mt-[40px] md:mt-[100px] msm:hidden">
                <Testing />
              </div>
            </div>
            <div
              className="flex items-center justify-center w-full mx-auto msm:px-[20px]"
              style={{ padding: "100px 0px" }}
            >
              <Company />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFC] lg:px-[50px] xl:px-[100px] md:px-[20px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4 py-4 msm:px-[20px]">
            <h2 className="font-bold text-h-2 text-blue4 msm:text-body-m">
              Browse Service Categories
            </h2>
            <p className="text-gray5 text-body-3 font-Inter">
              Looking for visa services?
              <span className="text-gray5 text-body-3"> See all services</span>
            </p>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-8 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-4 msm:flex msm:flex-col msm:gap-8 msm:px-[20px]">
            <div
              className="bg-white h-[499px] rounded-[24px] flex flex-col justify-between msm:bg-[#FFF4E0] msm:relative"
              style={{ padding: " 5% 10% 10% 5%" }}
            >
              <div className="">
                <h2 className="text-h-4 text-blue3">Student Visa</h2>
                <p className="max-w-[282px] text-body-4 text-gray4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </p>
              </div>
              <div>
                <button className="flex items-center gap-4">
                  <Line />
                  <p>Learn More</p>
                </button>
              </div>
              <div className="md:hidden msm:absolute msm:z-0 msm:left-2/4 msm:top-2/4">
                <img src="couples.svg" alt="couple" />
              </div>
            </div>
            <div
              class="bg-white h-[499px] rounded-[24px] flex flex-col justify-between msm:bg-[#D2E9FF] msm:relative"
              style={{ padding: " 5% 10% 10% 5%" }}
            >
              <div className="">
                <h2 className="text-h-4 text-blue3">Business Visa</h2>
                <p className="max-w-[282px] text-body-4 text-gray4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </p>
              </div>
              <div>
                <button className="flex items-center gap-4">
                  <Line />
                  <p>Learn More</p>
                </button>
              </div>
              <div className="md:hidden msm:absolute msm:z-0 msm:left-2/4 msm:top-2/4">
                <img src="/aeroplane.svg" alt="aero" />
              </div>
            </div>
            <div
              class="bg-white h-[499px] rounded-[24px] flex flex-col justify-between msm:bg-[#EFE5FF] msm:relative"
              style={{ padding: " 5% 10% 10% 5%" }}
            >
              <div className="">
                <h2 className="text-h-4 text-blue3">Visitor Visa</h2>
                <p className="max-w-[282px] text-body-4 text-gray4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </p>
              </div>
              <div>
                <button className="flex items-center gap-4">
                  <Line />
                  <p>Learn More</p>
                </button>
              </div>
              <div className="md:hidden msm:absolute msm:z-0 msm:left-2/4 msm:top-2/4">
                <img src="/shortman.svg" alt="short" />
              </div>
            </div>
            <div
              class="bg-white h-[499px] rounded-[24px] flex flex-col justify-between msm:bg-[#FFE4E0] msm:relative"
              style={{ padding: " 5% 10% 10% 5%" }}
            >
              <div className="">
                <h2 className="text-h-4 text-blue3">Global Talent Visa</h2>
                <p className="max-w-[282px] text-body-4 text-gray4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </p>
              </div>
              <div>
                <button className="flex items-center gap-4">
                  <Line />
                  <p>Learn More</p>
                </button>
              </div>
              <div className="md:hidden msm:absolute msm:z-0 msm:left-2/4 msm:top-2/4">
                <img src="/guitargirl.svg" alt="guiter" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFC] py-[100px] lg:px-[50px] xl:px-[100px] md:px-[20px] msm:px-[0px]">
        <div className="max-w-[1440px] mx-auto rounded-[24px] msm:rounded-none bg-[#0C3A66] flex gap-4  msm:px-0 px-[20px] msm:m-0 items-center msm:flex-col-reverse border">
          <div className="flex flex-col flex-grow gap-8 msm:px-[20px] msm:gap-16 xl:py-20 lg:py-[20px] msm:py-[20px] ">
            <div>
              <h2 className="text-white text-h-5 font-Inter msm:text-body-m ">
                Achieve your travel goals.
              </h2>
              <p className="text-body-4 text-[#F3F4F6]">Its way too simple</p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-[32px] h-[32px] rounded-[107px] bg-[#fff] text-blue4 flex items-center justify-center">
                  1
                </div>
                <div>
                  <h2 className="text-white text-body-m text-satoshi msm:text-body-9 ">
                    Free to join.
                  </h2>
                  <p className="text-body-4 text-[#F3F4F6] msm:text-caption-x">
                    Sign up with project 101 and complete some verifications
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[32px] h-[32px] rounded-[107px] bg-[#fff] text-blue4 flex items-center justify-center">
                  2
                </div>
                <div>
                  <h2 className="text-white text-body-m msm:text-body-9">
                    Create goals and hire top agents.
                  </h2>
                  <p className="text-body-4 text-[#F3F4F6] msm:text-caption-x">
                    Create your desired goals with project 101
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[32px] h-[32px] rounded-[107px] bg-[#fff] text-blue4 flex items-center justify-center">
                  3
                </div>
                <div>
                  <h2 className="text-white text-body-m msm:text-body-9">
                    Work with the best - with safety of payment.
                  </h2>
                  <p className="text-body-4 text-[#F3F4F6] msm:text-caption-x">
                    Project 101 has multiple Visa service you can request
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="flex items-center gap-4 py-[14px] px-[32px] bg-[#fff] text-[#125699] rounded-[60px] msm:px-[47px]">
                <p>Sign up for free</p>
                <ArrowBlue />
              </button>
            </div>
          </div>
          <div className="hidden msm:block msm:w-full">
            <img src="/squarevisagirl.svg" alt="visa_girl" className="w-full" />
          </div>
          <div className="msm:hidden">
            <img src="/visagirl.png" alt="visa_girl" />
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFC] py-[100px] lg:px-[50px] xl:px-[100px] md:px-[20px]">
        <div
          className="max-w-[1440px] mx-auto  bg-[white] rounded-[24px] msm:rounded-none flex gap-8 msm:flex-col msm:px-[30px] msm:py-[20px]"
          style={{
            boxShadow: "0px 10px 15px 0px #1018280D",
            padding: " 2% 2% 2% 2%",
          }}
        >
          <div className="hidden msm:block msm:w-full">
            <img src="/squareYes.svg" alt="yes" className="w-full" />
          </div>
          <div className="msm:hidden">
            <img src="/YES.png" alt="yes" className="lg:h-full md:h-full" />
          </div>
          <div className="flex flex-col flex-grow gap-8 py-10 ">
            <div>
              <h2 className="text-h-3 text-blue4 font-satoshi msm:text-body-8">
                Why people turn to <br /> Project 101
              </h2>
            </div>
            <div className="flex flex-col gap-8 ">
              <div className="flex gap-4">
                <div>
                  <AppStore />
                </div>
                <div>
                  <h2 className="text-body-m text-blu4 ">
                    Access to vetted and verified agents.
                  </h2>
                  <p className="text-body-2 text-blue4 font-satoshi msm:text-caption-x">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <Light />
                </div>
                <div>
                  <h2 className="text-body-m text-blu4 ">
                    Premium quality Visa services
                  </h2>
                  <p className="text-body-2 text-blue4 font-satoshi msm:text-caption-x ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <Money />
                </div>
                <div>
                  <h2 className="text-body-m text-blu4 ">Safe and secured</h2>
                  <p className="text-body-2 text-blue4 font-satoshi msm:text-caption-x">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFC] py-[100px] lg:px-[50px] xl:px-[100px] md:px-[20px]">
        <div className="max-w-[1440px] mx-auto border bg-[#0C3A66] relative rounded-[24px] msm:rounded-none">
          <div
            className="relative z-[0] top-0 left-[-100px] lg:top-0 lg:left-[-350px] xl:top-0 xl:left-0 md:left-[-499px] msm:hidden"
            // style={{ top: "0", left: "100px" }}
          >
            <FLy />
          </div>
          <div className="absolute top-0 flex w-full h-full msm:static msm:flex-col ">
            <div className="">
              <img
                src="/thinkingman.png"
                alt="thinking_man"
                className="rounded-tl-[24px] msm:rounded-none rounded-bl-[24px] lg:h-full md:h-full msm:h-auto"
              />
            </div>
            <div className=" px-[24px] py-[30px] flex flex-col  justify-between flex-grow msm:py-[10px] msm:gap-8">
              <div className="flex flex-col gap-[32px]">
                <h2 className="text-white text-h-m font-Inter  msm:text-h-5">
                  Are you a Visa <br /> agent?
                </h2>
                <p className="text-white text-body-2 font-satoshi">
                  Meet clients you’re excited to work with and take your
                  business to new heights.
                </p>
              </div>
              <div className="py-[30px] border-t flex flex-col gap-8 w-full msm:py-[10px] ">
                <div className="flex items-center justify-between msm:flex-wrap">
                  <div className=" msm:w-1/2 msm:pr-2 msm:mb-4">
                    <p className="text-white text-body-2 font-satoshi">
                      Find quality and <br />
                      high paying clients
                    </p>
                  </div>
                  <div className=" msm:w-1/2 msm:pl-2 msm:pr-2 msm:mb-4">
                    <p className="text-white text-body-2 font-satoshi">
                      Control your time
                      <br /> and schedule
                    </p>
                  </div>
                  <div className="md:border-t-white msm:w-full">
                    <p className="text-white text-body-2 font-satoshi">
                      Assured safety of <br />
                      payment for work
                    </p>
                  </div>
                </div>
                <div>
                  <button className="py-[14px] px-[32px] bg-[#fff] rounded-[60px] flex gap-4">
                    <p>Sign up as agent</p>
                    <ArrowBlue />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFC] py-[100px] xl:px-[100px] lg:px-[50px] md:px-[20px] msm:px-[20px]">
        <div className="max-w-[1440px] mx-auto ">
          <div className="pb-[16px]">
            <h2 className="text-h-2 text-blue4 font-satoshi">Travel News</h2>
          </div>
          <div className="flex items-center justify-between pb-[2rem]">
            <span className="text-body-3 text-gray5 font-Inter msm:max-w-[300px]">
              Select your destination and find out the latest travel
              news and trends.
            </span>
            <span className="underline text-body-6 font-satoshi text-blue3">
              Select Destination
            </span>
          </div>
          <div className="flex gap-[32px] items-center msm:flex-col">
            <div
              className="p-[24px] bg-white rounded-[40px] flex flex-col gap-8"
              style={{ border: "1px solid #E5EFFF" }}
            >
              <div>
                <img src="/woman.png" alt="woman" className="w-full" />
              </div>
              <div className="flex items-center gap-4 py-[12px] px-[19px] rounded-[60px] bg-[#F3F4F6] max-w-[300px]">
                <div className="flex items-center gap-4">
                  <Calender />
                  <p>15 February, 2024</p>
                </div>
                <div className="flex items-center gap-4">
                  <Pointer />
                  <p>USA</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-body-5 text-gray5 ">
                    Journey to USA •
                    <span className="text-body-2 text-gray5">
                      Global talent visa
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-body-2 text-gray4 font-satoshi ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore Lorem ipsum dolor si
                  </p>
                </div>
              </div>
            </div>
            <div
              className="p-[24px] bg-white rounded-[40px] flex flex-col gap-8"
              style={{ border: "1px solid #E5EFFF" }}
            >
              <div>
                <img src="/man.png" alt="woman" className="w-full" />
              </div>
              <div className="flex items-center gap-4 py-[12px] px-[19px] rounded-[60px] bg-[#F3F4F6] max-w-[300px]">
                <div className="flex items-center gap-4">
                  <Calender />
                  <p>15 February, 2024</p>
                </div>
                <div className="flex items-center gap-4">
                  <Pointer />
                  <p>USA</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-body-5 text-gray5 ">
                    Journey to USA •
                    <span className="text-body-2 text-gray5">
                      Global talent visa
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-body-2 text-gray4 font-satoshi ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore Lorem ipsum dolor si
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFC] py-[100px] xl:px-[100px] lg:px-[50px] md:px-[20px] msm:px-[20px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4 py-10 mx-auto text-center">
            <h2 className="text-h-4 text-blue4 font-satoshi">
              What our clients say about us
            </h2>
            <p className="text-body-2 text-blue4 font-satoshi">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
          <div className="relative ">
            <div className="flex items-center gap-4 msm:flex-col">
              <div
                className=" flex flex-col gap-8 py-[24px] px-[28px] rounded-[16px] bg-white "
                style={{ border: " 1px solid #E5EFFF" }}
              >
                <div>
                  <Quote />
                </div>
                <div>
                  <p className="text-body-4 font-satoshi text-blue3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor
                    situnt ut labore Lorem ipsum dolor sit ut labore Lorem ipsum
                    dolor situnt ut labore Lorem ipsum dolor si
                  </p>
                </div>
                <div className="flex items-center gap-2 border-t py-[20px]">
                  <div>
                    <img src="/small.png" alt="small_man" />
                  </div>
                  <div>
                    <p className="text-body-2 text-blue3 font-satoshi ">
                      Stephanie Lilly
                    </p>
                    <p className="text-body-4 text-blue1 font-satoshi">
                      COO at Grey gate
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col gap-8 py-[24px] px-[28px] rounded-[16px] bg-white msm:hidden"
                style={{ border: " 1px solid #E5EFFF" }}
              >
                <div>
                  <Quote />
                </div>
                <div>
                  <p className="text-body-4 font-satoshi text-blue3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor
                    situnt ut labore Lorem ipsum dolor sit ut labore Lorem ipsum
                    dolor situnt ut labore Lorem ipsum dolor si
                  </p>
                </div>
                <div className="flex items-center gap-2 border-t py-[20px]">
                  <div>
                    <img src="/small.png" alt="small_man" />
                  </div>
                  <div>
                    <p className="text-body-2 text-blue3 font-satoshi ">
                      Stephanie Lilly
                    </p>
                    <p className="text-body-4 text-blue1 font-satoshi">
                      COO at Grey gate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute z-10 flex top-1/2 msm:top-[370px] msm:left-[180px]">
              <img src="/slideleft.svg" alt="left" />
            </div>
            <div className="absolute right-0 z-10 flex top-1/2 msm:top-[370px] msm:right-[180px]">
              <img src="/slideright.svg" alt="right" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="msm:h-full"
        style={{
          background:
            "linear-gradient(98.25deg, #0C3A66 0.46%, #11518E 30.76%, #14589A 55.46%, #115190 82.64%, #125699 99.27%)",
        }}
      >
        <div
          className="max-w-[1440px] mx-auto relative p-[20px] xl:px-[100px] lg:px-[50px]  msm:h-full"
          // style={{
          //   background:
          //     "linear-gradient(98.25deg, #0C3A66 0.46%, #11518E 30.76%, #14589A 55.46%, #115190 82.64%, #125699 99.27%)",
          // }}
        >
          <div className="md:hidden">
            <img
              src="/planetary.svg"
              alt="planet"
              className="h-full relative top-0 z-0 "
              style={{ top: "0", left: "15%" }}
            />
          </div>
          <div className="msm:hidden">
            <img
              src="/planet.svg"
              alt="planet"
              className="relative top-0 z-0 "
              style={{ top: "0", left: "37%" }}
            />
          </div>
          <div className="absolute top-[20%] 2xl:left-0  flex flex-col gap-12 lg:left-[50px] xl:left-[100px] md:left-[30px] msm:static msm:px-[20px] msm:gap-8  msm:w-full">
            <div>
              <h2 className="text-white text-h-m font-satoshi lg:text-h-m md:text-h-2 msm:text-body-8 ">
                Get the best visa <br /> services delivered fast.
              </h2>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <div className="flex items-center gap-2 ">
                  <p className="text-h-6 text-[#E5E7EB] font-satoshi lg:text-h-6 md:text-h-5 msm:text-body-7">
                    15k
                  </p>
                  <div className="md:hidden">
                    <img src="/smallplus.svg" alt="small" />
                  </div>
                  <div className="msm:hidden">
                    <Plus />
                  </div>
                </div>
                <p className="text-[#E5E7EB] text-body-3 font-satoshi">
                  Visa Processed
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-h-6 text-[#E5E7EB] font-satoshi lg:text-h-6 md:text-h-5 msm:text-body-7">
                    200
                  </p>
                  <div className="md:hidden">
                    <img src="/smallplus.svg" alt="small" />
                  </div>
                  <div className="msm:hidden">
                    <Plus />
                  </div>
                </div>
                <p className="text-[#E5E7EB] text-body-3 font-satoshi">
                  Verified Agents
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-h-6 text-[#E5E7EB] font-satoshi lg:text-h-6 md:text-h-5 msm:text-body-7">
                    12k
                  </p>
                  <div className="md:hidden">
                    <img src="/smallplus.svg" alt="small" />
                  </div>
                  <div className="msm:hidden">
                    <Plus />
                  </div>
                </div>
                <p className="text-[#E5E7EB] text-body-3 font-satoshi">
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="py-[14px] px-[45px] bg-[#1E90FF] text-body-d text-[#F3F4F6] rounded-[60px] lg:py-[14px] lg:px-[45px] md:px-[35px] msm:px-[23px] msm:py-[10px] msm:text-caption-z">
                Hire Top Agents
              </button>
              <button className="py-[14px] px-[45px] bg-[#fff] text-body-d text-[#1E90FF] rounded-[60px] lg:py-[14px] lg:px-[45px] md:px-[35px] msm:px-[23px] msm:py-[10px] msm:text-caption-z">
                Join as an Agent
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFC] pt-[100px]">
        <footer className="bg-white h-[450px] pt-[100px] xl:px-[100px] lg:px-[50px] md:px-[20px] md:border msm:pt-[50px]">
          <div className="max-w-[1440px] mx-auto  flex  justify-between msm:grid msm:grid-cols-4 msm:gap-4 ">
            <div className="flex flex-col gap-4 msm:col-span-full">
              <SvgIcon className="border" />
              <p className="text-caption-s text-gray5 font-satoshi">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
              <p className="text-body-7 text-gray5 font-satoshi msm:hidden">
                © 2024 Project 101. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col gap-4 msm:col-span-2 msm:row-start-2">
              <h2 className="text-footer-m text-gray5 font-satoshi">Menu</h2>
              <div className="flex flex-col gap-4">
                <p className="text-footer-s text-gray3 font-satoshi">
                  Services
                </p>
                <p className="text-footer-s text-gray3 font-satoshi">
                  Find Agent
                </p>
                <p className="text-footer-s text-gray3 font-satoshi">
                  About Project 101
                </p>
                <p className="text-footer-s text-gray3 font-satoshi">
                  Travel News
                </p>
                <p className="text-footer-s text-gray3 font-satoshi">
                  Contact us
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4  msm:col-span-2 ">
              <h2 className="text-footer-m text-gray5 font-satoshi">
                Resources
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-footer-s text-gray3 font-satoshi">
                  Privacy Policy
                </p>
                <p className="text-footer-s text-gray3 font-satoshi">
                  Terms and Condition
                </p>
                <p className="text-footer-s text-gray3 font-satoshi">
                  Support@project101.com
                </p>
                <p className="text-footer-s text-gray3 font-satoshi">
                  How to hire agents
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 msm:col-span-full msm:row-start-3">
              <h2 className="text-footer-m text-gray5 font-satoshi">
                Join Us On
              </h2>
              <div className="flex items-center gap-4">
                <Instagram />
                <Twitter />
                <Facebook />
                <LinkedIn />
              </div>
              <p className="text-body-7 text-gray5 font-satoshi md:hidden">
                © 2024 Project 101. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
