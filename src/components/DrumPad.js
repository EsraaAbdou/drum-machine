function DrumPad(props){
    return(
      <button className="drum-pad btn btn-secondary font-weight-bold w-75 py-4 mb-3" id={props.name} onClick={props.playAudio}>
        {props.content}
        <audio className="clip" id={props.content} src={props.src}></audio>
      </button>
    );
}
export default DrumPad;