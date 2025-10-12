import axios from "axios"

const api = axios.create({baseURL: "https://events-platform-be-cxuw.onrender.com/api"})

const getAllEvents = () => {
    let url = `/events`

    return api.get(url).then(({data}) => {
        return data.events
    })
}

export { getAllEvents }