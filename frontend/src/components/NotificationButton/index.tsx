import icon from '../../assets/img/notification-icon.svg'
import './styles.css'

/* o import acima recebeu o nome de icon , mas poderia ser qualquer nome , depois
de icon vem o from que e para exibir o caminho onde esta determinado arquivo.
nesse caso o .. ponto ponto / e para indiciar o retorno de um diretorio.
já o ./indica que esta no mesmo diretório , no caso no diretório atual deste arquivo
que esta sendo escrito*/

function NotificationButton() {

   return (

      <div className="dsmeta-red-btn">

         <img src={icon} alt="icone" />

      </div>

   )
}

export default NotificationButton

/*outra observação no react para indicar um elemento e usado o cochete 
         no lugar do aspas duplas , assim como a palavra class e trocada por
         className */