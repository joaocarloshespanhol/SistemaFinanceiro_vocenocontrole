import Area from "../comum/Area";
import vantagem1 from "../../Images/vantagem1.png";
import vantagem2 from "../../Images/vantagem2.png";
import vantagem3 from "../../Images/vantagem3.png";
import Vantagem from "./Vantagem";

export default function Vantagens() {
    return(
        <Area id="vantagens" className="bg-gradient-to-r from-black via-zinc-900 to-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36 ">
                <Vantagem
                    imagem={vantagem1}
                    titulo="Controle sua vida financeira por completo"
                    subtitulo="Controlar suas finanças é como dominar um jogo estratégico, onde cada movimento consciente e inteligente fortalece sua posição!"
                />

                <Vantagem
                    imagem={vantagem2}
                    titulo="Comece a usar hoje e tenha em mãos cada centavo gasto"
                    subtitulo="Visualize e acompanhe suas finanças dia a dia de maneira simples. A organização vai te ajudar a estar no controle de suas receitas e despesas!"
                    inverter
                />
                <Vantagem
                    imagem={vantagem3}
                    titulo="Planejar hoje para viver experiências únicas amanhã"
                    subtitulo="O planejamento contínuo sempre irá te fazer estar no controle do seu destino, construindo uma trajetória repleta de conquistas, aprendizados e gratificações."
                />
            </div>
        </Area>
    )
}