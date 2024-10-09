import React, {useState} from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

const CytoscapeGraph = () => {
	const [elements, setElements] = useState([
		{data: {id: 'a', label: 'Node A'}, position: {x: 50, y: 50}},
		{data: {id: 'b', label: 'Node B'}, position: {x: 200, y: 200}},
		{data: {id: 'ab', source: 'a', target: 'b', label: 'Edge AB'}},
	]);
	
	const layout = {name: 'grid', rows: 1};
	
	const style = [
		{
			selector: 'node',
			style: {
				label: 'data(label)',
				'background-color': '#0074D9',
				'text-valign': 'center',
				'color': '#fff',
			},
		},
		{
			selector: 'edge',
			style: {
				label: 'data(label)',
				'curve-style': 'bezier',
				'target-arrow-shape': 'triangle',
				'line-color': '#FF4136',
				'target-arrow-color': '#FF4136',
				'width': 2,
			},
		},
	];
	
	return (
		<CytoscapeComponent
			elements={elements}
			style={{width: '600px', height: '400px'}}
			layout={layout}
			stylesheet={style}
		/>
	);
};

export default CytoscapeGraph;
