import './App.css';
import React from 'react';
import { KEYS } from './shared/keys';
import DrumPad from './components/DrumPad' 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: "Display"
    }
    this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', event => {
      const audioEl = document.getElementById(event.key.toUpperCase());
      if(audioEl) {
        audioEl.play();
        this.setState({
          display: audioEl.parentElement.id.split("-").join(" ")
        });
      }
    });
  }

  playAudio(event){
    event.target.children[0].play();
    this.setState({
      display: event.target.id.split("-").join(" ")
    })
  }

  render(){ 
    const keys = KEYS.map(key =>
      <div key={key.key} className="col-4">
        <div className="col">
          <DrumPad content={key.key} src={key.src} name={key.name} playAudio={this.playAudio} />
        </div>
      </div>); 
    return (
      <div className="d-flex h-100 align-items-center">
        <div className="container p-5 w-50 my-0 mx-auto bg-info" id="drum-machine">
          <div className="row">
            <div className="col-9">
              <div className="row">
                {keys}
              </div>
            </div>
            <div className="col-3 d-flex align-items-center">
              <div id="display" className="text-light font-weight-bold bg-secondary text-center w-100 p-3">{this.state.display}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
