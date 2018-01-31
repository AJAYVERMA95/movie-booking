import axios from "axios";

export default {
    user: {
        login: credentials =>
            axios.post("/api/auth/login", { credentials }).then(res => {
                return res.data.user;
            }),
        signup: credentials =>
            axios.post("/api/auth/signup", { credentials }).then(res => {
                return res.data.user;
            })
    }
};
