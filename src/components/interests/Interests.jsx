import React from 'react'

const Interests = ({translateVal}) => {
  const interestDB = [
    {
      'title': 'interests.2',
      'icon': <i class='bx bx-headphone interests__icon'></i>
    },
    {
      'title': 'interests.3',
      'icon': <i class='bx bxs-plane-alt interests__icon'></i>
    },
    {
      'title': 'interests.4',
      'icon': <i class='bx bxs-book interests__icon'></i>
    },
    {
      'title': 'interests.5',
      'icon': <i class='bx bx-dumbbell interests__icon' ></i>
    },
  ]
  return (
    <section className="interests section">
        <section className="interests section">
          <h2 className="section-title">{translateVal('interests.1')}</h2>  
          <div className="interests__container bd_grid">
            {
              interestDB.map(({title, icon, typenew=null}, index) => (
                <div className="interests__content" key={index}>
                  {
                    icon
                  }
                    <span className="interests__name">{translateVal(title)}</span>
                </div>
              ))
            }
          </div>
        </section>              
    </section>
  )
}

export default Interests