module.exports = {
	externals: {
		// Make sure we use Meteor package for react and react-router
		react: 'React',
		'react-router': 'ReactRouter',
		'react-router-ssr': 'ReactRouterSSR',
		'blaze-to-react': 'BlazeToReact',
		'react-meteor-data': 'ReactMeteorData'
	},
	devServer: {
		// You can change this to your server IP address to access it remotely
		host: 'localhost'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.jsx']
	}
};
