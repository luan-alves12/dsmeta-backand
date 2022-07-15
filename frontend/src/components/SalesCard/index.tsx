import axios from "axios"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Sale } from "../../models/sale"
import { BASE_URL } from "../../utils/request"
import NotificationButton from '../NotificationButton'
import './styles.css'


function SalesCard() {

    const date = new Date(new Date().setDate(new Date().getDate() - 365))
    /*método para alterar a data para a do ano passado , chamada de métodos */

    const [minDate, setMinDate] = useState(new Date())
    const [maxDate, setMaxDate] = useState(new Date())

    const [sales, setSales] = useState<Sale[]>([]);

    /*Essas declarações acima , são declarações de dados(variaveis) composto
     porque ele tem o dado e a função que modifica o mesmo , e depois o useSate 
     que já começa com a data de hoje*/

    useEffect(() => {

        const dmin = minDate.toISOString().slice(0,10);

        const dmax = maxDate.toISOString().slice(0,10);

        /*Essas var em cima são criadas para pegar a data e com o slice acaba
        ocorrendo o fateamento da string , abaixo esta a concatenação para no front
        ele filtrar as datas */

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`).then(response => {
            setSales(response.data.content);
        });
        /*aqui ocorre a requisição , nessa caso a requisição retorna um obj em js
        promesi , e o obj que vai executar uma operação , ela pode falhar ou 
        da certo , para capturar o que da certo usamos o .then() pois ela vai 
        receber o obj que deu certo.
        ESSE BASE_URL esta configurado dentro do meu arquivo request.ts que eu
        criei para ficar com as informações do servidor ou seja meu BASE e o 
        servidor + porta*/
    }, [minDate , maxDate]);  /* esse [minDate,maxDate] e para a app filtrar sempre que o valor mudar */

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
                        {sales.map(sale => {

                            return (
                            <tr key={sale.id}>
                                <td className="show992">{sale.id}</td>
                                <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                <td>{sale.sellerName}</td>
                                <td className="show992">{sale.visited}</td>
                                <td className="show992">{sale.deals}</td>
                                <td>R$ {sale.amount.toFixed(2)}</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton saleId={sale.id} />
                                    </div>
                                </td>
                            </tr>)

                        })
                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SalesCard