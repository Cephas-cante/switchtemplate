import React from 'react'

const Social = ({translateVal}) => {
  return (
    <section className="social section">
        <h2 className="section-title">{translateVal('social.1')}</h2> 
        <div className="social__container bd_grid">
          <a href="https://www.linkedin.com/" target={"_blank"} className="social__link">
          <i class='bx bxl-linkedin social__icon' />{translateVal('social.2')}
          </a>
          <a href="https://www.facebook.com/" target={"_blank"} className="social__link">
          <i class='bx bxl-facebook social__icon'></i>{translateVal('social.2')}
          </a>
          <a href="https://instagram.com/" target={"_blank"} className="social__link">
          <i class='bx bxl-instagram social__icon' ></i>{translateVal('social.2')}
          </a>
        </div>
    </section>
  )
}

export default Social