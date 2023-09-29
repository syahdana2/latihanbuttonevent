// membuat komponen button menampilkan alert menggunakan props
// props yang berisikan message dan children
// komponen AlertButton 
function AlertButton({ message, children }) {  
    // render button yang berisikan props
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }
  // komponen Toolbar
  function Toolbar() {
    // mendeklarasikan props pada button(komponen AlertButton)
    return (
      <div>
        <h3>Membaca props pada event handler</h3>
        {/* button playing alert playing */}
        <AlertButton message="Playing!">
          Play Movie
        </AlertButton>
        {/* button uploading alert uploading */}
        <AlertButton message="Uploading!">
          Upload Image
        </AlertButton>
        {/* message = button */}
        {/* children = elemen(isi props) */}
        <hr />
      </div>
    );
  }
// export Toolbar yang berisikan 2 props dari komponen AlertButton
  export default Toolbar;