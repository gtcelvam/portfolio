import React from 'react';
import Provider from "./routes/provider";
import S from './app.styles';
import Home from './views/home';

function App() {
  return (
    <Provider>
    <S.Container className="App">
      <Home/>
    </S.Container>
    </Provider>
  );
}

export default App;
