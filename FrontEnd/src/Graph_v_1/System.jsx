import React from 'react';
import {ReactFlow} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {defaultNodes} from "./nodes.jsx";
import {defaultEdges} from "./edges.jsx";

export default function System() {
	return (
		<div style={{width: '100%', height: '100vh'}}> {/* Полная высота для графа */}
			<ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} fitView>
			</ReactFlow>
		</div>
	);
}
