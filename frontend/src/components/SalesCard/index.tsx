import axios from "axios"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import NotificationButton from '../NotificationButton'
import './styles.css'


function SalesCard() {

    const date = new Date(new Date().setDate(new Date().getDate() - 365))
    /*método para alterar a data para a do ano passado , chamada de métodos */

    const [minDate , setMinDate] = useState(new Date())
    const [maxDate , setMaxDate] = useState(new Date())

    /*Essas declarações acima , são declarações de dados(variaveis) composto
     porque ele tem o dado e a função que modifica o mesmo , e depois o useSate 
     que já começa com a data de hoje*/ 

    useEffect(() => {
        axios.get("http://localhost:8080/sales").then(response => {
            console.log(response.data);
        })
        /*aqui ocorre a requisição , nessa caso a requisição retorna um obj em js
        promesi , e o obj que vai executar uma operação , ela pode falhar ou 
        da certo , para capturar o que da certo usamos o .then() pois ela vai 
        receber o obj que deu certo.*/
    },[]);

    /*useefect e uma react , ele serve para executar quando o componente e montado
    a primeira vez , e também quando algum valor for alterado.
    o primeiro () e uma função {} e um argumento*/

    return (

        <div className="dsmeta-card">

            <h2 className="dsmeta-sales-title">Vendas</h2>

            <div>

                <div className="dsmeta-form-control1-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                        //esse DatePicker ele e responsável por alterar meu antigo
                        //input colocando o date no formato select , mas o evento 
                        //onchange
                    />
                    
                </div>

                <div className="dsmeta-form-control1-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">Id</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SalesCard