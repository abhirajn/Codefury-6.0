import React from 'react'
import './Tipscard.css'
import Sidebar from './Sidebar'

export default function Tipscard() {
  return (
  <>
  <div className = 'fixed'>
     <Sidebar/>
     </div>
    <div class = 'bodyy' style={{ backgroundColor: "#303032"}} >
    <h1 >IMPROVE YOUR MENTAL HEALTH EASILY:</h1>
    <main>
        <section class="cards">
          <div class="card">
            <div class="card__image-container">
              <img
                src="https://i.ndtvimg.com/i/2015-09/thali_625x350_81441377505.jpg"
              />
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Here's how a balanced diet helps
              </p>
              <div class="card__info">
                <p class="text--medium">--</p>
                <p class="card__price text--medium">2 minute read</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img
                src="https://www.brides.com/thmb/F2lcEa42uzqPz0E3VNLIn0Fw2iE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hobby-d98238f5781146c8a64e004ace179bf9.jpg"
              />
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Here's how having a hobby helps
              </p>
              <div class="card__info">
                <p class="text--medium">--</p>
                <p class="card__price text--medium">2 Minute read</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/1*roqF8yyhOkBXBhCBH5oWqw.jpeg"
              />
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Here's how writing a journal helps
              </p>
              <div class="card__info">
                <p class="text--medium">--</p>
                <p class="card__price text--medium">2 minute read</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img
                src="https://mindfulzen.co/wp-content/uploads/2022/10/Add_a_little_bit_of_body_text_3-1.png"
              />
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Here's how mediation and yoga helps
              </p>
              <div class="card__info">
                <p class="text--medium">--</p>
                <p class="card__price text--medium">2 minute read</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img
                src="https://cdn-iggaj.nitrocdn.com/OkZIMXBgAFJqjpGLsIYTmPhDQnnevrhN/assets/images/optimized/rev-f4d372b/allonehealth.com/wp-content/uploads/2023/04/man-sleeping.png"
              />
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Here's how good sleep helps
              </p>
              <div class="card__info">
                <p class="text--medium">--</p>
                <p class="card__price text--medium">2 minute read</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Here's how having a support structure helps
              </p>
              <div class="card__info">
                <p class="text--medium">--</p>
                <p class="card__price text--medium">2 minute read</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img
                src="https://www.verywellhealth.com/thmb/CvMDiJMrDJYBQQsG0QsiXDMy2Lo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/therapybenefits-eaaf1b2eef544fefb3e95ecce2be29e5.jpg"
              />
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Here's how seeking professional advise helps
              </p>
              <div class="card__info">
                <p class="text--medium">--</p>
                <p class="card__price text--medium">2 minute read</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img
                src="https://images.ctfassets.net/19dvw6heztyg/5oDRwgqI9899YXaAQPv8G/d956d17584ccc384c93e0cf8b8de249c/how-to-take-a-break-from-business?w=1440&q=75"
              />
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Here's how taking a break helps
              </p>
              <div class="card__info">
                <p class="text--medium">--</p>
                <p class="card__price text--medium">2 minute read</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img
                src="https://images.inc.com/uploaded_files/image/1024x576/getty_453469271_300851.jpg"
              />
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Here's how challenging yourself helps
              </p>
              <div class="card__info">
                <p class="text--medium">--</p>
                <p class="card__price text--medium">2 minute read</p>
              </div>
            </div>
          </div>
        </section>
      </main>







    </div>
    </>
  )
}
