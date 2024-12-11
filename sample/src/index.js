// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './html.jpeg'


// Header Component
const Header = () =>(
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
)
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

const Main = () => (
  <main>
    <div className="mainwrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <UserCard/>
      </ul>
      <ul>
        <TechList/>
      </ul>
    </div>
  </main>
)

const Footer = () =>(
  <footer>
    <div className="footerwrapper">
      <p>copyright 2025</p>
    </div>
  </footer>
)

const App = () =>(
  <div className="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App/>, rootElement)