import axios from "axios";

const BASE_URL="http://localhost:8081/api/users/create";
class UserService{
    saveUser(createUser){
        return axios.post(BASE_URL,createUser);

    }
}

export default new UserService();