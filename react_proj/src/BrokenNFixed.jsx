// This will error — two root elements, no wrapper
// function Broken() {
//   return (
//     <h1>Title</h1>
//     <p>Subtitle</p>
//   );
// }

// use a Fragment 
function Fixed() {
  return (
    <>
      <h1>Title</h1>
      <p>Subtitle</p>
    </>
  );
}

// export default Broken;
export { Fixed };