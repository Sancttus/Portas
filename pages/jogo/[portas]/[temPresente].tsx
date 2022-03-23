import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link";
import { useRouter } from "next/router";


export default function jogo() {

    const router = useRouter();

    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(false)

    useEffect(() => {

        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qtdePortasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas 

        setValido(qtdePortasValidas && temPresenteValido)
   
    }, [portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
    // para converte os valores recebido pela url que vem em forma de string usamos o + para conv p/ numero
    setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    // router.query.portas
    // router.query.temPresente

    //os valores vão ser retornado como strings


    function renderizarPortas() {
        return valido && portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onchange={
                novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}> 

            <div className={styles.portas}>            
            { valido ? renderizarPortas() :  <h1>Valores Inválidos</h1>}
            </div>  

            <div className={styles.botoes}>
                <Link href={"/"}>
                    <button type="button">Reiniciar Jogo</button>
                </Link>
            </div>

      </div>
    )
}