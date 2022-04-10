import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
  
import AppStore from './store';

import Home from './pages/home/index';
import TopSongs from './pages/top-songs/index';
import ErrorFallback from "./components/ErrorFallback";

const App = () => {
  return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={AppStore}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/top-songs" element={<TopSongs />} />
              </Routes>
            </BrowserRouter>
        </Provider>
      </ErrorBoundary>
  )
}

export default App;
