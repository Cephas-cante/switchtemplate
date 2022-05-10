import {
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import Curiculum from './pages/curiculum/Curiculum';
function App() {
  return (
        <BrowserRouter> 
    <Routes>
    <Route path="/">
      <Route index element={<Curiculum />} />
    </Route>
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
