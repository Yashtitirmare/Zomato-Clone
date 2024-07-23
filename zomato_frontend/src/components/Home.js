import React from 'react'
import Footer from './Footer'
import Quicksearch from './Quicksearch'
import Wallpaper from './Wallpaper'

function Home() {
  return (
    <div>
        <Wallpaper/>
        <Quicksearch/>
        <br/>
        <Footer/>
        <br/>
    </div>
  )
}

export default Home
