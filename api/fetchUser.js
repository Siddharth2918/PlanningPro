import axios from 'axios';


const fetchUser = (id, setDayPlans)=>{
    axios.get(`https://planning-pro-backend.vercel.app/users/getUser/${id}`)
    .then((res)=>{
        console.log(res.data.userDayPlans)
        // setDayPlans(res.data.userDayPlans);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default fetchUser;
