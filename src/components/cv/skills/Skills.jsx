import React from 'react'

const Skills = ({translateVal}) => {
  const skillsDB = [
    {
      'title': 'skillsnew.1',
    },
    {
      'title': 'skillsnew.2',
    },
    {
      'title': 'skillsnew.3',
    },
    {
      'title': 'skillsnew.4',
    },
    {
      'title': 'skillsnew.5',
    }
  ]
  const skillsNewDB = [
    {
      'title': 'skillsnew.6',
    },
    {
      'title': 'skillsnew.7',
    },
    {
      'title': 'skillsnew.8',
    },
  ]
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">{translateVal('skills.1')}</h2>   
      <div className="skills_content bd_grid">
        <ul className="skills__data">
          {
            skillsDB.map(({title},index) => (
              <li className="skills__name" key={index}>
                <span className="skills__circle"></span>{translateVal(title)}
              </li>
            ))
          }
        </ul>
        <ul className="skills__data">
          {
            skillsNewDB.map(({title},index) => (
              <li className="skills__name" key={index}>
                <span className="skills__circle"></span>{translateVal(title)}
              </li>
            ))
          }
        </ul>
        </div>     
    </section>
  )
}

export default Skills