import React, { FC, ReactElement } from "react";
import { Provider as ToolkitProvider } from "react-redux";
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client";
import store from "../utils/slice/configureStore";

type ProviderPropsType = { children: ReactElement };

const Provider: FC<ProviderPropsType> = ({ children }) => {

  //constants
  const client:any = new ApolloClient({
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
    cache: new InMemoryCache()
  });


  return (
    <ApolloProvider client={client}>
      <ToolkitProvider store={store}>{children}</ToolkitProvider>
    </ApolloProvider>
  );
};

export default Provider;
