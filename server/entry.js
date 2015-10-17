// Polyfill ES6 for Node.js because Meteor doesn't use last version
import 'babel/polyfill';

import ReactRouterSSR from 'react-router-ssr';

import 'controllers/todo-methods';
import 'server/publications/todo-subscriptions';

// Do server-rendering only in proudction mode
if (process.env.NODE_ENV === 'production') {
	// Load Webpack infos for SSR
	ReactRouterSSR.LoadWebpackStats(JSON.parse(Assets.getText('webpack.stats.json')));

	require('../client/routes');
}
