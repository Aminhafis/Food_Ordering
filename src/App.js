import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Menu from './components/Menu';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Category from './hooks/Category';
import SearchById from './hooks/SearchById';
import SearchItem from './hooks/SearchItem';
import Area from './hooks/Area';
import Areas from './hooks/Areas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Category/:id" element={<Category />} />
          <Route path="SearchById/:id" element={<SearchById />} />
          <Route path="search/:data" element={<SearchItem />} />
          <Route path="Area" element={<Area />} />
          <Route path="Areas/:id" element={<Areas />} />
          {/* ❌ Removed: <Route path="Login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
