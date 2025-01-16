import React from 'react'
import { Provider } from "react-redux";
import store from "./redux/store.tsx";
import Container from './components/Container.tsx'

const App :React.FC= () => {
  return (
    <Provider store={store}>
    <div>
      <Container/>
    </div>
    </Provider>
  )
}

export default App
