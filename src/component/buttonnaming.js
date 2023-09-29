// function Button({ onSmash, children }) {
//     return (
//       <button onClick={onSmash}>
//         {children}
//       </button>
//     );
//   }
  
//   export default function App() {
//     return (
//       <div>
//         <h3>Naming event handler props</h3>
//         <Button onSmash={() => alert('Playing!')}>
//           Play Movie
//         </Button>
//         <Button onSmash={() => alert('Uploading!')}>
//           Upload Image
//         </Button>
//         <hr />
//       </div>
//     );
//   }

export default function App() {
    return (
      <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
    );
  }
  
  function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
        <h3>Naming event handler props</h3>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
        <hr />
      </div>
    );
  }
  
  function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }