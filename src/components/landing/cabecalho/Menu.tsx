import { IconBrandGoogleAnalytics } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function Menu () {

    const { loginGoogle } = useContext(AutenticacaoContext)

    return (
        <div className="flex gap-2 font-mono font-black">
            <MenuItem url="#inicio" className="hidden sm:flex">
                Início
            </MenuItem>
            <MenuItem url="#vantagens" className="hidden sm:flex">
                Vantagens
            </MenuItem>
            <MenuItem url="#motivos" className="hidden sm:flex">
                Benefícios
            </MenuItem>
            <MenuItem 
                onClick={loginGoogle}
                className="bg-green-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00BC63] duration-300">
                <div className="flex items-center gap-2 text-white font-sans font-medium shadow-sm">
                    <IconBrandGoogleAnalytics size={20} />
                        <span>Entrar</span>
                </div>
            </MenuItem>
        </div>
    )
}