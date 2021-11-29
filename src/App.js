// import { useContext } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import { ThemeContext } from './components/context';

import Intro from './components/Intro/Intro';
import ProductList from './components/ProductList/ProductList';
// import Toggle from './Toggole/Toggle';
function App() {

  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
    // <div style={{ backgroundColor: darkMode ? "white" : "white", color: darkMode && "white" }}>
    <div className="app">
      {/* <Toggle></Toggle> */}
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
    </div>
  );
}

export default App;
