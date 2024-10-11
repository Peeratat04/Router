import { Provider } from 'react-redux'; 
import Store from '.Store.jsx';
import AppRouter from './AppRouter'; 


function App() { 

  return ( 

    <Provider store={Store}> 

      <AppRouter /> 

    </Provider> 

  ); 

} 

export default App; 