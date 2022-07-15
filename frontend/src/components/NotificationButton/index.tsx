import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {

   saleId: number;

}

function handleClick(id:number){

   axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
      toast.info("Sms enviado com sucesso");
   });

}

/* o import acima recebeu o nome de icon , mas poderia ser qualquer nome , depois
de icon vem o from que e para exibir o caminho onde esta determinado arquivo.
nesse caso o .. ponto ponto / e para indiciar o retorno de um diretorio.
já o ./indica que esta no mesmo diretório , no caso no diretório atual deste arquivo
que esta sendo escrito*/

function NotificationButton( {saleId} : Props ) {

   return (

      <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>

         <img src={icon} alt="icone" />

      </div>

   )
}

export default NotificationButton

/*outra observação no react para indicar um elemento e usado o cochete 
         no lugar do aspas duplas , assim como a palavra class e trocada por
         className */