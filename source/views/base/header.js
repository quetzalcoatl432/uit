'use strict';

if (_.isUndefined(Uit.Views.Base)) {
    Uit.Views.Base = {};
}

Uit.Views.Base.Header = Uit.View.extend({
    template: Uit.Templates.baseHeader,
    className: 'header',
    tagName: 'header',
    initialize: function(options) {
        Uit.View.prototype.initialize.apply(this, [options]);
    }
});