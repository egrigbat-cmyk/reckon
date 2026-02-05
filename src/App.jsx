import { useState } from "react";

import "./App.css";

function App() {

   const [open , setopen] = useState(false);

   
   return (
    <div className="App">
       <div className="main">
         <div className="navi">
         <img src="./public/reckoner-logo.svg" width="150" className="logo"/>

         <div className="omo">
         <svg onClick={()=> setopen(prev=>!prev)}
         xmlns="http://www.w3.org/2000/svg" width="32" 
         height="32" viewBox="0 0 24 24" fill="none">
         {open ?(<path stroke="#0a0a0a" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.92 15.05L13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"></path>
        ):(<path stroke="#010000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"></path>)}
         </svg>
         {
            open &&(
               <nav className="nav" >
                  <div className="zoro">
                     <li id="fish">AAA CLO ETFs</li>
                     <br />
                     <li>RAAA</li>
                  </div>

                  <br />

                  <div className="luffy">
                     <li id="fish">BBB-B CLO ETFs</li>
                     <br />
                     <li>RCLO</li>
                  </div>
               </nav>
            )
         }
         Our Products
         </div>

         <a href="#ban" id="man">Contact</a>

        </div>
        
        <div className="one">
        <p className="big">Alternative Credit <br /> Access, simplified</p>
        
        <p className="small">We specialize in delivering superior investment performance through our expertise in alternative credit strategies.</p>
         
        </div>

        <img src="./public/sample-01.webp" className="red" />

        <p className="small2">Reckoner Capital Management is a global asset manager, dedicated to delivering superior investment performance across a range of alternative credit strategies</p>

        <p className="small3">we empower both institutional and retail investors to achieve their financial goals through innovative solutions, disciplined risk management, and client-focused approach </p>

        <div className="two">

        <img src="./public/sample-02.webp" alt="" srcset=""  width="100%" id="ship" />

        <p id="tex">Reckoner was founded in october 2024 by a sesoned team of investment professionals and Redbird capital partners, a private firm that builds high growth company with strategic capital solution to founders and enterprenuers. Redbird currently manages $14 billion in assets and focuses on three core industry vertical finance, sports and media entertainments. </p>

        <img src="./public/sample-03.webp" alt="" srcset="" width="100%" id="plane"/>
        
        </div>

        <img src="./public/sample-04.webp" alt="" srcset="" width="100%"  id="fan"/>

        <p className="small2">Leveraging decades of experiance in credit, we offer  a unique blend orf expertise in innovation.</p>

        <p className="small3">Reckoner pursues a variety of strategies across liquid and iliquid credit and structured products, including CLOs, ABS, and hard assets, delivering tailored investment solutions empasizing capital preservation.</p>
        

        <div className="form">

        <p className="big1">Contact Us</p>

        <p className="small4">if you have a question or comment, please fill out the form below and we will get in touch with you as soon as possible! </p>
         
      
        <div className="box" id="ban">
          <div className="yess">   
            <div className="buns">
                  <input type="text" placeholder="Name" className="yesa" />
                  <br />
                  <input type="email" name="" id="" placeholder="Email" required className="yesa" />
            </div>
           
            <div className="bins">
                  <input type="text" placeholder="Subject" className="yesa" />
                  <br />
                  <input type="phone" placeholder="Phone " className="yesa" />
            </div>
            
            <input type="text" name="" placeholder="Message" className="yesay"/>
          </div>
            <p id="grow"> This website is protected by reCAPTCHA and the privacy policy and terms of services apply.</p>
            <hr />
         
           <button id="subi">Submit</button>
         </div>

         </div>

      </div>

         <footer className="foot">
           <div  id="tenth" >
            <img src="./public/reckoner-logo-white.svg" alt="" srcset="" />

            <div className="ten1">
               <p>A RedBird Company</p>
               <br />
               <p className="bean" id="egg">contact</p>
            </div>
           </div>
            <div className="ten2">
                 <div>
                 <li className="bean">General inquiries</li>
                 <li>info@reckoner.comment</li>
                 <li>212.597.2500</li>
                 </div>
                 <br />   
                 <div>
                 <li className="bean">Media Inquiries</li>
                 <li>media@reckoner.com</li>
                 </div>
            </div>
            <br />
            <br />
            <br />

            <div className="ten3">
                <div>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
                </div>
                <br />
               <div>
               <li>SEC-registered investment adviser</li>
               <li>©2025 Reckoner. All rights reserved.</li>
                </div>
            </div>
            
            





         </footer>
      



        






      
     </div>

   )
}

export default App;