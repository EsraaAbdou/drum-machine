function DrumPad(props){
    return(
      <div>
        <button className="drum-pad btn btn-secondary font-weight-bold px-5 py-4 mb-4" id={props.name} onClick={props.playAudio}>
          {props.content}
          <audio className="clip" id={props.content} src={props.src}></audio>
        </button>
      </div>
    );
}
export default DrumPad;