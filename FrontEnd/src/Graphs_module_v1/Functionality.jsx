import React, {useEffect, useRef} from 'react';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import {elements} from "./elements.jsx";
import {stylesheet} from "./styles.jsx";

cytoscape.use(dagre);

export default function Functionality() {
	const cyRef = useRef(null);
	
	useEffect(() => {
		if (cyRef.current) {
			const cy = cytoscape({
				container: cyRef.current,
				elements,
				style: stylesheet,
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
