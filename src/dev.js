import './dev.scss';

import Myloading from './main';
import 'resolution';
import 'resolution/dist/resolution-function.scss';

/*===example start===*/
class App extends React.Component {
  state = {
    animating: false,
  };

  _click1() {
    this.setState({
      animating: !this.state.animating
    },()=>{
      setTimeout(()=>{
        this.setState({
          animating: !this.state.animating
        })
      },5000);
    })
  }

  render() {
    const {animating} = this.state;
    return (
      <div className="hello-react-loading">
        <button className="react-loading-button" onClick={this._click1.bind(this)}>点击</button>
        <Myloading animating={animating}/>

      </div>
    );
  }
}

/*===example end===*/

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
