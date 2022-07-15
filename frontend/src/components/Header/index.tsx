import logo from '../../assets/img/logo.svg'
import './styles.css'

/* e importante saber que o importe de arquivos css , que já constam na mesma página
e preciso somente do ./nome do arquivo */

function Header() {

    return (

        <header>
            <div className="dsmeta-logo-conteiner">
                <img src={logo} alt="DSMeta" />
                <h1> DSMeta </h1>
                <p> Desenvolvido por <a href="https://www.instagram.com/luan_edgar/">@luan_edgar</a>
                </p>
            </div>
        </header>

    )
}

export default Header

/*Abaixo da tag <NotificationButton foi colocado uma tag </> isso porque o react não
permite mais de 1 tag , o nome dessa tag e : fragment*/ 