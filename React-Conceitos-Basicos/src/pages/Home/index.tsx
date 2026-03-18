import type { ChangeEvent, FormEvent } from "react";
import { posts } from "../../Posts";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { PostsList } from "../../Components/PostsList";

export function Home() {
	let filterText = "";
	function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
		filterText = event.target.value.toLowerCase();
		console.log("Texto  do filtro", filterText);
	}

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault();
		const filteredPosts = posts.filter((post) =>
			post.title?.toLowerCase().includes(filterText),
		);
		console.log("Posts filtrados", filteredPosts);
	}

	return (
		<>
			<Header />
			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="Filtrar posts por título"
					onChange={handleFilterChange}
				/>
				<button>Filtrar</button>
			</form>

			<main>
				<PostsList posts={posts} />
			</main>
			<Footer />
		</>
	);
}
