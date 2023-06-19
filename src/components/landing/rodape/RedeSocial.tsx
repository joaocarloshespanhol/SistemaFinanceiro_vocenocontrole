import React from "react"
import Link from "next/link"

interface RedeSocialProps {
    icone: any
    url: string
}

export default function RedeSocial(props: RedeSocialProps) {
    return (
        <Link href={props.url} target="_blank">
            <div className="bg-green-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00BC63] duration-300 rounded-lg p-1 mr-3 cursor-pointer">
                {React.cloneElement(props.icone, {
                    size: 35,
                    strokeWidth: 1,
                    className: "text-white",
                })}
            </div>
        </Link>
    )
}