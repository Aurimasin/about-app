import React from 'react';
import api from '../../../Actions/api';
import View from '../Components/View';

export default class Work extends React.Component {
    state = {
        education: []
    }

    componentDidMount() {
        this.setState({ education: api.getWork() })
    };


    render = () => {
        return (
            <View list={this.state.education}>
                <hr/>
            </View>
        )
    }
}
