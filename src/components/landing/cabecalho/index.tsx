import Logo from "../comum/Logo";
import Area from "../comum/Area";
import Menu from "./Menu";

export default function Cabeçalho() {
    return (
        <Area className="bg-white fixed z-50">
            <div className="flex items-center justify-between h-24">
                <Logo />
                <Menu/>
            </div>
        </Area>
    )
}