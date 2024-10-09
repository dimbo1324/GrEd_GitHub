import React, {useEffect, useRef} from 'react';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import {elements} from './elements.jsx';
import {graphConfig} from './graphConfig.jsx';

cytoscape.use(dagre);

export default function Functionality() {
	const cyRef = useRef(null);
	
	useEffect(() => {
		if (cyRef.current) {
			const cy = cytoscape({
				container: cyRef.current,
				elements,
				style: graphConfig.style,
				layout: graphConfig.layout,
			});
			return () => cy.destroy();
		}
	}, []);
	
	return <div ref={cyRef} style={{width: '100%', height: '600px'}}/>;
}
