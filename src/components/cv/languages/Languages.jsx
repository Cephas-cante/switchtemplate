import React from 'react'

const Languages = ({translateVal}) => {
  return (
    <section className="languages section">
      <h2 className="section-title">{translateVal('languages.1')}</h2>
      <div className="languages__container">
        <ul className="languages__content bd_grid">
          <li className="languages__name">
            <span className="languages__circle"></span> {translateVal('languages.2')}
          </li>
          <li className="languages__name">
            <span className="languages__circle"></span> {translateVal('languages.3')}
          </li>
          <li className="languages__name">
            <span className="languages__circle"></span> {translateVal('languages.4')}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Languages