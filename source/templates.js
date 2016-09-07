this["Uit"] = this["Uit"] || {};
this["Uit"]["Templates"] = this["Uit"]["Templates"] || {};

this["Uit"]["Templates"]["baseFooter"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="footer">\n\t<div>\n   \t</div>\n</div>';
return __p
};

this["Uit"]["Templates"]["baseHeader"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<nav class="navbar">\n    <div>\n    </div>\n</nav>';
return __p
};

this["Uit"]["Templates"]["baseLayout"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="wrapper">\n  <div class="content-wrapper">\n    <div class="container">\n      <div class="content" id="main"></div>\n    </div>\n  </div>\n</div>';
return __p
};

this["Uit"]["Templates"]["homeIndex"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<section class="content-header">\n    <h1>\n        Home\n    </h1>\n</section>\n\n<section class="content">\n    <div class="row">\n        <p>Thingies</p>\n    </div>\n</section>';
return __p
};