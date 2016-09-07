'use strict';

if (_.isUndefined(Uit.Views.Base)) {
	Uit.Views.Base = {};
}

Uit.Views.Base.Footer = Uit.View.extend({
    template: Uit.Templates.baseFooter,
    className: 'footer',
    initialize: function(options) {
        Uit.View.prototype.initialize.apply(this, [options]);
    }
});