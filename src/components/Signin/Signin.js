import React from 'react';
import tachyons from 'tachyons';
const Signin =({onRouteChange}) =>{

  return(
    <article className="br2 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <main className="pa4 white-80">
        <form className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 ">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy white f6" for="email-address">Email</label>
              <input className="pa2 input-reset ba white bg-transparent hover-bg-white hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy white f6" for="password">Password</label>
              <input className="b pa2 input-reset white ba bg-transparent hover-bg-white hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input
            onClick={onRouteChange}
            className="b ph3 pv2 input-reset ba b--white bg-transparent white grow pointer f6 dib"
            type="sumbit"
            defaultValue="Sign in"/>
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim white db">Register</a>
          </div>
        </form>
      </main>
    </article>
  )
}


export default Signin;
