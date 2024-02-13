import logo from './logo.svg';
import './App.css';
import { Layout } from './components/Layout/Layot';
import { Description } from './components/Description/Description';
import { Slider } from './components/Slider/Slider';
import { Faq } from './components/Faq/Faq'
import { Modal } from './components/Modal/Modal'

function App() {
  return (
    <Layout>
      <main>
        <Description/>
        <Faq/>
        <Slider/>
      </main>
    </Layout>
    //<Modal/>
  );
}

export default App;
