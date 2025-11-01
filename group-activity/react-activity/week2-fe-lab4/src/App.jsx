import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Article from './Article';
import './App.css'
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Sidebar/>
      <Article/>
      <Footer />
    </div>
  );
}

export default App;