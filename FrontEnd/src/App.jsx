import {useState} from 'react';
import ReactFlow, {addEdge, Background, Controls} from 'reactflow';
import 'reactflow/dist/style.css';  // Добавляем стили для React Flow

export default function App() {
	// Определяем начальные узлы и рёбра (edges)
	const initialNodes = [
		{id: '1', position: {x: 250, y: 5}, data: {label: 'Start Node'}},
		{id: '2', position: {x: 100, y: 100}, data: {label: 'Another Node'}},
	];
	const initialEdges = [{id: 'e1-2', source: '1', target: '2', type: 'default'}];
	
	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState(initialEdges);
	
	// Функции для изменения узлов и рёбер
	const onNodesChange = (changes) => setNodes((nds) => nds.map((n) => ({...n, ...changes})));
	const onEdgesChange = (changes) => setEdges((eds) => eds.map((e) => ({...e, ...changes})));
	const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
	
	return (
		<div style={{height: '100vh'}}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
			>
				<Controls/> {/* Панель управления для масштабирования */}
				<Background/> {/* Фон с сеткой */}
			</ReactFlow>
		</div>
	);
}
