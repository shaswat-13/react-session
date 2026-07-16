// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import JS from './JsInReact.jsx'
// import { Fixed } from './BrokenNFixed.jsx'
import Card from './Card.jsx'
import Car from './Car.jsx'
import Greeting from './Greeting.jsx'
import Badge from './Badge.jsx'
import CounterDisplay from './CounterDisplay.jsx'
import Counter from './Counter.jsx'
import LikeButton from './LikeButton.jsx'
import CharacterCounter from './CharacterCounter.jsx'
import ProfileForm from './ProfileForm.jsx'

// todo app code
import TodoApp from './Todo.jsx'

// =======================================================================================

// 0. Plain JS code and similarity with react 
// function greet(name) {
//   return "Hello, " + name;
// }
// console.log(greet("Shaswat"));

/*

basically everything is like this in React but 
instead of returning strings or any values
we return UI elements -> JSX (JavaScript XML) 
which extends JS syntax to allow writing HTML- like code

*/

// =======================================================================================

// 0.1: basic component structure
// function App() {
//   return <h1>Hello, React!</h1>;
// }

// =======================================================================================

// 0.2,0.3: adding a component to App -> JsInReact.jsx
// function App() {
//   return (
//     <JS />
//   );
// }

// =======================================================================================

// 0.4: adding components  -> BrokenNFixed.jsx
// function App() {
//   return <Broken />;
// }

// function App() {
//   return <Fixed />;
// }


// =======================================================================================

// 1.1: components and their working -> Card.jsx
// function App() {
//   return (
//     <div>
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   );
// }

// =======================================================================================

// 1.2: components: how we structure an application -> App.jsx
// function Header() {
//   return <header><h1>Leapfrog KSS</h1></header>;
// }

// function MainContent() {
//   return <main><p>Welcome to today's session!</p></main>;
// }

// function Footer() {
//   return <footer><p>Thanks for attending</p></footer>;
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// =======================================================================================

// 1.3: Car component - lego brick like functionality -> Car.jsx

// function App() {
//   return <Car />;
// }

// =======================================================================================

// 2.1 props - passing data to components -> Greeting.jsx

// function App() {
// return <Greeting name="Shaswat" />;
// }

// =======================================================================================

// 2.2 same template, different data: real world use -> Greeting.jsx

// function App() {
//   return (
//     <div>
//       <Greeting name="Alice" />
//       <Greeting name="Bob" />
//       <Greeting name="Charlie" />
//     </div>
//   );
// }

// =======================================================================================

// 2.3 different data types as props: inside of {} so not string and default props -> Badge.jsx

// function App() {
//   return <Badge points={220} isVerified={true} />;
// }

// =======================================================================================

// 2.4 props shouldnt be modified -> CounterDisplay.jsx

// function App() {
//   return <CounterDisplay value={5} />;
// }

// =======================================================================================

// 3.1: state - a way to store data in a component -> Counter.jsx

// function App() {
//   return <Counter />;
// }

// =======================================================================================

// 3.2: state - like button example -> LikeButton.jsx
// function App() {
//   return <LikeButton/>;
// }
// =======================================================================================

// 3.3: character counter -> CharacterCounter.jsx
// function App() {
//   return <CharacterCounter />;
// }

// =======================================================================================

// 3.4 multiple state variables -> ProfileForm.jsx
// function App() {
//   return <ProfileForm />;
// }

// =======================================================================================

// todo app
// function App() {
//   return <TodoApp />;
// }


export default App;
