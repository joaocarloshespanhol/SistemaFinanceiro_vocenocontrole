import Pagina from "../template/Pagina";
import Cabeçalho from "./cabecalho";
import Motivos from "./motivos";
import Destaque from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./vantagens";

export default function Landing() {
    return(
        <Pagina externa>
            <Cabeçalho />
            <Destaque />
            <Vantagens />
            <Motivos />
            <Rodape />
        </Pagina>
    )
}