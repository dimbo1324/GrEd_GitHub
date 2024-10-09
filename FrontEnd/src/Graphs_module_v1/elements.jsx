// export const elements = [
// 	// Группа №1
// 	// Внешний узел
// 	{data: {id: 'GROUP_1'}, classes: 'compound'},
// 	// Внутренние узлы
// 	{data: {id: 'index_js_GROUP_1', parent: 'GROUP_1', label: 'node_1'}},
// 	{data: {id: 'templates_js', parent: 'GROUP_1', label: 'node_id_2'}},
// 	{data: {id: 'types', parent: 'GROUP_1', label: 'node_3'}},
//
// 	// Группа №2
// 	{data: {id: 'GROUP_2'}, classes: 'compound'},
//
//
// 	{data: {id: 'templates_node_5', parent: '', label: 'node_5'}},
// 	{data: {id: 'templates_node_6', parent: '', label: 'node_6'}},
//
//
// 	// Связи
// 	{data: {source: 'index_js_GROUP_1', target: 'templates_js'}},
// 	{data: {source: 'templates_node_5', target: 'templates_node_6'}},
// 	{data: {source: 'templates_node_6', target: 'templates_node_5'}},
// ];

export const elements =
	[
		//_________________________________________________________
		// Внешний граф
		//_________________________________________________________
		{data: {id: 'node_id_1', parent: '', label: 'INIT'}},
		{data: {id: 'node_id_2', label: 'node_2'}, classes: 'compound'},
		{data: {id: 'node_id_3', parent: '', label: 'node_3'}},
		{data: {id: 'node_id_4', parent: '', label: 'node_4'}},
		{data: {id: 'node_id_5', parent: '', label: 'node_5'}},
		{data: {id: 'node_id_6', parent: '', label: 'node_6'}},
		//_________________________________________________________
		{data: {source: 'node_id_1', target: 'node_id_2'}},
		{data: {source: 'node_id_2', target: 'node_id_3'}},
		{data: {source: 'node_id_3', target: 'node_id_4'}},
		{data: {source: 'node_id_4', target: 'node_id_5'}},
		{data: {source: 'node_id_5', target: 'node_id_6'}},
		{data: {source: 'node_id_6', target: 'node_id_1'}},
		//_________________________________________________________
		// Внутренний граф
		//_________________________________________________________
		{data: {id: 'node_id_10', parent: 'node_id_2', label: 'INIT'}},
		{data: {id: 'node_id_20', label: 'node_2', parent: 'node_id_2'}, classes: 'compound'},
		{data: {id: 'node_id_30', parent: 'node_id_2', label: 'node_3'}},
		{data: {id: 'node_id_40', parent: 'node_id_2', label: 'node_4'}},
		{data: {id: 'node_id_50', parent: 'node_id_2', label: 'node_5'}},
		{data: {id: 'node_id_60', parent: 'node_id_2', label: 'node_6'}},
		//_________________________________________________________
		{data: {source: 'node_id_10', target: 'node_id_20'}},
		{data: {source: 'node_id_20', target: 'node_id_30'}},
		{data: {source: 'node_id_30', target: 'node_id_40'}},
		{data: {source: 'node_id_40', target: 'node_id_50'}},
		{data: {source: 'node_id_50', target: 'node_id_60'}},
		{data: {source: 'node_id_60', target: 'node_id_10'}},
	]
