import React from 'react'  
import Project from './projectsection'
import About from './aboutsection'
import Contact from './contactsection'

function pageContent() {
    return (

      <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
          <Project></Project>
          <About></About>
          <Contact></Contact>
      </div>
    );
  }


  export default pageContent