/**
 * Created by darshit on 4/22/2016.
 */
//Populate users in side windows
var Sidebar = React.createClass({

    getInitialState: function() {
        return {
            searchString: ''
        };
    },

    handleChange: function(e) {

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({
            searchString: e.target.value
        });
    },

    render: function() {

        var users = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if (searchString.length > 0) {

            // We are searching. Filter the results.

            users = users.filter(function(l) {
                return l.name.toLowerCase().match(searchString);
            });

        }

        return <div>
            <ul className="sidebar-nav" id="sidebar-dynamic">
                { users.map(function(l){
                    return  <li className="sidebar-brand">
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src={l.url}
                                     className="img-circle" alt="User Image" />
                            </div>
                            <div className="pull-left info">
                                <p>{l.name}</p>
                                <a href="#"><i className="fa fa-circle text-success"></i> </a>
                            </div>
                        </div>
                    </li>
                }) }

            </ul>

        </div>;

    }
});


var users = [

    {
        id: 1,
        name: 'Goofie',
        url: 'http://img.lum.dolimg.com/v1/images/open-uri20150422-20810-1kn85bh_1e20f328.png?region=0,0,600,600&width=160',
        status: 'online'
    }, {
        id: 2,
        name: 'Donald',
        url: 'http://worldartsme.com/images/donald-duck-face-clipart-1.jpg',
        status: 'online'
    }, {
        id: 3,
        name: 'Mickey',
        url: 'https://s-media-cache-ak0.pinimg.com/736x/e8/a8/b7/e8a8b710c0cd47dba910f8f6635007a6.jpg',
        status: 'online'
    }, {
        id: 4,
        name: 'Daisy',
        url: 'http://wondersofdisney.webs.com/pals/daisy/daisyface2.png',
        status: 'online'
    }, {
        id: 5,
        name: 'Darshit',
        url: 'https://darshitvvora.files.wordpress.com/2014/03/0c1bb5b.jpg',
        status: 'online'
    },

];

// Render the Sidebar component on the page

React.render(
    <Sidebar items={ users } />,
    document.getElementById('sidebar-wrapper')
);