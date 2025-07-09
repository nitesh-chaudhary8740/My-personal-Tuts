import React from 'react'
import { Link } from 'react-router-dom'

export default function Navhead() {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/feedback'>Feedback</Link>
      <Link to='/service'>Service</Link>
    </div>
  )
}
