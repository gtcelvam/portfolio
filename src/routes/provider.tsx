import React,{FC, ReactElement} from 'react';
import {Provider as ToolkitProvider} from 'react-redux';
import store from '../utils/slice/configureStore';

type ProviderPropsType = { children: ReactElement };

const Provider: FC<ProviderPropsType> = ({children}) => {
  return (
    <ToolkitProvider store={store}>
        {children}
    </ToolkitProvider>
    
  )
}

export default Provider