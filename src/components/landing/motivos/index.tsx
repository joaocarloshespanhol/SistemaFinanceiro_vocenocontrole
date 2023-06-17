import Area from "../comum/Area";
import Motivos from "./Motivos";

export default function Motivo() {
    return (
        <Area id="motivos" className="py-10 sm:py-20">
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-black text-white text-2xl sm:text-4xl mb-11 text-center">
                    Por qual <span className="text-green-500 border rounded-xl p-1">motivo</span> usar o Sistema?
                </h2>
                <div className="flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap">
                    <Motivos
                        titulo="Planejamento"
                        texto="Um sistema financeiro ajuda a estabelecer metas claras e realistas para as finanças pessoais, assim, podendo definir prioridades e estabelecer planos."
                    />
                    <Motivos
                        titulo="Decisões Inteligentes"
                        texto="Você terá acesso a dados e informações detalhadas, portanto, poderá tomar decisões inteligentes sobre como gerenciar suas receitas e despesas de forma mais eficiente."
                        destaque
                    />
                    <Motivos
                        titulo="Hábitos de Consumo"
                        texto=" Com informações detalhadas, você poderá identificar padrões de gastos excessivos ou comportamentos financeiros indesejáveis."
                    />
                </div>
            </div>
        </Area>
    )
}