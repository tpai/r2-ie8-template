import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchList } from '../actions/list';

class List extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        list: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string
        }))
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchList());
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                <h1>Post List</h1>
                <ul>
                    {list.map(item => (<li key={item.id}><Link to={`/content/${item.id}`}>{item.title}</Link></li>))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps)(List);
