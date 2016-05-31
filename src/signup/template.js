var yo = require('yo-yo'); //libreria que permite guardar codigo HTML como variables "yo"
var landing = require('../landing'); //no es necesario colocar el nombre del archivo si se desea llamar a index.js
var translate = require('../translate');

/*Module.exports: Variable disponible de Js - Permite crear un modulo que se puede requerir desde otro archivo*/
var signupForm = yo`<div class="col s12 m7">
      <div class="row">
        <div class="signup-box">
          <h1 class="platzigram">Platzigram</h1>
          <form class="signup-form">
            <h2>${translate.message('signup.subheading')}</h2>
            <div class="section">
              <a class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
              <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>${translate.message('signup.text')}</a>
            </div>
            <div class="divider"></div>
            <div class="section">
              <input type="email" name="email" placeholder="${translate.message('email')}"/>
              <input type="text" name="name" placeholder="${translate.message('fullname')}"/>
              <input type="text" name="username" placeholder="${translate.message('username')}"/>
              <input type="password" name="password" placeholder="${translate.message('password')}"/>
              <button class="btn waves-effect waves-light btn-signup" type="submit">${translate.message('signup.call-to-action')}</button>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="login-box">
          ${translate.message('signup.have-account')} <a href="/signin">${translate.message('signin')}</a>
        </div>
      </div>
    </div>`;

    module.exports = landing(signupForm);

    /*
    hide-on-med-and-up: en tablet y navegadores web de escritorio no se vera
    hide-on-small-only: no se ve en dispositivos pequeños

    */