import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/muaaz-azhar-664a771a2/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/muaazazhar/' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials