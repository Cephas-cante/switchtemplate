import React from 'react'

const Certificate = ({translateVal}) => {
  const certificateDB = [
    {
      'title': 'certificate.2', 
      'desc': 'certificate.3',
      'year': true,
      'yearVal': 'year.1'
    },
    {
      'title': 'certificate.4', 
      'desc': 'certificate.3'
    },
    {
      'title': 'certificate.5', 
      'desc': 'certificate.3',
      'year': true,
      'yearVal': 'year.2'
    },
  ]
  return (
    <section className="certificate section" id="certificates">
      <h2 className="section-title">{translateVal('certificate.1')}</h2>             
      <div className="certificate__container bd_grid">
        {
          certificateDB.map(({title, desc, year=null, yearVal}, index) => (
            <div className="certificate__content" key={index}>
              <h3 className="certificate__title">
              {translateVal(title)} {year && (
                translateVal(yearVal)
              )}
              </h3>
              <p className="certificate__description">
              {translateVal(desc)}
              </p>
          </div>
          ))
        }
      </div>       
    </section>
  )
}

export default Certificate