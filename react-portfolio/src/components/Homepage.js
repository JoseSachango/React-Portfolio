import React from "react";
import {Link} from "react-router-dom";
//import Navbar from "./Navbar"




function Homepage(){

    return (
        <>
            
       

        <div class="container mb-5">

                <div class="mt-5 row">
                            
                    <img class="container mx-auto w-25 h-25 rounded-circle" src="https://i.ibb.co/NrkSLFp/resume-Photo3.jpg" alt="resume-Photo3" border="0" />

                </div>

        </div>

        <div class="container  text-black">

                    <div class="row position-relative  mx-auto pr-0">

                        
                        <div class="col-3 text-dark text-right border-dark border-right">

                            <a class="text-dark"   href="https://www.linkedin.com/in/jose-sachango/">
                                <i>
                                    <b>Linkedin Profile</b>
                                </i>
                            </a>

                        </div>

                        
                        <div class="col-3    text-center border-dark border-right">

                            <a class="text-dark"  href={`https://github.com/JoseSachango`}>
                                <i>
                                    <b>Github Profile</b>
                                </i>
                            </a>

                        </div>
                        
                        <div class="col-3  text-dark text-center border-dark border-right">

                            <Link class="text-dark"  to={`#`}>
                                <i>
                                    <b>josesachango@gmail.com </b>
                                </i>
                            </Link>

                        </div>

                        
                        <div class="col-3   text-left">

                                <Link class="text-dark" to={`#`}>
                                    <i>
                                        <b>281-757-5535</b>
                                    </i>
                                </Link>

                        </div>
                        

                        


                    </div>

            <br />
            <br />

                <div class="row mx-auto  w-25">

                    <a class="d-block mx-auto text-dark text-center" href={"https://ibb.co/gzgs9CL"}>
                        <i>
                            <b>Resume</b>
                        </i>
                    </a>
                    

                </div>
            <br />
            <br />
            <br />

            <div class="row">

                
                    <div class="mx-auto text-dark"><h3>About Me</h3></div>
                
                

            </div>

            <hr class="bg-dark mx-auto w-25" />

            <div class="row">

                <div class="col-sm text-dark">
                    <h4 class="text-center"><i>Life long tinkerer looking to sink my teeth into the next juicy problem.</i></h4>
                    <br />
                    <p> Hi! My name is Jose Sachango. I'm a Houston based software developer with experience building full stack applications. I'm also a chemical engineer by training, which gives me the added advantage of being able to apply both numerical and analytical methods to solve a wider range of technical problems in the field of software development.</p>
                    <p>My background has allowed me to be adaptable and creative. It's also given me a breadth of understanding in a variety of fields. for instance, some of the projects I've worked on include: writing VBA scripts to automate data tracking for drilling and completion operations; designing a polyethylene petrochemical process using software like ASPEN plus; working in laboratory environments running experiments on gas chromatographs and distillation columns; I've even spent time managing after school STEM programs for fourth and fifth grade boys.</p>
                    <p>All of these projects had their own unique challenges that required me to draw from of variety of resource and come up with unique solutions; that's what I love to do. If you'd let me, I'd be happy to assess your problem and come up with a solution that works for you.</p>


                </div>

            

            </div>
            <hr class="bg-dark" />

            <div class="row">

                <div class="col-sm mx-auto text-dark">
                    <h5 class="text-center"><i>Work Experience</i></h5>
                    <br />

                        <div class="row">

                            <div class="col-3 border-right">
                                <img alt={"calendar"} src="https://img.icons8.com/android/24/000000/calendar.png"/> <b>11/2020 - Present</b> 
                            </div>
                            <div class="col-9">
                                <h5>Web Developer</h5>
                                <h6>Free Lance:</h6>
                                <img alt={"calendar"}  src="https://img.icons8.com/fluent-systems-regular/24/000000/map-pin--v2.png"/> <b>Houston, Texas</b>
                                <ul>Worked collaboratively using GIT version control to create a front-end application called Pet Resume. This application allows its users to query information on dogs that would make a good fit for their lifestyle. I've also worked on a full-stack application that uses socket.io to allow users to send messages in real time</ul>

                            </div>

                        </div>
                        <br />
                    
                        <div class="row">

                            <div class="col-3 border-right">
                                <img alt={"calendar"}  src="https://img.icons8.com/android/24/000000/calendar.png"/> <b>05/2019 - 10/2020</b> 
                            </div>
                            <div class="col-9 ">
                                <h5>Technologist</h5>
                                <h6>Chevron:</h6>
                                <img alt={"calendar"}  src="https://img.icons8.com/fluent-systems-regular/24/000000/map-pin--v2.png"/> <b>Houston, Texas</b>

                                <ul>handled requests for technical limit queries, data management and tracking, offset well research, hole phase analysis, materials and related cost management, cost tracking, contract reviews, invoice processing, non-productive time research, technical presentations, single well process planning, drilling program development, safety initiatives, GO-113 processing, and special projects.</ul>

                            </div>

                        </div>
                        <br />
                    
                        <div class="row">

                            <div class="col-3 border-right">
                                <img alt={"calendar"}  src="https://img.icons8.com/android/24/000000/calendar.png"/> <b>10/2018 - 05/2019 </b> 
                            </div>
                            <div class="col-9">
                                <h5>Operations Associate</h5>
                                <h6>Ango Global International, Inc:</h6>
                                <img alt={"calendar"}  src="https://img.icons8.com/fluent-systems-regular/24/000000/map-pin--v2.png"/> <b>Houston, Texas</b>

                                <ul>Assisted operations manager in execution of projects, including research, budgeting, and internal communication. Aided in oversea projects related to waste services.</ul>

                            </div>

                        </div>
                        <br />
                       
                        <div class="row">

                            <div class="col-3 border-right">
                                <img alt={"calendar"}  src="https://img.icons8.com/android/24/000000/calendar.png"/> <b>08/2018 - 04/2019</b> 
                            </div>
                            <div class="col-9">
                                <h5>Site Coordinator</h5>
                                <h6>St. Elmo Brady S.T.E.M Academy:</h6>
                                <img alt={"calendar"}  src="https://img.icons8.com/fluent-systems-regular/24/000000/map-pin--v2.png"/> <b>Houston, Texas</b>

                                <ul>Taught a lecture based on propulsion to 16 students, ranging from ages 10-12. Created and executed weekly lesson plans in order to increase student engagement and interest in S.T.E.M careers. Coordinated events and field trips to expose students to college and more S.T.E.M. activities.</ul>

                            </div>

                        </div>
                        <br />
                
                        <div class="row">

                            <div class="col-3 border-right">
                                <img alt={"calendar"}  src="https://img.icons8.com/android/24/000000/calendar.png"/> <b>05/2018 - 10/2018</b> 
                            </div>
                            <div class="col-9">
                                <h5>Laboratory Assistant</h5>
                                <h6>University of Houston:</h6>
                                <img alt={"calendar"}  class="text-dark"src="https://img.icons8.com/fluent-systems-regular/24/000000/map-pin--v2.png"/> <b>Houston, Texas</b>

                                <ul>Operated a 20-tray batch distillation column used to separate methanol-water mixtures to create samples and used Chemstation software to test for a linear regression curve compared to student results. Aided undergraduate chemical engineering students during their weekly lab to ensure experiments were performed properly. Operated and performed maintenance of gas chromatograph.</ul>

                            </div>

                        </div>
                        <br />
                        



                                        

                </div>

            </div>


        </div>

        </>

                );
                


}


export default Homepage