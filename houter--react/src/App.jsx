import Header from './components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBuilding, faChevronLeft, faChevronRight, faBed, faBath, faWarehouse, faStairs, faPhone, faClock, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import HouseList from './components/HouseList'
import House from './components/House'
import HouseReview from './components/HouseReview'
import logo from './assets/Logo.svg'
import Blur from './assets/colorblur.png'
import Blur2 from './assets/colorblur2.png'
import Blur3 from './assets/colorblur3.png'
import location from './assets/location.png'
import ArrowRight from './assets/arrow-right.png'
import traveloka from './assets/travoka.png'
import tiket from './assets/tiket.png'
import airbnb from './assets/airbnb.png'
import trip from './assets/tripadvisor.png'
import houseImg from './assets/houseimg.png'
import user1 from './assets/user-1.png'
import user2 from './assets/user-2.png'
import user3 from './assets/user-3.png'
import user4 from './assets/user-4.png'
import house1 from './assets/house1.png'
import decor1 from './assets/decor1.png'
import decor2 from './assets/decor2.png'
import chair from './assets/chair1.png'
import subscribe from './assets/Group 14.png'
import fb from './assets/facebook.png'
import twt from './assets/twitter.png'
import ig from './assets/instagram.png'

function Home() {

  const propertyHouse = [
    {
      id: 0,
      name: "Roselands House",
      price: "$35.000.000",
      owner: {
        name: "sofia",
        address: "Kim Giang, Hanoi",
        picture: "/src/assets/user-1.png",
      },
      picture: {
        url: "/src/assets/house1.png",
        alt: "roseland House",
      },
      type: "House",
    },
    {
      id: 1,
      name: "Roselands House",
      price: "$35.000.000",
      owner: {
        name: "sofia",
        address: "Kim Giang, Hanoi",
        picture: "/src/assets/user-2.png",
      },
      picture: {
        url: "/src/assets/house1.png",
        alt: "roseland House",
      },
      type: "House",
    },
    {
      id: 2,
      name: "Roselands House",
      price: "$35.000.000",
      owner: {
        name: "sofia",
        address: "Kim Giang, Hanoi",
        picture: "/src/assets/user-3.png",
      },
      picture: {
        url: "/src/assets/house1.png",
        alt: "roseland House",
      },
      type: "House",
    },
  ]

  return (
    <main className='bg-white overflow-hidden flex items-center justify-center'>
      <div className='flex flex-col w-full max-w-[1920px] z-10 gap-32 relative'>
        <img src={Blur} alt='color-blur' width={741} height={523} className='absolute -top-[190px] -left-[190px]' />
        {/* Hero section */}
        <div className='flex flex-col relative h-[720px]'>
          {/* Header */}
          <Header />
          <div className='flex mx-32 justify-between'>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-6 mt-24 items-start w-[496px]'>
                {/* Title */}
                <h1 className='leading-[50px] font-bold text-[40px] capitalize text-[#1B1C57] w-full not-italic'>
                  Find The Place <br />
                  To Live{" "}
                  <span className='outline-1 text-transparent stroke-black font-outline-1'>Your Dreams</span>
                  <br />
                  Easily Here
                </h1>
                <p className="leading-7 text-[#626687] opacity-75 font-normal">
                  Everything you need about finding your place to live will be
                  here, where it will be easier for you
                </p>
                {/* Search Box */}
                <div className='flex items-center p-1 pl-6 gap-4 w-full rounded-[32px] border-[#E0E3EB] border'>
                  <img src={location} alt='location' width={24} height={24} />
                  <input className='font-medium leading-5 text-sm text-[#888B97] grow outline-none bg-transparent' type='text' placeholder='Search for the location you want' />
                  <button className='bg-[#10B981] rounded-[32px] px-4 py-3 text-white gap-1 items-center flex justify-center'>
                    Search{" "}
                    <img src={ArrowRight} alt='' width={8} height={10} />
                  </button>
                </div>
                {/* PartnerShip */}
                <div className='flex flex-col'>
                  <span className='font-normal text-base leading-8 text-[#888B97]'>
                    Our Partnership
                  </span>
                  <div className='flex gap-8 items-center'>
                    <img src={traveloka} alt='logo' width={82.75} height={64} />
                    <img src={tiket} alt='logo' width={82.75} height={64} />
                    <img src={airbnb} alt='logo' width={82.75} height={64} />
                    <img src={trip} alt='logo' width={82.75} height={64} />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex absolute right-0 top-0 -z-10'>
              <img src={houseImg} alt='house' width={720} height={720} />
              <div className='flex gap-4 absolute bottom-0 m-11 overflow-hidden w-[859px]'>
                <div className='flex bg-white p-6 rounded-[32px] items-center gap-4'>
                  <div className='flex -space-x-7'>
                    <img src={user1} width={56} height={56} className='rounded-full border-white border-[3px]' alt='' />
                    <img src={user2} width={56} height={56} className='rounded-full border-white border-[3px]' alt='' />
                    <img src={user3} width={56} height={56} className='rounded-full border-white border-[3px]' alt='' />
                  </div>
                  <div className='flex flex-col'>
                    <p>1K+ People</p>
                    <small className='text-[#68799F] leading-5 text-xs'>
                      Successfully Getting Home
                    </small>
                  </div>
                </div>
                <div className='flex bg-white p-6 rounded-[32px] items-center gap-4'>
                  <img src={house1} alt='' className='rounded-full border-white border-[3px] object-cover w-14 h-14' width={56} height={56} />
                  <div className='flex flex-col'>
                    <p>56 Houses</p>
                    <small className='text-[#68799F] leading-5 text-xs'>
                      Sold Monthly
                    </small>
                  </div>
                </div>
                <div className='flex bg-white p-6 rounded-[32px] items-center gap-4'>
                  <img src={user4} alt='' className='rounded-full border-white border-[3px]' width={56} height={56} />
                  <div className='flex flex-col'>
                    <p>1K+ People</p>
                    <small className='text-[#68799F] leading-5 text-xs'>
                      Successfully Getting Home
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recommended Section */}
        <div className='flex flex-col mx-32 gap-10'>
          <div className='flex justify-between items-center'>
            {/* Title */}
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <hr className='w-8 bg-[#F59E0B] h-1' />
                <span className='text-[#F59E0B] font-medium leading-5 text-sm'>
                  Our Recommendation
                </span>
              </div>
              <h1 className='font-semibold text-[32px] leading-10 text-[#1B1C57]'>
                Featured House
              </h1>
            </div>
            {/* House Type */}
            <div className="flex gap-8">
              <div className='flex text-[#10B981] bg-[#D1FAE5] px-6 py-3 rounded-[32px] gap-2 cursor-pointer items-center'>
                <FontAwesomeIcon icon={faHouse} fixedWidth width={24} height={24} />
                <button className='font-medium text-lg leading-7'>House</button>
              </div>
              <div className='flex text-[#10B981] bg-[#D1FAE5] px-6 py-3 rounded-[32px] gap-2 cursor-pointer items-center'>
                <FontAwesomeIcon icon={faHouse} fixedWidth width={24} height={24} />
                <button className='font-medium text-lg leading-7'>Villa</button>
              </div>
              <div className='flex text-[#10B981] bg-[#D1FAE5] px-6 py-3 rounded-[32px] gap-2 cursor-pointer items-center'>
                <FontAwesomeIcon icon={faBuilding} fixedWidth width={24} height={24} />
                <button className='font-medium text-lg leading-7'>Apartment</button>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='px-4 py-3 rounded-[32px] bg-[#E0E3EB] cursor-pointer'>
                <FontAwesomeIcon fixedWidth icon={faChevronLeft} className='text-black' width={20} height={20} />
              </div>
              <div className='px-4 py-3 rounded-[32px] bg-[#10B981] cursor-pointer'>
                <FontAwesomeIcon fixedWidth icon={faChevronRight} className='text-white' width={20} height={20} />
              </div>
            </div>
          </div>
          <HouseList>
            {propertyHouse.map((property, index) => (
              <House
                key={index}
                user_name={property.owner.name}
                user_location={property.owner.address}
                house_price={property.price}
                house_name={property.name}
                house_image={property.picture.url}
                user_image={property.owner.picture}
              />
            ))}
          </HouseList>
        </div>
        {/* Contact */}
        <div className='flex mx-32 justify-between'>
          {/* Left */}
          <div className='flex flex-col w-[524px]'>
            <div className='flex items-center gap-2 mb-3'>
              <hr className='w-8 bg-[#F59E0B] h-1' />
              <span className='text-[#F59E0B] font-medium leading-5 text-sm'>Ready To Sell !</span>
            </div>
            <h1 className='font-semibold text-[32px] leading-10 text-[#1B1C57] mb-4'>Let`s tour and see our house !</h1>
            <small className='text-[#626687] text-base leading-7 opacity-75 mb-4'>
              Houses recommended by our partners that have
              <br/>
              been curated to become the home of your dreams !
            </small>
            <div className='flex flex-col gap-4'>
              <b className='leading-7 text-[#1B1C57] opacity-75 text-base'>House Detail</b>
              <div className='flex w-96 justify-between items-center'>
                <div className='flex gap-4 text-[#3C4563] leading-5 w-48'>
                  <FontAwesomeIcon icon={faBed} fixedWidth width={32} height={32} />
                  <b>4 Bedroom</b>
                </div>
                <div className='flex gap-4 text-[#3C4563] leading-5 w-48'>
                  <FontAwesomeIcon icon={faBath} fixedWidth width={32} height={32} />
                  <b>2 Bathroom</b>
                </div>
              </div>
              <div className='flex w-96 justify-between items-center'>
                <div className='flex gap-4 text-[#3C4563] leading-5 w-48'>
                  <FontAwesomeIcon icon={faWarehouse} fixedWidth width={32} height={32} />
                  <b>1 Carport</b>
                </div>
                <div className='flex gap-4 text-[#3C4563] leading-5 w-48'>
                  <FontAwesomeIcon icon={faStairs} fixedWidth width={32} height={32} />
                  <b>2 Floors</b>
                </div>
              </div>
            </div>
            <div className='my-8'></div>
            <div className='flex items-center justify-between'>
              <div className='flex gap-6'>
                <img src={user3} alt='' className='object-cover rounded-full w-14 h-14' width={56} height={56} />
                <div className='flex flex-col gap-1'>
                  <b className='text-[#0E1735] text-lg leading-6'>Dianne Russell</b>
                  <small className='text-[#888B97] leading-6 text-base'>Manager Director</small>
                </div>
              </div>
              <div className='bg-[#10B981] rounded-[32px] flex gap-4 px-4 py-3 items-center cursor-pointer'>
                <FontAwesomeIcon icon={faPhone} fixedWidth className='text-white' width={24} height={24} />
                <b className='leading-[22px] text-sm text-white'>Contact Now</b>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='flex relative w-[528px] h-[459px] z-20'>
            <img src={house1} alt='' className='object-cover w-[488px] h-[416px] rounded-lg absolute right-0' width={488} height={416} />
            <div className='flex gap-3 absolute bottom-0 mr-3'>
              <img src={chair} alt='' className='w-[296px] h-[168px] rounded-md' width={296} height={168} />
              <img src={decor1} alt='' className='w-24 h-20 self-end rounded-md' width={96} height={80} />
              <img src={decor2} alt='' className='w-24 h-20 self-end rounded-md' width={96} height={80} />
            </div>
          </div>
          <img src={Blur2} alt='' className='absolute top-[1452px] -right-40 w-[553px] h-[560px]' width={553} height={560} />
        </div>
        {/* review Section */}
        <div className='flex flex-col'>
          <div className='flex flex-col justify-center items-center'>
            <hr className='w-8 h-1 bg-[#F59E0B] mb-2'/>
            <span className='text-[#F59E0B] text-sm leading-[18px]'>See Our Review</span>
            <b className='text-[32px] leading-10 mb-10'>What Our User Say About Us</b>
            <div className='flex w-full mb-8 overflow-hidden items-center'>
              <div className='flex gap-14'>
                <HouseReview classname={"house1"}/>
                <HouseReview classname={"house1"}/>
                <HouseReview classname={"house1"}/>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='bg-[#3C4563] rounded-full w-2 h-2 cursor-pointer duration-300 transition-all'></div>
              <div className='bg-[#E0E3EB] rounded-full w-2 h-2 cursor-pointer duration-300 transition-all'></div>
              <div className='bg-[#E0E3EB] rounded-full w-2 h-2 cursor-pointer duration-300 transition-all'></div>
            </div>
          </div>
        </div>
        {/* Tips & Trick */}
        <div className='flex flex-col mx-32'>
          <img src={Blur3} alt='' className='absolute -z-10 -left-96 top-[2730px]' width={552} height={695} />
          <div className='flex flex-col gap-6 items-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <hr className='bg-[#F59E0B] w-8 h-1' />
              <span className='text-[#F59E0B] text-sm leading-[18px]'>See tips and trick from our partnership</span>
            </div>
            <b className='text-[32px] leading-10 text-center'>
              Find Out More About
              <br/>
              Selling And Buying Homes
            </b>
            <div className='bg-[#10B981] px-4 py-3 font-bold text-white rounded-[32px] cursor-pointer'>
              More Article
            </div>
          </div>
          <div className='flex w-full gap-16'>
            <div className='flex flex-col gap-10 grow'>
              <div className='flex gap-8 items-center'>
                <img src={house1} alt='' className='rounded-2xl w-[200px] h-[144px]' width={200} height={144} />
                <div className='flex flex-col gap-4 w-[340px]'>
                  <div className='flex items-center gap-4'>
                    <img src={user1} alt='' className='w-8 h-8 object-cover rounded-full' width={32} height={32} />
                    <span className='text-[#3C4563] text-sm leading-[22px]'>Dianne Russell</span>
                  </div>
                  <b className='text-lg leading-8 text-[#1B1C57]'>The Things we Need To Check when we want to buy a house</b>
                  <div className='flex items-center text-[#888B97] gap-3'>
                    <FontAwesomeIcon icon={faClock} fixedWidth width={24} height={24} />
                    <small className='leading-6 text-sm'>4 min read | 25 Apr 2021</small>
                  </div>
                </div>
              </div>
              <div className='flex gap-8 items-center'>
                <img src={house1} alt='' className='rounded-2xl w-[200px] h-[144px]' width={200} height={144} />
                <div className='flex flex-col gap-4 w-[340px]'>
                  <div className='flex items-center gap-4'>
                    <img src={user1} alt='' className='w-8 h-8 object-cover rounded-full' width={32} height={32} />
                    <span className='text-[#3C4563] text-sm leading-[22px]'>Dianne Russell</span>
                  </div>
                  <b className='text-lg leading-8 text-[#1B1C57]'>The Things we Need To Check when we want to buy a house</b>
                  <div className='flex items-center text-[#888B97] gap-3'>
                    <FontAwesomeIcon icon={faClock} fixedWidth width={24} height={24} />
                    <small className='leading-6 text-sm'>4 min read | 25 Apr 2021</small>
                  </div>
                </div>
              </div>
              <div className='flex gap-8 items-center'>
                <img src={house1} alt='' className='rounded-2xl w-[200px] h-[144px]' width={200} height={144} />
                <div className='flex flex-col gap-4 w-[340px]'>
                  <div className='flex items-center gap-4'>
                    <img src={user1} alt='' className='w-8 h-8 object-cover rounded-full' width={32} height={32} />
                    <span className='text-[#3C4563] text-sm leading-[22px]'>Dianne Russell</span>
                  </div>
                  <b className='text-lg leading-8 text-[#1B1C57]'>The Things we Need To Check when we want to buy a house</b>
                  <div className='flex items-center text-[#888B97] gap-3'>
                    <FontAwesomeIcon icon={faClock} fixedWidth width={24} height={24} />
                    <small className='leading-6 text-sm'>4 min read | 25 Apr 2021</small>
                  </div>
                </div>
              </div>
            </div>
              <div className='flex gap-8 items-center flex-col w-[560px]'>
                <img src={house1} alt='' className='rounded-2xl w-[560px] h-[280px] object-cover' width={560} height={280} />
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center gap-4'>
                    <img src={user3} alt='' className='w-8 h-8 object-cover rounded-full' width={32} height={32} />
                    <span className='text-[#3C4563] text-sm leading-[22px]'>Darlene Robertson</span>
                  </div>
                  <b className='text-2xl leading-8 text-[#1B1C57]'>12 Things to know before buying a house</b>
                  <small className="leading-6 text-sm text-[#626687]">
                    Want to buy a house but are unsure about what we should know,
                    here I will try to explain what we should know and check when
                    we want to buy a house
                  </small>
                  <div className='flex items-center text-[#888B97] gap-3'>
                    <FontAwesomeIcon
                      icon={faClock}
                      fixedWidth
                      width={24}
                      height={24}
                    />
                    <small className="leading-6 text-sm">
                      2 min read | 24 Apr 2021
                    </small>
                  </div>
                </div>
              </div>
          </div>
        </div>
        {/* Subscribe */}
        <div className="flex items-center mx-32 relative">
          <img src={subscribe} alt="" className="h-80 rounded-[32px] min-w-full" width={1200} height={320} />
          <div className="flex flex-col gap-8 absolute items-center w-full">
            <b className="text-[32px] leading-10 text-center">
              Subscribe For More Info
              <br />
              And Update From Hounter
            </b>
            <div className="bg-white flex items-center p-1 pl-6 rounded-[32px] gap-4 w-[496px]">
              <FontAwesomeIcon
                icon={faMailBulk}
                fixedWidth
                width={24}
                height={24}
                className="text-blue-500"
              />
              <input
                placeholder="Your email here"
                className="text-[#888B97] leading-[22px]  text-sm grow outline-none bg-transparent"
              />
              <div className="rounded-[32px] bg-[#10B981] px-4 py-3 gap-1 items-center justify-center font-bold text-white cursor-pointer">
                Subscribe Now
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className='flex mx-32 justify-between mb-32'>
        <div className="flex flex-col w-80 gap-4">
            <img
              src={logo}
              alt=""
              width={115}
              height={36}
            />
            <small className="text-[#626687] opacity-75">
              We provide information about properties such as houses, villas and
              apartments to help people find their dream home
            </small>
            <div className="flex items-center gap-6">
              <img
                src={fb}
                alt=""
                className="cursor-pointer"
                width={32}
                height={32}
              />
              <img
                src={twt}
                alt=""
                className="cursor-pointer"
                width={32}
                height={32}
              />
              <img
                src={ig}
                alt=""
                className="cursor-pointer"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col">
              <b className="text-lg leading-5 mb-6">Property</b>
              <div className="flex flex-col gap-5">
                {" "}
                <small className="text-[#888B97] text-sm leading-5">
                  House
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Apartment
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Villa
                </small>
              </div>
            </div>

            <div className="flex flex-col">
              <b className="text-lg leading-5 mb-6">Article</b>
              <div className="flex flex-col gap-5">
                <small className="text-[#888B97] text-sm leading-5">
                  New Article
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Popular Article
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Most Read
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Tips & Tricks
                </small>
              </div>
            </div>

            <div className="flex flex-col">
              <b className="text-lg leading-5 mb-6">Contact</b>
              <div className="flex flex-col gap-5">
                <small className="text-[#888B97] text-sm leading-5">
                  2464 Royal Ln. Mesa, New Jersey 45463
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  (671) 555-0110
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  info@hounter.com
                </small>
              </div>
            </div>
          </div>
          <img
            src={Blur3}
            alt=""
            className="absolute -right-60 bottom-0 rotate-90  top-[4100px] -z-10"
            width={438}
            height={494}
          />
        </footer>
      </div>
    </main>
  )
}

export default Home
