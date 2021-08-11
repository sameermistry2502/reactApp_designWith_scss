import React, { Component } from 'react';
import "../scss/contact.scss";
class Contact extends Component {


    render() {
        let form =  
            <form id="contact-form" class="form-horizontal" >
                                    
                    <div class="form-group">
                        <div class="col-sm-12">
                        <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
                        </div>
                    </div>
                
                    <div class="form-group">
                        <div class="col-sm-12">
                        <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
                        </div>
                    </div>
                
                    <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                    
                    <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                        <div class="alt-send-button">
                        <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                        </div>
                    
                    </button>

            </form>;

        return (
            <div className="con_container"  >
                <section id="contact">
                <h1 class="section-header">Contact</h1>
                <div class="contact-wrapper">
                    {form}
           
                    <div class="direct-contact-container">
                        <div>
                        <ul class="contact-list">
                        <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>
                        
                        <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
                        
                        <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
                        
                        </ul>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}



export default Contact;