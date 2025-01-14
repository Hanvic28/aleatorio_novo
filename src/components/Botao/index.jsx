import './style.css';
export default function Botao(props) {
	function teste() {}
	return (
		<div>
			<button className="botao" id="buscar" onClick={teste()}>
				{props.nome}
			</button>
		</div>
	);
}
