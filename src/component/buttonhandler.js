// membuat komponen button yang diberi handleClick 
function ButtonHandler() {
  // fungsi handleClick yang berisikan pesan alert
  function handleClick() {
    alert("You clicked me!");
  }
  // merrender button ke html
  return (
    <div>
      <h3>Handler</h3>
      {/* onclick handleClick untuk menngeluarkan alert ketikan diklik */}
      <button onClick={handleClick}>Click me</button>
      <hr/>
    </div>
  );
}
// export button handler 
export default ButtonHandler;
