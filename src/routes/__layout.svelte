<script context="module">
	import { createClient } from '@urql/svelte';
	export async function load({ fetch }) {
		const client = createClient({
			url: import.meta.env.VITE_GRAPH_QL_ENDPOINT,
			fetch
		});
		return {
			// pass client in props to client side
			props: { client },
			// pass client in stuff to other pages, only available in load function
			stuff: { client }
		};
	}
</script>

<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { setClient } from '@urql/svelte';
	export let client;
	setClient(client);
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
