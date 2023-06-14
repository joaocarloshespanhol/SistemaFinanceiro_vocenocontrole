import Pagina from "../template/Pagina";
import Cabeçalho from "./cabecalho";
import Comum from "./comum/Logo";
import Depoimentos from "./depoimentos";
import Destaque from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./vantagens";

export default function Landing() {
    return(
        <Pagina externa>
            <Cabeçalho />
            <Destaque />
            <Vantagens />
            <Depoimentos />
            <Rodape />
        </Pagina>
    )
}