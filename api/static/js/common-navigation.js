(function ($) {

    $.fn.organicityNavigation = function (login_uri, signout_uri, token) {
        console.log("create organicityNavigation ");
        var roles = [];
        if (token && token.length > 0) {
            var jwt = jwt_decode(token);
            var family_name = jwt.family_name;
            var given_name = jwt.given_name;
            var username = jwt.preferred_username;
            var roles = jwt.realm_access.roles;
        }

        //Check for admin
        var isAdmin = roles.includes('administrator');
        //console.log('found', found);

        var ul = $('<ul class="nav navbar-nav navbar-left" style="margin-right: 0!important;"></ul>');

        var li2 = $('<li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Tools<b class="caret"></b></a></li>');
        var ul2 = $('<ul class="dropdown-menu"></ul>');
        var yamm_content2 = $('<div class="yamm-content"></div>');
        var row2 = $('<div class="row"></div>');

        li2.append(ul2);
        ul2.append(yamm_content2);
        yamm_content2.append(row2);

        var ul2_1 = $('<ul class="col-sm-2 list-unstyled"></ul>');
        row2.append(ul2_1);

        ul2_1.append('<li class="title">Management Tools</li>');
        ul2_1.append('<li class="subtitle"><p><a href="https://communities.organicity.eu/">Community Management</a></p></li>');
        ul2_1.append('<li class="comment">Create communities from OrganiCity users based on their profiles</li>');
        ul2_1.append('<li class="subtitle"><p><a href="https://facilitymanager.organicity.eu/">Facility Management</a></p></li>');
        ul2_1.append('<li class="comment">Manage sites and services</li>');

        var ul2_2 = $('<ul class="col-sm-2 list-unstyled"></ul>');
        row2.append(ul2_2);

        ul2_2.append('<li class="title">Explore and annotate data</li>');
        ul2_2.append('<li class="subtitle"><p><a href="https://observatory.organicity.eu">Urban Data Observatory</a></p></li>');
        ul2_2.append('<li class="comment">Explore and filter data</li>');
        ul2_2.append('<li class="subtitle"><p><a href="https://observatory.organicity.eu">Data Annotation Service</a></p></li>');
        ul2_2.append('<li class="comment">Annotate your data</li>');

        var ul2_3 = $('<ul class="col-sm-2 list-unstyled"></ul>');
        row2.append(ul2_3);

        ul2_3.append('<li class="title">Experimenter tools</li>');
        ul2_3.append('<li class="subtitle"><p><a href="https://scenarios.organicity.eu/">Scenarios</a></p></li>');
        ul2_3.append('<li class="subtitle"><p><a href="https://organicityeu.github.io/tools/sensinact/index.html">SensiNact</a></p></li>');
        ul2_3.append('<li class="subtitle"><p><a href="https://set.organicity.eu/">Smartphone Experimentation</a></p></li>');
        ul2_3.append('<li class="subtitle"><p><a href="https://organicityeu.github.io/tools/tsmart/tsmart/">TSmarT</a></p></li>');
        ul2_3.append('<li class="subtitle"><p><a href="http://www.tinkerspace.se/">Tinkerspace</a></p></li>');
        ul2_3.append('<li class="subtitle"><p><a href="http://organicityeu.github.io/tools/websockets/">Web Socket Library</a></p></li>');

        ul.append(li2);

        var li3 = $('<li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Documentation<b class="caret"></b></a></li>');
        var ul3 = $('<ul class="dropdown-menu"></ul>');
        var yamm_content3 = $('<div class="yamm-content"></div>');
        var row3 = $('<div class="row"></div>');

        li3.append(ul3);
        ul3.append(yamm_content3);
        yamm_content3.append(row3);

        var ul3_1 = $('<ul class="col-sm-2 list-unstyled"></ul>');
        row3.append(ul3_1);

        ul3_1.append('<li class="title"><p><a href="https://organicityeu.github.io/">Tech Docs</a></p></li>');
        ul3_1.append('<li class="comment">Find technical documentation about the interaction with the facility</li>');

        var ul3_2 = $('<ul class="col-sm-2 list-unstyled"></ul>');
        row3.append(ul3_2);

        ul3_2.append('<li class="title"><p><a href="https://github.com/OrganicityEu/">Github</a></p></li>');
        ul3_2.append('<li class="comment">Here you can find code examples to speed up your development</li>');

        ul.append(li3);

        var li4 = $('<li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Support<b class="caret"></b></a></li>');
        var ul4 = $('<ul class="dropdown-menu"></ul>');
        var yamm_content4 = $('<div class="yamm-content"></div>');
        var row4 = $('<div class="row"></div>');

        li4.append(ul4);
        ul4.append(yamm_content4);
        yamm_content4.append(row4);

        var ul4_1 = $('<ul class="col-sm-2 list-unstyled"></ul>');
        row4.append(ul4_1);

        ul4_1.append('<li class="title"><p><a href="http://dev.qa.organicity.eu/index.php">Q&A</a></p></li>');
        ul4_1.append('<li class="comment">Get involved in our forum, search the threads and ask our team</li>');

        var ul4_2 = $('<ul class="col-sm-2 list-unstyled"></ul>');
        row4.append(ul4_2);
        ul4_2.append('<li class="title"><p><a href="https://support.zoho.com/portal/organicity/home">Zoho</a></p></li>');
        ul4_2.append('<li class="comment">Here you can ask questions to the Organicity team regarding particular issues</li>');

        ul.append(li4);

        var ul_login = $('<ul class="nav navbar-nav navbar-right" style="margin-right: 20px!important;"></ul>');

        if (username) {
            var profile = $('<li class="dropdown circle"><a style="padding:0" href="#" data-toggle="dropdown" class="dropdown-toggle"><div class="userCircle">' + given_name[0] + family_name[0] + '</div></a></li>');
            var ul_profile = $('<ul class="dropdown-menu" aria-labelledby="dropdownMenu1"></ul>');
            ul_profile.append($('<li class="dropdown-header">' + given_name + ' ' + family_name + '</li>'));
            //ul_profile.append($('<li><a href="#">Profile</a></li>'));
            ul_profile.append($('<li><a href="https://accounts.organicity.eu/my">Account</a></li>'));
            ul_profile.append($('<li>&nbsp;</li>'));
            ul_profile.append($('<li><a href="' + signout_uri + '">Sign out</a></li>'));
            profile.append(ul_profile);
            ul_login.append(profile);
        } else {
        }

        var master_div = $('<div></div>');
        master_div.append(ul);
        master_div.append(ul_login);
        this.html(master_div);
        return this;
    };

}(jQuery));
