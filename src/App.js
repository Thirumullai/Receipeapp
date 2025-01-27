import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import rootReducer from './redux/reducers';
import Home from './components/Home';
import RecipeDetailsPage from './components/RecipeDetailsPage';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} /> {/* Recipe Details Page */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
