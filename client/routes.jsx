import ReactRouterSSR from 'react-router-ssr';
import {Route} from 'react-router';
import todoRoutes from './components/Todo/routes';

ReactRouterSSR.Run(
	<Route>
		{todoRoutes}
	</Route>
);
