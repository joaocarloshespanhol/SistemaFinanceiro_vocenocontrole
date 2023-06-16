import { IconBrandGoogle, IconBrandGoogleAnalytics, IconBrandGoogleFit, IconBrandGoogleHome, IconBrandGooglePlay } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function Menu () {

    const { loginGoogle } = useContext(AutenticacaoContext)

    return (
        <div className="flex gap-2">
            <MenuItem url="#inicio" className="hidden sm:flex font-semibold font-mono">
                Início
            </MenuItem>
            <MenuItem url="#vantagens" className="hidden sm:flex font-semibold font-mono">
                Vantagens
            </MenuItem>
            <MenuItem url="#motivos" className="hidden sm:flex font-semibold font-mono">
                Benefícios
            </MenuItem>
            <MenuItem 
                onClick={loginGoogle}
                className="bg-green-600">
                <div className="flex items-center gap-2 text-white font-sans font-medium shadow-sm">
                    <IconBrandGoogleAnalytics size={20} />
                        <span>Entrar</span>
                </div>
            </MenuItem>
        </div>
    )
}