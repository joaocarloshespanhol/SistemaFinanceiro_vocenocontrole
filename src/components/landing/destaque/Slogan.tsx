import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
import { useContext } from 'react'

export default function Slogan() {
    const { loginGoogle } = useContext(AutenticacaoContext)

    function renderizarFrase() {
        return (
            <div
                className="flex flex-col items-center md:items-start text-5xl lg:text-6xl text-white font-ligh">
                <div className="flex gap-2.5">
                    <div className="relative">
                        <span
                            className="absolute bottom-0 left-0 w-full border-b-4 border-green-500">
                        </span> 
                        <span className="relative">Melhor</span>
                            <div>experiência</div>
                    </div>
                </div>
                <div className="flex gap-2.5">
                    <span>de</span>
                    <span>organizar</span>
                </div>
                <div className="flex gap-2.5">
                    <span>seu</span>
                    <span
                        className="flex items-center p-1 relative text-zinc-900"
                    >
                        <span className="absolute top-2 lg:top-3 left-0 w-full h-5/6 bg-green-500 rounded-sm" />
                        <span className="relative z-20">dinheiro</span>
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center gap-5">
            {renderizarFrase()}
            <div className="text-sm lg:text-lg font-normal text-gray-400 text-center sm:text-left font-sans">
                Nós nascemos para simplificar sua vida!
            </div>
            <div className="flex justify-center sm:justify-start items-center gap-2">
                <div
                    onClick={loginGoogle}
                    className="flex items-center cursor-pointer bg-green-600 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00BC63] duration-300 px-12 py-3 rounded-md">
                    <span className="font-medium md:text-[16px] text-base font-sans">
                        Iniciar <span className="hidden sm:inline">Agora</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
