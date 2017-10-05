import React from 'react';

class PhotoGetter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {imageURL: "none", iterator: 0};
        this.handleButton = this.handleButton.bind(this);
    }

    componentDidMount() {
        fetch('https://api.gettyimages.com/v3/search/images?phrase=landscape', {
            method: 'GET',
            headers: {
                'Api-Key': 'cwzrqt5aqchw2y8mbk9kkh5b'
            }
        }).then((response) => {
            const promise = Promise.resolve(response.json());
            console.log(promise);
            promise.then( (value) => {
                if (this.state.iterator === value.images.length) {
                    this.setState = 0;
                }
                this.setState({imageURL: value.images[this.state.iterator].display_sizes[0].uri});
            });
        })
            .catch( (error) => {
                console.error(error);
            });
    }

    handleButton() {
        this.setState({iterator: ++this.state.iterator});
        this.componentDidMount();
    }

    render() {
        return (
            <div className="main">
                <img className="photo" src={this.state.imageURL}/>
                <button class="search" onClick={this.handleButton}> Go Next </button>
            </div>
        );
    }
}

export default PhotoGetter;