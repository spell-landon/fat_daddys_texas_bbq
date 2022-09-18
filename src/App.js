import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Fallback } from './components/elements/Fallback';
import { Layout } from './components/global/Layout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

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

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
