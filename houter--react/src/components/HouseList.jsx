/* eslint-disable react/prop-types */
export default function HouseList({children}) {
    return (
        <div className="flex gap-10 w-full overflow-hidden">
            <div className="flex gap-10">{children}</div>
        </div>
    )
}