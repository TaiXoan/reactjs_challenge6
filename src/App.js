import logo from './logo.svg';
import './App.css';
import Header from './Components/Header_Component/Header';
import All from './Components/All_Component/All';
import Active from './Components/Active_Component/Active';
import Complete from './Components/Complete_Component/Complete';
import Add from './Components/Add_Component/Add';
import Form from './Components/Form_Component/Form';
import Checkboxicon from './Components/Checkboxicon_Component/Checkboxicon';
import CheckboxTop from './Components/CheckboxTop_Component/CheckboxTop';
import ChecboxBottom from './Components/CheckboxBottom_Component/ChecboxBottom';

import './Components/Comment_Component/style.css';
import './Components/Header_Component/style.css';
import './Components/Form_Component/style.css';
import './Components/Add_Component/style.css';
const App = () => {
  return (
    <div className="container">
      <div className="maincontent">
        <Header>
        </Header>
        <div className="navigation">
          <All></All>
          <Active></Active>
          <Complete></Complete>
        </div>
        <hr />
        <div className="form">
          <Form></Form>
          <Add></Add>
        </div>
        <div className="result">
          <CheckboxTop />
        </div>

        <div className="result">
          <ChecboxBottom />
        </div>

        <div className="result">
          <Checkboxicon />
        </div>

      </div>
    </div>
  );
}
export default App;
