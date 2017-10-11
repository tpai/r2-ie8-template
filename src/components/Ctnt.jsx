import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchCtnt } from '../actions/ctnt';

class Ctnt extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        params: PropTypes.shape(),
        detail: PropTypes.shape({
            ctnt: PropTypes.shape()
        })
    }
    componentDidMount() {
        const { dispatch, params } = this.props;
        dispatch(fetchCtnt(params.id));
    }
    render() {
        const { detail } = this.props;
        return (
            <div>
                <h1>{detail.ctnt.title}</h1>
                <p>{detail.ctnt.body}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        detail: {
            ctnt: state.ctnt
        }
    };
}

export default connect(mapStateToProps)(Ctnt);
