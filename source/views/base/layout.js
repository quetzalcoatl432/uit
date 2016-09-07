'use strict';

if (_.isUndefined(Uit.Views.Base)) {
    Uit.Views.Base = {};
}

Uit.Views.Base.Layout = Uit.View.extend({
    template: Uit.Templates.baseLayout,
    className: 'layout',
    initialize: function(options) {
        Uit.View.prototype.initialize.apply(this, [options]);
    }
});