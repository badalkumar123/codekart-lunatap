import React from 'react'
import Faq from './Faq/Faq'
import Features from './Features/Features'
import Gothelp from './Gothelp/Gothelp'
import Topnavbar from './nav/Topnavbar'

import Pricing from './Pricing/Pricing'
import Top from './Top/Top'


export default function Home() {
  return (
    <div>
        <Topnavbar/>
        <Top/>
        <Features/>
        <Pricing/>
        <Faq/>
        <Gothelp/>
    </div>
  )
}
