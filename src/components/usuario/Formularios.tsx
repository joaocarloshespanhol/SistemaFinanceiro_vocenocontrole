import useFormulario from "@/data/hooks/useFormulario";
import MiniFormulario from "../template/MiniFormulario";
import Usuario from "@/logic/core/usuario/Usuario";
import { TextInput } from "@mantine/core";
import Texto from "@/logic/utils/Texto";
import Cpf from "@/logic/utils/Cpf";
import Telefone from "@/logic/utils/Telefone";
import { useContext, useEffect } from "react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function Formularios() {
    const { usuario, atualizarUsuario } = useContext(AutenticacaoContext)
    const { dados, alterarAtributo, alterarDados } = useFormulario<Usuario>()

    useEffect(() => {
        if(!usuario) return
        alterarDados(usuario)
    }, [usuario, alterarDados])

    async function salvar() {
        if(!usuario) return
        await atualizarUsuario(dados)
    }

    return (
        <div className="flex flex-col gap-5 mt-7">
            <MiniFormulario
                titulo="Seu Nome"
                descricao="Digite seu nome ou apelido, como preferir."
                msgRodape="O nome deve possuir entre 3 e 80 caracteres!"
                podeSalvar={Texto.entre(dados.nome, 3, 80)}
                salvar={salvar}
            >
                <TextInput
                    value={dados.nome}
                    onChange={alterarAtributo('nome')}
                />
            </MiniFormulario>
            <MiniFormulario
                titulo="CPF"
                descricao="Seu CPF é usado internamente para indentificá-lo."
                msgRodape="Fique tranquilo! Os dados são armazenados com segurança!"
                podeSalvar={true}
                salvar={salvar}
            >
                <TextInput
                    value={Cpf.formatar(dados.cpf ?? '')}
                    onChange={alterarAtributo('cpf', Cpf.desformatar)}
                />
            </MiniFormulario>
            <MiniFormulario
                titulo="Telefone"
                descricao="Seu número é usado internamente para indentificá-lo."
                msgRodape="Não ligamos e nem mandamos mensagem, somos difíceis!"
                podeSalvar={true}
                salvar={salvar}
            >
                <TextInput
                    value={Telefone.formatar(dados.telefone ?? '')}
                    onChange={alterarAtributo('telefone', Telefone.desformatar)}
                />
            </MiniFormulario>
        </div>
    )
}