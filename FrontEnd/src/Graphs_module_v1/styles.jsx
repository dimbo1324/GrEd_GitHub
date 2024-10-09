// graphElements.js
export const elements = [
	{data: {id: 'chalk'}, classes: 'compound'},
	{data: {id: 'color-convert'}, classes: 'compound'},
	
	{data: {id: 'index_js_chalk', parent: 'chalk', label: 'index.js'}},
	{data: {id: 'templates_js', parent: 'chalk', label: 'templates.js'}},
	{data: {id: 'types', parent: 'chalk', label: 'index.d.ts'}},
	
	{data: {id: 'index_js_color_convert', parent: 'color-convert', label: 'index.js'}},
	{data: {id: 'conversions_js', parent: 'color-convert', label: 'conversions.js'}},
	{data: {id: 'route_js', parent: 'color-convert', label: 'route.js'}},
	
	{data: {id: 'index_js_color_name', label: 'index.js', parent: 'color-name'}},
	{data: {id: 'index_js_ansi_styles', label: 'index.js', parent: 'ansi-styles'}},
	{data: {id: 'index_js_escape_string_regexp', label: 'index.js', parent: 'escape-string-regexp'}},
	{data: {id: 'index_js_supports_color', label: 'index.js', parent: 'supports-color'}},
	{data: {id: 'index_js_has_flag', label: 'index.js', parent: 'has-flag'}},
	
	{data: {id: 'color_name'}, classes: 'compound'},
	{data: {id: 'ansi_styles'}, classes: 'compound'},
	{data: {id: 'escape_string_regexp'}, classes: 'compound'},
	{data: {id: 'supports_color'}, classes: 'compound'},
	{data: {id: 'has_flag'}, classes: 'compound'},
	
	// Edges to represent dependencies
	{data: {source: 'index_js_chalk', target: 'templates_js'}},
	{data: {source: 'index_js_chalk', target: 'index_js_color_convert'}},
	{data: {source: 'index_js_color_convert', target: 'conversions_js'}},
	{data: {source: 'index_js_color_convert', target: 'route_js'}},
	{data: {source: 'index_js_color_name', target: 'index_js_color_convert'}},
	{data: {source: 'index_js_ansi_styles', target: 'index_js_chalk'}},
	{data: {source: 'index_js_escape_string_regexp', target: 'index_js_supports_color'}},
	{data: {source: 'index_js_supports_color', target: 'index_js_chalk'}},
];
