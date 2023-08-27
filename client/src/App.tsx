import React from 'react';
import { BrowserRouter as Router, Routes , Route, useParams  } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import BlogDetailPage from './pages/BlogDetailPage.tsx';


const App : React.FC = () => {
const blogs = [
  {
      id : "1", 
      title: "What is SaaS? Software as a Service Explained",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      // authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      authorName: "Sidi dev",
      date: "Jan 4 2022",
      href: "/post/"
  },
  {
      id : "2",
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, I'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      // authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      authorName: "Micheal",
      date: "Jan 4 2022",
      href: "/post/"
  },
  {
      id : "3",
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      // authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
      authorName: "Luis",
      date: "Jan 4 2022",
      href: "/post/"
  },
  {
      id: "4",
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
      img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      // authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
      authorName: "Lourin",
      date: "Jan 4 2022",
      href: "/post/"
  }
]

  return (
    <Router>
    <div className="app font-primary">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog/:id' element={<BlogDetailPage blogs={blogs}/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
