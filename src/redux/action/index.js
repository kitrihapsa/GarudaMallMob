import API_URL from '../../services/api/index'

export function GET_NEWS () {
    return (dispatch) => {
        dispatch(getNewsPending())
        return (fetch(API_URL))
        .then(res => res.json())
        .then(json => {
            return (dispatch(getNewsFulfilled(json)))
        })
        .catch(err => dispatch(getNewsRejected(err)))
    }
}

function getNewsPending() {
    return {
        type: "GET_NEW_PENDING"
    }
}

function getNewsFulfilled(data) {
    return {
        type: "GET_NEWS_FULFILLED",
        data
    }
}

function getNewsRejected() {
    return {
        type: "GET_NEWS_REJECTED"
    }
}