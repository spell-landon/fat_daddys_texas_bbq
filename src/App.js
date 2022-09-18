import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import { Fallback } from './components/elements/Fallback';
import { Layout } from './components/global/Layout';
// Pages
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route
          path='/about'
          element={
            <Suspense fallback={<Fallback />}>
              <About />
            </Suspense>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
