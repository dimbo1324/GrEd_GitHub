import React from 'react';
import {ReactFlow, MiniMap} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {defaultNodes} from "./nodes.jsx";
import {defaultEdges} from "./edges.jsx";


const nodeColor = (node) => {
	switch (node.type) {
		case 'input':
			return '#6ede87';
		case 'output':
			return '#6865A5';
		default:
			return '#ff0072';
	}
};

export default function System() {
	return (
		<div style={{width: '100%', height: '100vh'}}> {/* Полная высота для графа */}
			<ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} fitView>
				<MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable/>
			</ReactFlow>
		</div>
	);
}
