import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

function App() {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-28 object-contain' />
        </Link>

        <Link
          to={'/create-post'}
          className='font-inter font-medium bg-purple-700 text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-slate-100 min-h-[calc(100vh - 73px)]'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
