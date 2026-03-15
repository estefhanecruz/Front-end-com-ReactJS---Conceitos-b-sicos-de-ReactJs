export function Footer() {
	const message = true;
	return (
		<footer>
			<p>® Mau blog 2026</p>
			{message && <p>Obrigada por visitar o nosso blog!</p>}
		</footer>
	);
}
