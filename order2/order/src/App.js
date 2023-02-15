import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './Store/Store';
import { Provider } from 'react-redux';
import Product from './components/Product';
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Product/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
