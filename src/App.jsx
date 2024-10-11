import { Provider } from 'react-redux'; 
import Store from 'src/Store';
import AppRouter from './AppRouter'; 


function App() { 

  return ( 

    <Provider store={Store}> 

      <AppRouter /> 

    </Provider> 

  ); 

} 

export default App; 