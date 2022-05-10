import React from 'react'

const LinkTags = ({title, tag, icon, iconRef, link}) => {
  const linkAction = () => {
    tag.current.classList.remove('show-cur-menu');
  }
  return (
    <li className="nav__item">
        <a href={link} className="nav__link" onClick={linkAction}>
            <i style={{"--k": "var(--title-color)"}} ref={iconRef} className={` ${icon} nav__icon`}></i>
            <p>{title}</p>
        </a>
    </li>
  )
}

export default LinkTags