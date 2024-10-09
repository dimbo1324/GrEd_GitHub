export const elements = [
	// Группа №1
	// Внешний узел
	{data: {id: 'GROUP_1'}, classes: 'compound'},
	// Внутренние узлы
	{data: {id: 'index_js_GROUP_1', parent: 'GROUP_1', label: 'node_1'}},
	{data: {id: 'templates_js', parent: 'GROUP_1', label: 'node_2'}},
	{data: {id: 'types', parent: 'GROUP_1', label: 'node_3'}},
	
	// Группа №2
	{data: {id: 'GROUP_2'}, classes: 'compound'},
	
	
	{data: {id: 'templates_node_5', parent: '', label: 'node_5'}},
	{data: {id: 'templates_node_6', parent: '', label: 'node_6'}},
	
	
	// Связи
	{data: {source: 'index_js_GROUP_1', target: 'templates_js'}},
	{data: {source: 'templates_node_5', target: 'templates_node_6'}},
	{data: {source: 'templates_node_6', target: 'templates_node_5'}},
];
