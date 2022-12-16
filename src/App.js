import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './pages/home';

function App() {
  return (
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  );
}

export default App;
