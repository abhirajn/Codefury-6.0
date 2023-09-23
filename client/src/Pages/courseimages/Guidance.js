import React from 'react'
import './Guidance.css'

import i1 from './i-1.jpg'
import i2 from './i-2.jpg'
import i3 from './i-3.jpg'
import i4 from './i-4.jpg'
import i5 from './i-5.jpg'
import i6 from './i-6.jpg'
import i7 from './i-7.jpg'
import i8 from './i-8.jpg'
import i9 from './i-9.jpg'



export default function Guidance() {
  return (
    <>
    <section class="sub-header">
        <nav>
            <a href="">
                <div class="nav-links" id="navlinks"> 
                    <i class="fa fa-times" onclick="hidemenu()" ></i>
                </div>
                <i class="fa fa-bars" onclick="showmenu()"></i>
            </a>
        </nav>
 </section>

<section class="collab">
    <h1> MENTAL HEALTH ARTICLES </h1>
      <p>Recognizing the Early Signs of Mental Illness and understanding them </p>
      <div class="row">
          <div class="collab-col">
           <img  src={i1}/>
           <div class="colwhy">
            <h3>promoting human rights in mental health and related areas</h3>
            In 2012, WHO created the QualityRights Initiative. This global programme is working to improve
             the quality of care provides to people with mental health conditions ...
          <br/> <a class="hero-btn red-btn" href="https://www.who.int/activities/transforming-services-and-promoting-human-rights-in-mental-health-and-related-areas">Read More</a>
            </div>
          </div>
          <div class="collab-col">
            <img src={i2}/>
            <div class="colwhy">
            <h3>Diploma in Mental Health
            </h3>Learn how to manage mental wellbeing with this free online mental health diploma course that explores human psychology....
            <br/> <a class="hero-btn red-btn" href="https://alison.com/course/diploma-in-mental-health">Read More</a>
           </div>
          </div>
           <div class="collab-col">
            <img src={i3}/>
            <div class="colwhy">
                <h3>How to Have a Better Mental Health
                </h3>Do you sense your mental health is declining? Are you not feeling as cheery or motivated as you once were? Here are four valuable tips to help you improve
                 your mental health to be the best it can be<offering class=""></offering>
                 <br/><a class="hero-btn red-btn" href="https://www.youtube.com/watch?v=IY2y6kH745A">Read More</a>
               </div>
           </div>
    </div>
</section>

<section class="collab">
      <div class="row">
          <div class="collab-col">
           <img  src={i4}/>
           <div class="colwhy">
            <h3>6 Signs You're Hurting Your Mental Health
            </h3>Let's talk about mental health. Are you struggling with your mental health lately, or need mental health tips? Oftentimes, we are unaware of how our thinking could
             be influencing mental health issues like depression or anxiety...
           <br/>  <a class="hero-btn red-btn" href="https://www.youtube.com/watch?v=AJNQdQOjrew">Read More</a>
           </div>
          </div>
          <div class="collab-col">
            <img src={i5}/>
            <div class="colwhy">
                <h3>6 Things People With Depression Want You to Know
                </h3>Do you know someone suffering from depression? Do you wonder what’s going
                 on in their minds? Depression is a serious mental illness that affects millions of people. 
               <br/>  <a class="hero-btn red-btn" href="https://www.youtube.com/watch?v=A4L0WZ1z1xE">Read More</a>
               </div>
           </div>
           <div class="collab-col">
            <img src={i6}/>
            <div class="colwhy">
                <h3>This Is How Depression Feels
                </h3>Depression is a serious mental illness that can interfere with a person’s life. The signs of depression could include long lasting feelings of sadness,
                 hopeless, and even apathy. Unlike sadness or short term depression, clinical depression often require medical intervention....
               <br/>  <a class="hero-btn red-btn" href="https://www.youtube.com/watch?v=Ii53BtHLnGk">Read More</a>
               </div>
           </div>
      </div>
</section>
<section class="collab">
    <div class="row">
        <div class="collab-col">
         <img  src={i7}/>
         <div class="colwhy">
          <h3>Online Harassment: Meaning, Types & Impact</h3>
          Online harassment is a serious & a potentially life-threatening issue with real repercussions to the victims and their personal and private life.
         The impact of online harassment can be , Online harassment may threaten someone’s physical integrity or could encourage others to carry out a physical attack....
        <br/> <a class="hero-btn red-btn" href="https://www.eap-india.com/online-harassment-meaning-types-impact/">Read More</a>
          </div>
        </div>
        <div class="collab-col">
          <img src={i8}/>
          <div class="colwhy">
          <h3>How To Deal With Social Media Pressure
          </h3>It’s a well-known fact that social media is having a negative impact on our mental health. With our technology usage ramping up, mindfulness about
           the effects social media can have on our state of mind is becoming more imperative....
          <br/> <a class="hero-btn red-btn" href="https://www.youtube.com/watch?v=27aLTrCqUlk">Read More</a>
         </div>
        </div>
         <div class="collab-col">
          <img src={i9}/>
          <div class="colwhy">
              <h3>6 Subtle Signs Your Mental Health is Deteriorating
              </h3> Are you struggling with your mental health and not even know it? Taking care of your mental health should always be a priority, especially during
               these difficult times. If not, this might even develop into a mental illness,<offering class=""></offering>
               <br/><a class="hero-btn red-btn" href="">Read More</a>
             </div>
         </div>
  </div>
</section>
</>
  )
}