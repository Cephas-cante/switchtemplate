import React from 'react'

const Profile = ({translateVal}) => {
  return (
    <section className="profile section" id="profile">
       <h2 className="section-title">{translateVal('profile.1')}</h2> 
       <p className="profile_description">{translateVal('profile.2')}</p>      
     </section>
  )
}

export default Profile