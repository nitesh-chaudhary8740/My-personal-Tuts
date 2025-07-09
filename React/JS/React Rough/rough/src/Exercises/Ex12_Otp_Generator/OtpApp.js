import React from 'react'
import OtpContextProv from './OtpContextProv'
import Main from './Main'

const OtpApp = () => {
  return (
<OtpContextProv>
    <Main/>
</OtpContextProv>
  )
}

export default OtpApp
