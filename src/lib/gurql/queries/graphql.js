import { gql } from '@urql/svelte';

export const image = gql`
	fragment image on Image {
		url
		alt
		link
	}
`;

export const card = gql`
	fragment card on Card {
		data1
		data2
	}
`;
export const TEST_QUERY = gql`
	query ($slug: String!) {
		customPage(where: { slug: $slug }) {
			components {
				__typename
				... on MyComp1 {
					...image
				}
				... on MyComp2 {
					...card
				}
			}
		}
	}
	${image}
	${card}
`;
