

interface MotivosProps {
    titulo: string
    texto: string
    destaque?: boolean
}

export default function Motivo(props: MotivosProps) {
    return (
        <div className={`
            flex flex-col justify-center items-center gap-3
            bg-zinc-800 p-7 rounded-xl w-[350px] h-[300px]
            ${props.destaque && 'xl:h-[350px]'}
        `}>

            <div className="flex flex-col items-center">
                <span className="text-xl text-white font-black rounded-xl">
                    {props.titulo}</span>
            </div>
            <p className="text-center text-zinc-400">
                {props.texto}
            </p>
        </div>
    )
}