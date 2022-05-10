import React, { useRef, useState } from 'react'
import 'boxicons'
import LinkTags from '../linktags/LinkTags'


const Header = ({translateVal}) => {
const headerRef = useRef(null);
const iconRef = useRef(null);

  function scrollActive(){
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    if (sections){
        sections.forEach(current => {
          const sectionHeight = current?.offsetHeight;
          const sectionTop = current?.offsetTop - 50;
          let sectionId = current?.getAttribute('id'); 

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-cur-link');
            document.querySelector('.nav__menu a[href*=' + sectionId + '] .nav__icon')?.classList.add('new_icon')
          } else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-cur-link');
            document.querySelector('.nav__menu a[href*=' + sectionId + '] .nav__icon')?.classList.remove('new_icon')
            }
        })
    }
  }
  window.addEventListener('scroll', scrollActive);
  scrollActive();
    const navRef = useRef(null);
    const navTags = [
        {
            "title": "Home",
            "icon": "bx bx-home",
            "link": "#home"
        },
        {
            "title": "Profile",
            "icon": "bx bx-user",
            "link": "#profile"
        },
        {
            "title": "Education",
            "icon": "bx bx-book",
            "link": "#education"
        },
        {
            "title": "Skills",
            "icon": "bx bx-receipt",
            "link": "#skills"
        },
        {
            "title": "Experience",
            "icon": "bx bx-briefcase-alt",
            "link": "#experience"
        },
        {
            "title": "Certificates",
            "icon": "bx bx-award",
            "link": "#certificate"
        },
        {
            "title": "Refrences",
            "icon": "bx bx-link-external",
            "link": "#references"
        },
    ]
    const navLinks = document.querySelectorAll('.nav-link');
    /* SHOW MENU */
    const toggleMenu = (nav) => {
        nav.current.classList.toggle('show-cur-menu');
    }
  return (
    <div ref={headerRef} className="l-header" id="header">
        <nav className="nav bd-container">
            <a href="#" className="nav__logo">
                {translateVal('skills.2')}
            </a>
            <div className="nav__menu" ref={navRef} id="nav-menu">
                <ul className="nav__list">
                    {
                        navTags.map(({link, title, icon}, index) => (
                            <LinkTags 
                            tag={navRef}
                            iconRef={iconRef}
                            key={index}
                            link={link}
                            title={title}
                            icon={icon}
                            />
                        ))
                    }
                </ul>
            </div>
            <div 
            className="nav__toggle" 
            id="nav__toggle" 
            onClick={() => toggleMenu(navRef)}
            >
                <box-icon tagName="nav_toggle_icon" name="grid-alt"></box-icon>
            </div>
        </nav>
    </div>
  )
}

export default Header