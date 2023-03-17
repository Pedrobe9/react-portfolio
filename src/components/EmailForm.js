import React from "react";
//import './EmailForm.css'

function EmailForm() {
    return (
        // Email is sent to my account using email provider from the user
        <div className='page-section cont2'>
            <h3>Send an email</h3>
            <form action="mailto:pedrobe.dev@gmail.com" method="POST" enctype="text/plain">
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your email address" />
                <textarea placeholder="Enter your message" cols="40" rows="10"></textarea>
                <button className="submitBtn">Submit</button>
            </form>
        </div>
    );
}

export default EmailForm;