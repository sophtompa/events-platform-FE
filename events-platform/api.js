import axios from "axios"

const api = axios.create({baseURL: "https://events-platform-be-cxuw.onrender.com/api"})

const getAllEvents = () => {
    let url = `/events`

    return api.get(url).then(({data}) => {
        return data.events
    })
}

const getAllUsers = () => {
    let url = `/users`

    return api.get(url).then(({data}) => {
        return data.users
    })
}

const getEvent = (id) => {
    return api.get(`/events/${id}`).then(({data}) => {
        return data
    })
}

const getUser = (username) => {
    return api.get(`/users/${username}`).then(({data}) => {
        return data
    })
}

const getEventsByUsername = (username) => {
    return api.get(`/events/user/${username}`).then(({data}) => {
        return data
    })
}

const postUser = (username, password) => {
    return api.post(`/users`, { username, password }).then((data) => {
        return data
    })
}

const loginUser = (username, password) => {
    return api.post(`/login`, { username, password })
    .then(({data}) => {
        console.log(data)
        return data
    })
}

const postEvent = (eventData) => {
    return api.post(`/events`, eventData).then(({data}) => {
        console.log(data)
        return data
    })
    .catch((err) => {
        return err;
    })
}

export { getAllEvents, getAllUsers, getEvent, getUser, getEventsByUsername, postUser, loginUser, postEvent }