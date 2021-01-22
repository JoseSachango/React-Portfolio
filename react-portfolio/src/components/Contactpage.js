import React from "react";


function Contactpage(){

        return (


            <form class="p-3 rounded-lg bg-dark text-white d-block col-md-4  mx-auto mt-5">

                <section class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </section>

                <section class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="password" class="form-control " id="exampleInputPassword1" />
                </section>

                <section class="form-group py-4">
                    <label for="exampleInputPassword1">Message</label>
                    <input type="message" class="form-control " id="exampleInputPassword1" />
                </section>

                

                <button type="submit" class="btn btn-primary bg-transparent text-white border-white">Submit</button>
                

            </form>





        )



}


export default Contactpage