import './style.css';

export default function Link(props) {
	return (
		<div>
			<a href={props.links} className="links">
				{props.nome}
			</a>
		</div>
	);
}
