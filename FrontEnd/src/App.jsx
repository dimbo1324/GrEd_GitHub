import React from 'react';
import './App.css';
import '@xyflow/react/dist/style.css';
import System from "./MiniMap/System.jsx";

export default function App() {
	return (
		<div style={{width: '100%', height: '100vh'}}> {/* Полная высота для графа */}
			<System></System>
		</div>
	);
}
