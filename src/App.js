import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Posts from './Components/Pages/Posts/Posts';
import SinglePost from './Components/Pages/SinglePost/SinglePost';
import Add from './Components/Pages/Add/Add';
import Edit from './Components/Pages/Edit/Edit';
import About from './Components/Pages/About/About';
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound';
import Header from './Components/Views/Header/Header';
import Footer from './Components/Views/Footer/Footer';


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<Add />} />
        <Route path="/post/edit/:id" element={<Edit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
