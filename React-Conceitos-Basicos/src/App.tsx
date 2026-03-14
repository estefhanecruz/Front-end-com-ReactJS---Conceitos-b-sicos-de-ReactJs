import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Post } from "./Components/Post";
export function App() {
	return (
		<>
			<Header />

			<main>
				<Post
					id={1}
					title="Bolo de Chocolate caseiro"
					image="https://www.publicdomainpictures.net/pictures/100000/nahled/chocolate-cake-14097917124kl.jpg"
					category="Receitas"
					avatar="https://github.com/estefhanecruz.png"
					author="Julia Melo"
					createdAt="Hoje"
					description="Delicioso bolo de chocolate"
				/>
				<Post
					id={2}
					title="Truques de maquiagem"
					image="https://cdn.stocksnap.io/img-thumbs/960w/woman-makeup_2XXA0XX9G0.jpg"
					category="Beleza"
					avatar="https://github.com/estefhanecruz.png"
					author="Julia Melo"
					createdAt="Hoje"
					description="Excelentes truques caseiro para maquiagem"
				/>
				<Post
					id={3}
					title="O contrato da interface"
					image="https://iprx-cms-content.ams1.vultrobjects.com/Blog_How_To_Crawl_4_capcha_ded9206d5f.png"
					category="Tecnologia"
					avatar="https://github.com/estefhanecruz.png"
					author="Julia Melo"
					createdAt="Hoje"
					description="Como cumprir fielmente o contrato feito pelas interfaces para elas não invadirem sua casa e matarem a sua família"
				/>
				<Post
					id={4}
					title="O que fazer quando seu cacahorro tem ansiedade de separação"
					image="https://www.publicdomainpictures.net/pictures/170000/nahled/dog-1461509373ztd.jpg"
					category="Pets"
					avatar="https://github.com/estefhanecruz.png"
					author="Julia Melo"
					createdAt="amanhã"
					description="Dicas do que fazer quando você tem que deixar seu pet sozinho para ir trabalhar"
				/>
			</main>
			<Footer />
		</>
	);
}
