import logo from './logo.svg';
import './App.css';

import All from './Components/AllComponent';
import Active from './Components/ActiveComponent';
import Complete from './Components/CompleteComponent/Complete';
import Content from './Components/ContentComponent';


import './Components/ContentComponent/style.css';

const App = () => {
  return (
    <div className="container">
      <div className="maincontent">
      <div className="todo">
                #todo
            </div>
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
