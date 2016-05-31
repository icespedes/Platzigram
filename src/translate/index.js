//Si window.Intl no esta definido (Safari)
if (!window.Intl) {
  window.Intl = require('Intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}

//objeto global window
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat'); //Asignación Multiple - Traducción de fechas.
var IntlMessageFormat = require('intl-messageformat'); //traduccion de textos


require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var es = require('./es');
var en = require('./en-US');

var MESSAGES = {};
MESSAGES.es = es;
MESSAGES['en-US'] = en;

var locale = localStorage.locale || 'es';

module.exports = {
  message: function (text, opts) {
    opts = opts || {};
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
    return msg.format(opts);
  },
  date: new IntlRelativeFormat(locale)
}

