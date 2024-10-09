export const stylesheet = [
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
		}
	},
	{
		selector: 'edge',
		style: {
			'width': 2,  // Толщина ребра
			'line-color': '#2374ab',  // Цвет линии ребра
			'target-arrow-color': '#2374ab',  // Цвет стрелки
			'target-arrow-shape': 'triangle',  // Форма стрелки
			'curve-style': 'bezier',  // Для плавных рёбер (если нужно)
		}
	}
];
