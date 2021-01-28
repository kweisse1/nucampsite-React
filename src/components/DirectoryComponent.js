import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: [
                {
                    id: 0,
                    name: 'React Lake Campground',
                    image: 'assets/images/react-lake.jpg',
                    elevation: 1233,
                    description: "Nestled in the foothills of the Chrome Mounatins, blah blah blah puns fly fishers."
                },
                {
                    id: 1,
                    name: 'Chrome River Campground',
                    image: 'assets/images/chrome-river.jpg',
                    elevation: 877,
                    description: "Spend a few sunny days and nights here IF YOU SURVIVE. "
                },
                {
                    id: 2,
                    name: 'Breadcramb Trail Campground',
                    image: 'assets/images/breadcrumb-trail.jpg',
                    elevation: 2901,
                    description: /*put fa-music note here. <i class="fas fa-music"></i> */"and always let your Nucamp be your guide."
                },
                {
                    id: 3,
                    name: 'Redux Woods Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation: 42,
                    description: "This area is prone to flooding, leave quickly."
                }
            ],
        };
    }

    render() {
        const directory = this.state.campsites.map(campsite => {
            return(
                <div key={campsite.id} className="col">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2> {campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;