import React from "react";
import { Provider } from "react-redux";
import { DataProviderContext, Resource } from "react-admin";
import { createHashHistory } from "history";
import restProvider from "ra-data-simple-rest";
import { store } from "./store";
import { useConfigurations } from "./hooks/useConfigurations";
import ApplicationRouter from "./router";
import ThemeConsumer from "./components/ThemeComsumer/index.components";

const App: React.FC = () => {
  const { baseApiUrl } = useConfigurations();
  const dataProvider = restProvider(baseApiUrl);
  const history = createHashHistory();

  return (
    <Provider
      store={store({
        dataProvider,
        history,
      })}
    >
      <DataProviderContext.Provider value={dataProvider}>
        <Resource name="posts" intent="registration" />
        <ThemeConsumer>
          <ApplicationRouter history={history} />
        </ThemeConsumer>
      </DataProviderContext.Provider>
    </Provider>
  );
};

export default App;
