import React from 'react';
import api from '../../../Actions/api'
import View from '../../Education/Components/View';

export default class Education extends React.Component {
    state = {
        education: []
    };

    componentDidMount() {
        this.setState({ education: api.getEducation() })
    };

    render = () => {
        return (
            <View list={this.state.education}>
                <hr/>
            </View>
        );
    };
};
