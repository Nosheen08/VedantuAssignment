import axios from 'axios';

/*const fetchUser = () =>{
    axios.get("https://api.github.com/users/supreetsingh247")
        .then((response) => console.log(response))
        .catch((error) => console.log("Error occured" + error))

}*/

const fetchUser = {
    type: 'user_details',
    payload:{name: 'Nosheen'}
}

export default fetchUser;