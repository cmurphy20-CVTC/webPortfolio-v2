import React from "react";

function Form() {
  return(
    <form

    name="contact"

    action="success.html"

    method="POST"

    data-netlify-recaptcha="true"

    data-netlify="true">

    <div class="row">

      <div class="col-lg-10 offset-2 mx-auto">

        <p>

          <label class="col-form-label contactLabel">

            Name <input id="formInput" class="form-control" type="text" name="name"/>

          </label>

        </p>

      </div>

    </div>

    <div class="row">

      <div class="col-lg-10 offset-2 mx-auto">

        <p>

          <label class="col-form-label contactLabel">

            Email <input id="formInput" class="form-control" type="text" name="email"/>

          </label>

        </p>

      </div>
      
       
    </div>

    <div class="row">
      
      <div class="col-lg-10 offset-2 mx-auto">

        <p>

          <label class="col-form-label contactLabel">

            Message <textarea id="formMessage" class="form-control"  name="message" rows="15" cols="50"></textarea>

          </label>

        </p>

      </div>

    </div>
    
    <div class="row justify-content-center mx-auto my-4" data-netlify-recaptcha="true"></div>

    <div class="row">

      <div class="col">

        <p>

          <button id="outlineBtn" class="btn btn-outline-primary contactBtn" type="submit">
            Submit
          </button>

        </p>

      </div>

    </div>
    
    </form>
  )
}

export default Form;