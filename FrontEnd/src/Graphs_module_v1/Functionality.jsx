// Model.js
import React, {useEffect, useRef} from 'react';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import {elements} from "./elements.jsx";

cytoscape.use(dagre);

export default function Model() {
	const cyRef = useRef(null);
	
	useEffect(() => {
		if (cyRef.current) {
			const cy = cytoscape({
				container: cyRef.current,
				elements, 
				style: [
					{
						selector: 'node',
						style: {
							'background-color': '#d9ad60',
							'label': 'data(label)',
							'shape': 'rectangle',
							'text-valign': 'center',
							'text-halign': 'center',
							'width': '100px',
							'height': '60px',
							'border-width': 2,
							'border-color': '#333',
						},
					},
					{
						selector: '.compound',
						style: {
							'shape': 'round-rectangle',
							'background-opacity': 0.1,
							'border-width': 2,
							'border-color': '#333',
							'padding': 10,
							'label': 'data(id)',
						},
					},
					{
						selector: 'edge',
						style: {
							'width': 2,
							'line-color': '#2374ab',
							'target-arrow-color': '#2374ab',
							'target-arrow-shape': 'triangle',
						},
					},
				],
				layout: {
					name: 'dagre',
					rankDir: 'LR',
					nodeDimensionsIncludeLabels: true,
				},
			});
			
			return () => cy.destroy();
		}
	}, []);
	
	return <div ref={cyRef} style={{width: '100%', height: '600px'}}/>;
}
