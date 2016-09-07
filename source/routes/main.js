'use strict';

Uit.Router.Main = Uit.Router.extend({
    className: 'Main',
    routes: {
        '': 'home',
        'home': 'home',
    },
    initialize: function () {
        Uit.Router.prototype.initialize.call(this);
    },
    execute: function () {
        this.baseLayout();
        Uit.Router.prototype.execute.apply(this, arguments);
    },
    baseLayout: function () {
        var midView = new Uit.Views.Base.Layout();
        //Header
        if (Uit.checkViewExist('header') === false) {
            var header = new Uit.Views.Base.Header();
            Uit.htmlView(header, '#header');
        }
        //Mid layout
        Uit.htmlView(midView, '#layout');
        //Footer
        if (Uit.checkViewExist('footer') === false) {
            var footer = new Uit.Views.Base.Footer();
            Uit.htmlView(footer, '#footer');
        }
        return this;
    },
    home: function () {
        var view = new Uit.Views.Home.Index();
        Uit.htmlView(view, '#main');
    }
});