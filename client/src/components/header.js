import React from "react";
import icon from '../components/assests/icon1.jpg'

function Header() {
  return (
    <div>
    <br></br>
    
 <header class="header" style={{color:"white", fontSize: "25px", fontWeight: "bold"}}>
 <img class="gmail" src={icon} href="/public" style={{height: "40px", width: "40px", marginTop: "20px", marginLeft: "-1000px"}} />
 <p style={{marginTop: "25px", marginLeft: "20px"}}>Health Gain</p>


&nbsp;&nbsp;
{/* <img class="Phone" src="phone.png"  href="/public"/>&nbsp;<b></b><h9>+4915168468433</h9>
&nbsp;&nbsp;&nbsp;&nbsp;
<img class="gmail" src="mail.png"  href="/public" />&nbsp;<h9>ediary@gmail.com</h9>
&nbsp;&nbsp;&nbsp;&nbsp;
<img class="lc" src="lc.png" href="/public"/>&nbsp;<h9>Bonhoefferstrasse-3 69123, Heidelberg</h9> */}




</header>
<br></br> 
</div>
);
}
export default Header;