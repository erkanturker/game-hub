import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "39a8472c3e294ce8be08174629415310"
    }

});