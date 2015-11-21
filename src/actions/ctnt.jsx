import { RECEIVE_CTNT } from "./types";

export const fetchCtnt = (id) => {
	return dispatch => {
		$.ajax({
			type: "GET",
			url: `http://jsonplaceholder.typicode.com/posts/${id}`
		})
		.done(data => dispatch(receiveCtnt (data)))
	}
}

const receiveCtnt = json => {
	return {
		type: RECEIVE_CTNT,
		ctnt: {
			title: json.title,
			body: json.body
		}
	}
}