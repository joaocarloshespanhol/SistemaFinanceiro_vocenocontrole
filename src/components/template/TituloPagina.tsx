import React from "react"

interface TituloPaginaProps {
    principal: string
    icone?: any
    secundario?: string
    className?: string
}

export default function TituloPagina(props: TituloPaginaProps) {
    return (
        <div className={`flex items-center gap-2 ${props.className ?? ''}`}>
            {props.icone && (
                <div className="text-white">
                    {React.cloneElement(props.icone, {
                    stroke: 1,
                    size: props.secundario ? 50 : 24
                })}</div>
            )}
            <div className="flex flex-col text-white">
                <h1 className="text-[26px] font-black">
                    {props.principal}
                </h1>
                {props.secundario && (
                    <h2 className="text-sm font-thin -mt-1">
                        {props.secundario}
                    </h2>
                )}
            </div>
        </div>
    )
}