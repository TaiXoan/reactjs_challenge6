import logo from './logo.svg';
import './App.css';

import Subtitle from './Components/Subtitle';
import All from './Components/All_Component';
import Active from './Components/Active_Component';
import Complete from './Components/Complete_Component/Complete';
import Content from './Components/Content_Component';

import './Components/Subtitle/style.css';
import './Components/Content_Component/style.css'



const App = () => {
  return (
    <div className="container">
      <div className="maincontent">
        <Subtitle />
        <div className="navigation">
          <All />
          <Active />
          <Complete />
        </div>
        <hr />
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}
export default App;
