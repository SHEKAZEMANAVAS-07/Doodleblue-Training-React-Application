// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import React, {useEffect} from 'react'
import backgroundImage from './assets/spiwall.jpeg'
import Button from './component/ui/button/index.jsx'
const App = () => {
  const [counter, setCounter] = React.useState(0)
  const [data,setData] = React.useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setData(data)
    }
    fetchData();
  },[])
  console.log(data,"data");
  return (
  <div>
    <h2>User Details</h2>
    {data.map((item)=>{
      return (
       <div key={item.id}>
        <h1>Name: {item.name}</h1>
        <p>Email: {item.email}</p>
        <p>Username: {item.username}</p>
        <p>Street: {item.address.street}</p>
        <p>Suite: {item.address.suite}</p>
        <p>City: {item.address.city}</p>
        <p>Zipcode: {item.address.zipcode}</p>
        <p>Latitude: {item.address.geo.lat}</p><p>Longitude: {item.address.geo.lng}</p>
</div>
      )})}
  </div>
  )  
}
  
//       <div className='container'>
//       <h1>welcome to the gallery</h1>
//       <img src={backgroundImage} alt="new image" className='img' />
//       <br />
//       <br />
//       <Button name={"Hello all"} className='greet' onClick={()=>alert("hi hello all")} ></Button>
//       <br />
//       <br />
//       <Button name={"increment"} onClick={()=>setCounter(counter+1)} className='greet'></Button>
//       <label>{counter}</label>
//       <Button name={"decrement"} onClick={()=>setCounter(counter-1)} className='greet'></Button>
//     </div>
    
    
//   )
// }
export default App
