import './App.css';
import { Layout } from './components/Layout/Layot';
import { Description } from './components/Description/Description';
import { Slider } from './components/Slider/Slider';
import { Faq } from './components/Faq/Faq'
import { ModalProvider } from './components/ModalProvider/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <Layout>
        <Description />
        <Faq />
        <Slider />
      </Layout>
    </ModalProvider>
  );
}

export default App;
