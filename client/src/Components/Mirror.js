import React from 'react'
import './Mirror.css'
export default function Mirror() {
  return (
    <div>

        <div class="container">
            <div class="content">
                <div class="square twitch" style="margin-bottom: 50px;">
                    <span class="one" ></span>
                    <span class="two"></span>
                    <span class="three"></span>
                    <div class="circle">
                        <h2 class="DrugRadar"> SERENITY
                   
                        </h2>
                        <p> The Digital detox place</p>
                    </div>
                </div>
    
                <a href="{{route('dashboard.index')}}" class="button" target="_parent">
                        <span class="actual-text">&nbsp;Explore&nbsp;</span>
                        <span class="hover-text" aria-hidden="true">&nbsp;Explore&nbsp;</span>
                </a>
            </div>
        </div>

      {/* style={{background-image: url('https://images.pond5.com/african-woman-meditating-yoga-lotus-footage-077193422_prevstill.jpeg')}}" */}
         <div class ="mirror" >
     <p> Looking for how to keep social media out of your lives?</p>
    </div>

    </div>
  )
}
