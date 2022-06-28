import General from './components/General/General';
import GeneralWrapper from './pages/GeneralWrapper';
import LogIn from './components/LogIn/LogIn';
import Single from './components/Single/Single';
import AddPost from './components/AddPost/AddPost';

import { Route, Routes } from 'react-router-dom'

import './App.css';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<GeneralWrapper />}>
          <Route index element={<General />} />
          <Route path='single' element={<Single />} />
          <Route path='add' element={<AddPost />} />
          <Route path='chat' element={<Chat />} />
        </Route>
        <Route path='/login/:from' element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
