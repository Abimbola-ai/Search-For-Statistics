import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function HeaderComponent() {
  return <h1>Search For Statistics</h1>
}
function SearchBoxComponent() {
  return <input type="text" placeholder="Enter any keyword" />
}

function SearchList() {
  return (
    <section className="searchlist">
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </section>
  )
}

const SearchItem = () => {
  return (
    <article>
      <h1>Search title</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
        fugit.
      </p>
      <button type="submit">Click to Search</button>
    </article>
  )
}

function FooterList() {
  return (
    <section>
      <FooterItem />
      <FooterItem />
      <FooterItem />
    </section>
  )
}

const FooterItem = () => {
  return (
    <article>
      <h2>Footer title</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <a href="#">Click Me</a>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <HeaderComponent />
    <SearchBoxComponent />
    <SearchList />
    <FooterList />
  </>
)
