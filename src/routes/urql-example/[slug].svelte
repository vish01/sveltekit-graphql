<script context="module">
	import { TEST_QUERY } from '$lib/gurql/queries/graphql.js';
	export const load = async ({ params, url, stuff }) => {
		const slug = params.slug;
		const response = await stuff.client.query(TEST_QUERY, { slug }).toPromise();
		if (response.data) {
			return {
				props: {
					data: response.data
				}
			};
		}
		return {
            //show error message
			error: new Error(response.error.message)
		};
	};
</script>

<script>
	import Card from '$lib/Card/Card.svelte';
	export let data;
</script>

<Card {data} />
