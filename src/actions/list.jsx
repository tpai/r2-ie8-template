import { RECEIVE_LIST } from "./types";

export const fetchList = () => {
	return dispatch => {
		$.ajax({
			type: "GET",
			url: `http://jsonplaceholder.typicode.com/posts`
		})
		.done(data => dispatch(receiveList (data)))
	}
}

const receiveList = json => {
	return {
		type: RECEIVE_LIST,
		list: json
	}
}