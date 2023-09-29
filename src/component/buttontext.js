// export default function Signup() {
//   return (
//     <div>
//       <h3>Preventing default behavior</h3>
//       <form onSubmit={() => alert("Submitting!")}>
//         <input />
//         <button>Send</button>
//       </form>
//       <hr />
//     </div>
//   );
// }

export default function Signup() {
    return (
        <div>
            <h3>Menghentikan preventDefault</h3>
            <form onSubmit={e => {
              e.preventDefault();
              alert('Submitting!');
            }}>
              <input />
              <button>Send</button>
            </form>
            <hr />
        </div>
    );
  }