function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }

  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <Button onClick={handlePlayClick}>
        Play "{movieName}"
      </Button>
    );
  }
  
  function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div>
        <h3>Mengoper event handler sebagai prop</h3>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
        <hr />
      </div>
    );
  }