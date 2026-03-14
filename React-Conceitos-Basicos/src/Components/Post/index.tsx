interface PostProps {
	id: number;
	image: string;
	category: string;
	title: string;
	description: string;
	author: string;
	avatar: string;
	createdAt: string;
}
export function Post(props: PostProps) {
	console.log(props);
	return (
		<article>
			<img src={props.image} />
			<p>{props.category}</p>
			<h2>{props.title}</h2>
			<div>
				<img src={props.avatar} />
				<div>
					<span>{props.author}</span>
					<br />
					<span>{props.createdAt}</span>
				</div>
			</div>
			<p>{props.description}</p>
		</article>
	);
}
