import React from 'react'

const References = ({translateVal}) => {
  const referenceDB = [
    {
      "title": 'refrences.2',
      "name": 'refrences.3',
      "phone": 'refrences.5',
      "email": 'refrences.7'
    },
    {
      "title": 'refrences.8',
      "name": 'refrences.9',
      "phone": 'refrences.5',
      "email": 'refrences.7'
    },
  ]
  return (
    <section className="references section" id="references">
        <h2 className="section-title">{translateVal('refrences.1')}</h2>
        <div className="refrences__container bd_grid">
            {
              referenceDB.map(({title, name, phone, email}, index) => (
                <div className="refrences__content bd_grid" key={index}>
                    <span className="refrences__subtitle">{translateVal(title)}</span>
                    <h3 className="refrences__title">{translateVal(name)}</h3>
                    <ul className="refrences__contact">
                      <li className='refrences__number'><span>{translateVal('refrences.4')}:</span><span>{translateVal(phone)}</span></li>
                      <li className='refrences__email'><span>{translateVal('refrences.6')}:</span><span title={translateVal(email)}>{translateVal(email)}</span></li>
                    </ul>
                </div>
              ))
            }
        </div>
    </section>
  )
}

export default References