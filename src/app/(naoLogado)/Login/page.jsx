'use client';
import './style.css';

import { useEffect, useState } from 'react';

export default function Page() {
	let [email, setEmail] = useState();
	let [senha, setSenha] = useState();
	let [dados, setDados] = useState();
	let logado = 'não';

	useEffect(() => {
		async function fetchDados() {
			const res = await fetch('http://localhost:3000/dados');
			const data = await res.json();
			setDados(data);
		}
		fetchDados();
	}, []);

	function Click() {
		console.log(1);
		dados.forEach((dado) => {
			console.log(2);
			if (email == dado.email) {
				logado = 'sim';
				console.log(3);
			}
			// if (senha != dado.senha) {
			// 	console.log('Senha Incorreta');
			// }
		});
	}

	function handlerEmail(e) {
		setEmail(e.target.value);
	}

	function handlerSenha(e) {
		setSenha(e.target.value);
	}

	return (
		<div>
			<div className="areaPai">
				<div className="area">
					<h1 className="titulo">Faça o seu login</h1>
					<div className="senhaEmail">
						<label>E-mail:</label>
						<input className="caixa" onBlur={handlerEmail} type="email" id="email" />
						<div className="espaco"></div>
						<label> Senha: </label>
						<input className="caixa" onBlur={handlerSenha} type="senha" id="senha" />
					</div>
					<button className="login" onClick={Click}>
						login
					</button>
				</div>
			</div>
			<div>
				<footer className="baixo">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccc</footer>
			</div>
		</div>
	);
}
