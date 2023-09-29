// export default function Toolbar() {
//     return (
//       <div className="Toolbar" onClick={() => {
//         alert('You clicked on the toolbar!');
//       }}>
//         <h3>Propagasi event </h3>
//         <button onClick={() => alert('Playing!')}>
//           Play Movie
//         </button>
//         <button onClick={() => alert('Uploading!')}>
//           Upload Image
//         </button>
//         <hr />
//       </div>
//     );
//   }

function Button({ onClick, children }) {
    return (
      <button onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
        {children}
      </button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <h3>Menghentikan propagasi</h3>
        <Button onClick={() => alert('Playing!')}>
          Play Movie
        </Button>
        <Button onClick={() => alert('Uploading!')}>
          Upload Image
        </Button>
        <hr />
      </div>
    );
  }