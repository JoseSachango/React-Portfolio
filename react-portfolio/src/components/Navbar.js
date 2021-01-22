import React from "react";
import {Link} from "react-router-dom";




function Navbar(props){

    return(


        
        <nav class="navbar p-3 mb-2 bg-dark text-white">
            
            <Link class="nav-link text-white" to="/index.html"><span class="navbar-brand mb-0 h1">Jose Sachango</span></Link>

            <ul class="nav justify-content-end">


                <li class="nav-item ">
                  <Link class="nav-link text-white" to="/index.html">About</Link>
                </li>

                <li class="nav-item ">
                  <Link class="nav-link  text-white"  to="/portfolio.html">Portfolio</Link>
                </li>
                
                <li class="nav-item">
                    <Link class="nav-link  text-white"  to="/contact.html" >Contact</Link>
                </li>
                
            </ul>
            
        </nav>


    )
    


}


export default Navbar