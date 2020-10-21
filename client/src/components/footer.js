    import React from "react";
    import mail from './assests/mail.png'
    function Footer() {
    return (
        
        <div>
           <br></br>
           
        <footer class="footer" style={{color:"white"}}>Contact us :
       
      &nbsp;&nbsp;
   {/* <img class="Phone" src="phone.png"  href="/public"/>&nbsp;<b></b><h9>+4915168468433</h9>
   &nbsp;&nbsp;&nbsp;&nbsp; */}
    <img class="gmail" src={mail} href="/public" style={{height: "40px", width: "40px", marginTop: "20px"}} />&nbsp;<h9>health-gain@gmail.com</h9>
    &nbsp;&nbsp;&nbsp;&nbsp;
    {/* <img class="lc" src="lc.png" href="/public"/>&nbsp;<h9>Bonhoefferstrasse-3 69123, Heidelberg</h9> */}
     
  


    </footer>
        
    <p></p>
    </div>
       
    );
    }

    export default Footer;