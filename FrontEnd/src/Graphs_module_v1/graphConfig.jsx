import {stylesheet} from "./styles.jsx";

export const graphConfig = {
	style: stylesheet,
	layout: {
		name: 'dagre',
		rankDir: 'LR',
		nodeDimensionsIncludeLabels: true,
	},
};
