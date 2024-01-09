import { Provider } from 'react-redux';

import { store } from './redux/store';
import FilterableList from './components/FilterableList';

function App() {
  return (
    <Provider store={store}>
      <FilterableList />
    </Provider>
  );
}

export default App;
