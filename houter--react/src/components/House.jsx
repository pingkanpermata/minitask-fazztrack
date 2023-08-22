/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export default function House({
    house_image,
    user_image,
    user_name,
    user_location,
    house_name,
    house_price,
}) {
    return (
        <div className="flex flex-col gap-6 w-[340px]">
            <div className="flex relative h-[382px]">
                <img src={house_image} alt="" className="rounded-3xl" width={340} height={382} />
                <div className="bg-[#FEE2E2] rounded-[32px] px-4 py-2 gap-[10px] text-[#EF4444] absolute flex bottom-0 items-center m-4 font-semibold">
                    <FontAwesomeIcon icon={faFire} fixedWidth width={16} height={16} />
                    Popular
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[#3C4563] text-2xl leading-[32px]">{house_name}</p>
                <span className="text-[#3C4563] leading-8 text-xl">{house_price}</span>
            </div>
            <div className="flex items-center gap-2">
                <img src={user_image} width={40} height={40} className="rounded-full object-cover" alt="" />
                <div className="flex flex-col">
                    <p className="text-[#0E1735] text-lg leading-6">{user_name}</p>
                    <small className="text-[#0E1735] leading-[22px] text-sm">{user_location}</small>
                </div>
            </div>
        </div>
    )
}