import Area from "../comum/Area";
import Slogan from "./Slogan";
import principal from "../../Images/principal.png";
import ImagemResponsiva from "../comum/ImagemResponsiva";

export default function Destaque() {
    return (
        <Area id="inicio" className="pt-20">
            <div className={`
                flex items-center justify-around
                h-[600px]
            `}>
                <Slogan />
                <ImagemResponsiva
                    imagem={principal}
                    className="hidden md:inline"
                />
            </div>
        </Area>
    )
}