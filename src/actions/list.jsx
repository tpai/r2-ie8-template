/* global $ */

import { RECEIVE_LIST } from './types';

export const fetchList = () =>
    dispatch => {
        $.ajax({
            type: 'GET',
            url: `http://jsonplaceholder.typicode.com/posts`
        })
            .done(data => dispatch(receiveList(data)));
    };

const receiveList = json =>
    ({
        type: RECEIVE_LIST,
        list: json
    });
