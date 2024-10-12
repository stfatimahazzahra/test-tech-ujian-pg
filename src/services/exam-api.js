import axios from "axios";

const exam = {}

const URL_API = 'https://pacmann-frontend.pacmann.workers.dev/'

exam.get  = async () => {
    try {
        const response = await axios.get(URL_API)

        return response
    } catch (e) {
        return e.response
    }
}

export default exam