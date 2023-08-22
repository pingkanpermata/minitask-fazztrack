/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import HouseRev from '../assets/house-review1.png'
import user from '../assets/user-1.png'

export default function HouseReview({classname}) {
    return(
        <div className={`flex justify-center h-[505px] relative w-[740px] ${classname}`}>
            <img src={HouseRev} alt="" className="object-cover w-[740px] h-[400px] z-10" width={740} height={400} />
            <div className="flex flex-col gap-6 bg-white p-8 absolute w-[612px] rounded-2xl z-20 bottom-0">
                <div className="flex flex-col gap-6">
                    <b className="text-xl leading-6 text-[#1B1C57]">Best ! I got the house i wanted through Hounter</b>
                    <small className="text-[#626687] font-normal text-sm leading-6 opacity-75">
                        Through this website I can get a house with the type and
                        spesifications I want very easily, without a complicated process to 
                        be able to find information on the house we want.
                    </small>
                    <div className="flex justify-between">
                        <div className="flex gap-6 items-center">
                            <img src={user} alt="" className="w-10 h-10 object-cover rounded-full" width={40} height={40} />
                            <div className="flex flex-col gap-1 items-center">
                                <b className="text-[#0E1735]">Dianne Russell</b>
                                <small className="text-[#626687] font-normal text-sm leading-6 opacity-75">Manager Director</small>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 self-end">
                            <FontAwesomeIcon icon={faStar} fixedWidth className="w-7 h-7 text-[#F59E0B]" />
                            <b className="text-[#3C4563] text-xl">4.6</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}