import { Children, type ReactNode } from "react";

interface PostProps {
	id: number;
	image: string;
	category: string;
	title: string;
	description: string;
	author: string;
	avatar: string;
	createdAt: string;
	children?: ReactNode;
}
export function Post(props: PostProps) {
	console.log(props);
	const hasExtraContent = true;

	function handleLike() {
		alert("Você curtiu esse post");
	}

	return (
		<article>
			<h2>{props.title}</h2>
			<img src={props.image} />
			<p>{props.category}</p>
			<div>
				<img src={props.avatar} />
				<div>
					<span>{props.author}</span>
					<br />
					<span>{props.createdAt}</span>
				</div>
			</div>
			<p>{props.description}</p>
			{hasExtraContent ? (
				<button>Leia mais</button>
			) : (
				<p>Nenhum conteúdo disponível</p>
			)}
			<button onClick={handleLike}>Curtir</button>
		</article>
	);
}
