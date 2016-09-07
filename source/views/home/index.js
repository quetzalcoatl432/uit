'use strict';

if (_.isUndefined(Uit.Views.Home)) {
    Uit.Views.Home = {};
}

Uit.Views.Home.Index = Uit.View.extend({
    template: Uit.Templates.homeIndex,
    className: 'HomeIndex',
    initialize: function (options) {
        Uit.View.prototype.initialize.apply(this, [options]);
    }
});