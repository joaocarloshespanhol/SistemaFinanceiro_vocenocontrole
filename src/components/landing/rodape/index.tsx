import Area from "../comum/Area";
import Logo from "../comum/Logo";
import RedesSociais from "./RedeSociais";

export default function Rodape() {
    return (
        <Area className="bg-black py-2">
            <div className="flex flex-col items-center md:items-start">
                <Logo />
                <div className="mt-3 text-white text-center md:text-left font-medium ">
                    <div>Parceiro financeiro</div>
                    <div className="flex gap-1.5">que <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">simplifica</span> sua vida</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
                <RedesSociais />
                <p className="text-white mt-7 md:mt-0 text-center">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">JC Desenvolvedor Web</span> <span>® 2023 <br/> Todos os direitos reservados.</span>

                </p>
            </div>
        </Area>
    )
}