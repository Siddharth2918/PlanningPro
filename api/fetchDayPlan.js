import axios from 'axios';

const fetchPlan = (id, setTasks)=>{
    axios.get(`https://planning-pro-backend.vercel.app/dayPlans/getDayPlan/${id}`)
    .then((res)=>{
        // console.log(res.data.tasksForTheDay);
        setTasks(res.data.tasksForTheDay);
    })
    .catch((err)=>{
        console.log(err);
    })
}


export default fetchPlan;
