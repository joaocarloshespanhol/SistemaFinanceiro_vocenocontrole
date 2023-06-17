import Area from "../comum/Area";
import Logo from "../comum/Logo";
import RedesSociais from "./RedeSociais";

export default function Rodape() {
    return (
        <Area className="bg-white py-2">
            <div className="flex flex-col items-center md:items-start">
                <Logo />
                <div className="mt-3 text-zinc-800 text-center md:text-left font-medium ">
                    <div>Parceiro financeiro</div>
                    <div className="flex gap-1.5">que <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-black to-green-500">simplifica</span> sua vida</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
                <RedesSociais />
                <p className="text-zinc-800 mt-7 md:mt-0 text-center">
                    <span className="font-bold">JC Desenvolvedor Web</span> <span>® - Todos os direitos reservados</span>

                </p>
            </div>
        </Area>
    )
}