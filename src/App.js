import {HashRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import User from './components/User';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<User />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
