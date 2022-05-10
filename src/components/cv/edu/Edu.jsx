import React from 'react'

const Edu = ({translateVal}) => {
  const eduDB = [
    {
      "degree": 'edu.2',
      "university": 'edu.3',
      "years": 'edu.4'
    },
    {
      "degree": 'edu.5',
      "university": 'edu.6',
      "years": 'edu.7'
    },
    {
      "degree": 'edu.8',
      "university": 'edu.9',
      "years": 'edu.10',
      "time": "time"
    },
  ]
  return (
    <section className="education section" id="education">
        <h2 className="section-title">{translateVal('edu.1')}</h2>
        <div className="education__container bd_grid">
          {
            eduDB.map(({degree, university, years, time=null}, index) => (
          <div className="education__content" key={index}>
          <div className="education__time">
            <span className="education__rounder"></span>
            {
              !time && (
                <span className="education__line"></span>
              )
            }
          </div>
            <div className="education__data bd_grid">
              <h3 className="education__title">
              {translateVal(degree)}
              </h3>
              <span className="education__studies">
              {translateVal(university)}
              </span>
              <span className="education__year">
              {translateVal(years)}
              </span>
            </div>
          </div>
            ))
          }
        </div>
    </section>
  )
}

export default Edu