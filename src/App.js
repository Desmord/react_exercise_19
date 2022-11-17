import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './Components/Pages/Home/Home';
import SinglePost from './Components/Pages/SinglePost/SinglePost';
import Add from './Components/Pages/Add/Add';
import Edit from './Components/Pages/Edit/Edit';
import About from './Components/Pages/About/About';
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound';
import Header from './Components/Views/Header/Header';
import Footer from './Components/Views/Footer/Footer';
import Categories from './Components/Pages/Categories/Categories';
import SingleCategories from './Components/Pages/SingleCategories/SingleCategories';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<Add />} />
        <Route path="/post/edit/:id" element={<Edit />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/filter/:name" element={<SingleCategories />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
