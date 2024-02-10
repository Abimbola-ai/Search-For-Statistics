import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { data, footerData } from './data.js'

function HeaderComponent() {
  return (
    <div className="heading">
      <h1 className="title">Search For Statistics</h1>
      <input
        className="searchbox"
        type="text"
        placeholder="Enter any keyword"
      />
    </div>
  )
}

function SearchList() {
  return (
    <section className="searchlist">
      {data.map((d) => {
        const { icon, title, question, buttonTitle, id } = d
        return (
          <SearchItem
            icon={icon}
            title={title}
            question={question}
            buttonTitle={buttonTitle}
            key={id}
          />
        )
      })}
    </section>
  )
}

const SearchItem = (props) => {
  const { icon, title, question, buttonTitle } = props
  return (
    <article className="searchitem">
      <div className="titlesearch">
        <span class="material-symbols-outlined">{icon}</span>
        <h1>{title}</h1>
      </div>

      <p>{question}</p>
      <button type="submit">{buttonTitle}</button>
    </article>
  )
}

function FooterList() {
  return (
    <section className="footerlist">
      {footerData.map((f) => {
        const { footerIcon, footerTitle, message, linkTitle, id } = f
        return (
          <FooterItem
            icon={footerIcon}
            footerTitle={footerTitle}
            message={message}
            linkTitle={linkTitle}
            key={id}
          />
        )
      })}
    </section>
  )
}

const FooterItem = (props) => {
  const { icon, footerTitle, message, linkTitle } = props
  return (
    <article className="footeritem">
      <div className="titlesearch">
        <span class="material-symbols-outlined">{icon}</span>
        <h1>{footerTitle}</h1>
      </div>
      <p>{message}</p>
      <a href="#">{linkTitle}</a>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <HeaderComponent />
    <SearchList />
    <FooterList />
  </>
)
