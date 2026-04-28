import { useState } from "react"
import { api } from "../../api/api"

export const Lesson = () => {

    const [ num, setNum ] = useState<number>(0)
    const [ frase, setFrase ] = useState<string>("")
    const aux = 10

    const ponerFrase = async () => {

        let contador = 0

        while(contador < aux){
            await api
                .get("").then((e) => {
                    setNum(e.data.wisdom.split(".")[0])
                    setFrase(e.data.wisdom.split(".")[1])
                })

            contador++;
        }

    }

    return (
        

        <div className="contenedorFrase" onClick={() => ponerFrase()}>
            
            { frase ? 
            <div className="fraseRandom"> 
                <h1>Lesson #{num}</h1>
                <h2>{frase}</h2>
            </div> 
            
            : 
            
            <>
                <div className="clicksArriba"> 
                    <h2>Click here first</h2>
                    <h2>Click here first</h2>
                </div> 


                <div className="centro">
                    <h1>Click Here</h1>
                    <h2>To learn your lesson</h2>
                </div>

            
                <div className="clicksAbajo">
                    <h2>Click here first</h2>
                    <h2>Click here first</h2>
                </div>
            </>
            }

        </div>

    )

}