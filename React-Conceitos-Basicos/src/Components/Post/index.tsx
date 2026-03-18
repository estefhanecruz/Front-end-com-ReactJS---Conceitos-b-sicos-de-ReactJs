import { Children, type ReactNode } from "react";
import { Link } from "react-router-dom";

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
export function Post({
	id,
	author,
	avatar,
	category,
	createdAt,
	description,
	image,
	title = "Post sem título",
	children,
}: PostProps) {
	const hasExtraContent = false;

	function handleLike() {
		alert(`Você curtiu o post ${title}`);
	}

	return (
		<article>
			<h2>
				<Link to={`/post/${id}`}>{title}</Link>
			</h2>
			<img src={image} alt="title" />
			<p>{category}</p>
			<div>
				<img src={avatar} />
				<div>
					<span>{author}</span>
					<br />
					<span>{createdAt}</span>
				</div>
			</div>
			<p>{description}</p>
			{children}
			{hasExtraContent ? (
				<button>Leia mais</button>
			) : (
				<p>Nenhum conteúdo disponível</p>
			)}
			<button onClick={handleLike}>Curtir</button>
		</article>
	);
}
