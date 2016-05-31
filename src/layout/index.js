var yo = require('yo-yo');

module.exports = function layout(content) {
 return yo`<div>
    <div id="header-container"></div>
    <div class="content">
      ${content}
    </div>
  </div>`;
}
    /*
      offset-m1: en dispositivos medium, se mueve 1 columna a la der o izq.
      brand-logo: clase de materialize.
      data-activates="drop-user": atributo para activar el dropdown
      dropdown-content: clase que tiene la lista del drop, para que se active cuando se haga clic en el link
    */