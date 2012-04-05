/**
 * HTML template for the Navbar
 * @author Carlos Soto <carlos.soto@lognllc.com>
 */
 nano.templates.navbar = '<div class="navbar navbar-fixed-top">\
                            <div class="navbar-inner">\
                                <div class="container">\
                                    <a class="logo brand"><%= translate("nanotrader") %></a>\
                                    <div class="nav-collapse">\
                                        <ul class="nav nav-top">\
                                            <li class="divider-vertical"></li>\
                                            <li class="active"><a><span class="icon-home icon-white"></span><%= translate("dashboard") %></a></li>\
                                            <li class="divider-vertical"></li>\
                                            <li><a><span class="icon-custom icon-portfolio"></span><%= translate("portfolio") %></a></li>\
                                            <li class="divider-vertical"></li>\
                                            <li><a><span class="icon-custom icon-trade"></span><%= translate("trade") %></a></li>\
                                            <li class="divider-vertical"></li>\
                                        </ul>\
                                        <div class="navbar-text pull-right">\
                                            <ul class="nav">\
                                                <li class="divider-vertical"></li>\
                                                <li class="dropdown" id="fat-menu"><a class="dropdown-toggle pull-right" data-toggle="dropdown">\
                                                        <span class="icon-custom icon-user"></span>\
                                                        <span><%= email %></span>\
                                                        <span class="icon-down-arrow"></span>\
                                                    </a>\
                                                    <div class="dropdown-menu">\
                                                        <p class="user-title"><%= username %></p>\
                                                        <p><%= email %></p>\
                                                        <ul class="dropdown-nav">\
                                                            <li><a id="profile"><%= translate("profile") %></a></li>\
                                                            <li><a class="help"><%= translate("help") %></a></li>\
                                                            <li class="divider"></li>\
                                                            <li><a id="logout"><%= translate("logout") %></a></li>\
                                                        </ul>\
                                                    </div>\
                                                </li>\
                                                <li class="divider-vertical"></li>\
                                            </ul>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';

/**
 * View Class for the Navbar
 * @author Carlos Soto <carlos.soto@lognllc.com>
 */
nano.views.Navbar = function(element) {
    this.element = element;
    nano.containers.navbar = element;

    /**
     * Renders the Navbar View
     * @author Carlos Soto <carlos.soto@lognllc.com>
     * @return void
     */
    this.render = function(){

        if ( !this.element.html() )
        {
            var data = { 
                email: nano.session.username + '@nanotrader.com',
                username: nano.session.username
            };
            var navbar = _.template(nano.templates.navbar)(data);
            this.element.html(navbar);
            this.element.find('.dropdown-toggle').dropdown();

            this.element.find('#logout').click(function(){
                nano.utils.logout();
                nano.instances.controller.renderLogin();
            });
        }
        this.element.show();

    };
};
