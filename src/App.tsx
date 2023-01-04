import React from 'react';
import Provider from "./routes/provider";
import Home from './views/home';
import S from './app.styles';

function App() {
  return (
    <Provider>
      <S.Container className="App">
        <Home />
      </S.Container>
    </Provider>
  );
}

export default App;
