'use client'
import { Provider } from 'react-redux';
import { store } from './Components/Displays/counter/state/store';
import NavBar from './Components/Displays/nav/page';

const App = () => {
  return ( 
    <>
    <Provider store={store}>
    {/* <Counter /> */}
    <NavBar />
    </Provider>
   
    </>
  )
}

export default App