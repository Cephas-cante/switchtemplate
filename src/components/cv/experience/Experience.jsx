import React from 'react'

const Experience = ({translateVal}) => {
  const experienceDB = [
    {
      'title': 'exp.2',
      'comp': 'exp.3',
      'compplus': 'exp.4',
      'desc': 'exp.5'
    },
    {
      'title': 'exp.6',
      'comp': 'exp.7',
      'compplus': 'exp.8',
      'desc': 'exp.5'
    },
    {
      'title': 'exp.9',
      'comp': 'exp.10',
      'compplus': 'exp.11',
      'desc': 'exp.5',
      "line": true
    },
  ]
  return (
    <section className="experience section" id="experience">
        <h2 className="section-title">{translateVal('exp.1')}</h2> 
        <div className="experience__container bd_grid">
          {
            experienceDB.map(({title, comp, line=null, desc, compplus}, index) => (
              <div className="experience__content" key={index}>
                <div className="experience__time">
                  <span className="experience__rounder"></span>
                  {
                    !line && (
                      <span className="experience__line"></span>
                    )
                  }
                </div>
                <div className="experience__data bd_grid">
                  <h3 className="experience__title">{translateVal(title)}</h3>
                  <span className="experience__company">{translateVal(comp)} | {translateVal(compplus)}</span>
                  <p className="experience__description">{translateVal(desc)} </p>
                </div>
          </div>  
            ))
          }
        </div>               
    </section>
  )
}

export default Experience