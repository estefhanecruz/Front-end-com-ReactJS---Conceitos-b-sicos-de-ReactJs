export function Header() {
	const isUserLoggedIn = true;
	let message;
	if (isUserLoggedIn) {
		message = <p>Bem vindo(a) de volta!</p>;
	} else {
		message = <p>Por favor, faça login para continuar</p>;
	}
	return (
		<header>
			<h1>Meu blog</h1>
			{message}
		</header>
	);
}
