import './style.css';
import Link from '../../components/Link';
import Pesquisa from '../../components/Pesquisa';
import Botao from '../../components/Botao';

export default function RootLayout({ children }) {
	return (
		<div>
			<nav className="container">
				<img className="logo" src="/img/ave.png"></img>
				<div>
					<Pesquisa />
				</div>

				<div className="links">
					<Link links="/Home" nome="Home" />
					<Link links="/Contato" nome="Contato" />
					<Link links="/Sobre" nome="Sobre" />
					<Link links="/Login" nome="Login" />
				</div>
			</nav>
			<div>{children}</div>
		</div>
	);
}
