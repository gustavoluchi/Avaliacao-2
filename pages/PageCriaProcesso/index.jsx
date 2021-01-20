import { Button } from "@material-ui/core";
import axios from "axios";

export default function PageCriaProcesso() {

    function post() {
        axios.post('http://localhost:3002/processo', {"descricao" : "Solicitação de licença-prêmio", "assunto" : "Licença", "interessados" : ["Edmilson Cherem", "teste teste", "teste dois"]}).then(response => console.log(response))
    }


    return (
        <div>
            <Button onClick={post}> faz um post</Button>

        </div>
    )
}
