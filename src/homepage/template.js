var yo = require('yo-yo'); //libreria que permite guardar codigo HTML como variables "yo"
var layout = require('../layout');
var picture = require('../picture-card');

module.exports = function(pictures) {
  var el = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map(function(pic) {
          return picture(pic);
        })}
      </div>
    </div>
  </div>`; 

  return layout(el);
}


/*Module.exports: Variable disponible de Js - Permite crear un modulo que se puede requerir desde otro archivo*/


