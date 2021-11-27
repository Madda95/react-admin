import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostList from "./components/PostsList";
import TopBar from "./components/Topbar/index.component";
import Dashboard from "./containers/Dashboard";

import Landing from "./containers/Landing";

interface IApplicationRouterProps {
  history: any;
}

interface IRoute {
  path: string;
  exact: boolean;
  component: React.FC;
  resource?: string;
}

const commonRoutes: IRoute[] = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/landing",
    component: Landing,
    exact: true,
  },
];

const ApplicationRouter: React.FC<IApplicationRouterProps> = ({
  history,
  children,
}) => {
  return (
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <TopBar />
        <Switch>
          {commonRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              key={route.path}
              component={route.component}
            />
          ))}
          <Route
            exact
            path="/posts"
            render={(routeProps) => (
              <PostList
                resource="posts"
                basePath={routeProps.match.url}
                {...routeProps}
              />
            )}
          />
          {children}
          ))
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  );
};

export default ApplicationRouter;
