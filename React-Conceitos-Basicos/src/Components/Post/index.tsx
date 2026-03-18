import { Link } from "react-router-dom";
import type { IPost } from "../../types";

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
}: IPost) {
	const hasExtraContent = false;
	let likeCount = 0;

	function handleLike() {
		likeCount += 1;
		alert(`Você curtiu este post ${likeCount} vezes!`);
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
