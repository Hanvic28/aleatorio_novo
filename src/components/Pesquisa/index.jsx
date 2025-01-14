import './style.css';
import Botao from '../Botao';
export default function Pesquisa(props) {
	return (
		<div className="BtnPesquisar">
			<input type="text" id="txtBusca" placeholder="Buscar..." />
			<Botao nome="Pesquisar" />
		</div>
	);
}
