import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import { transacaoVazia } from "@/logic/core/financas/Transacao";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import Cabecalho from "../template/Cabecalho";
import CampoMesAno from "../template/CampoMesAno";
import Conteudo from "../template/Conteudo";
import NaoEncontrado from "../template/NaoEncontrado";
import Pagina from "../template/Pagina";
import Formulario from "./Formulario";
import Grade from "./Grade";
import Lista from "./Lista";
import Sumario from "./Sumario";
import Graficos from "./Graficos";

export default function Financas() {
    const {
        data, alterarData, alterarExibicao, tipoExibicao,
        transacoes, transacao, selecionar, salvar, excluir
    } = useTransacao()

    function renderizarControles() {
        return (
            <div className="flex-col justify-between">
                <CampoMesAno
                    data={data}
                    dataMudou={alterarData}
                />
                <div className="flex gap-2 mt-6 md:ml-[60%] lg:ml-[70%] xl:ml-[78%] 2xl:ml-[85%] md:-mt-9">
                    <Button
                        className="mt-0.5 bg-sky-500 hover:bg-sky-600"
                        leftIcon={<IconPlus />}
                        onClick={() => selecionar(transacaoVazia)}
                    >Nova transação</Button>
                    <SegmentedControl
                        data={[
                            { label: <IconList />, value: 'lista' },
                            { label: <IconLayoutGrid />, value: 'grade' }
                        ]}
                        onChange={tipo => alterarExibicao(tipo as TipoExibicao)}
                    />
                </div>
            </div>
        )
    }

    function renderizarTransacoes() {
        const props = { transacoes, selecionarTransacao: selecionar }
        return tipoExibicao === 'lista' 
            ? <Lista {...props} />
            : <Grade {...props} />
    }

    return (
        <Pagina>
            <Cabecalho />
                <Sumario  transacoes={transacoes}/>
            <Conteudo className="gap-7">
                {renderizarControles()}
                {transacao ? (
                    <Formulario
                    transacao={transacao}
                    salvar={salvar}
                    excluir={excluir}
                    cancelar={() => selecionar(null)}
                    />
                    ) : transacoes.length > 0 ? (
                    renderizarTransacoes()
                ) : (
                    <NaoEncontrado>
                        Nenhuma transação encontrada
                    </NaoEncontrado>
                )}
                <Graficos />
            </Conteudo>
        </Pagina>
    )
}