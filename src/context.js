import React, { createContext , useState , useEffect} from 'react'
import axios from 'axios';
export const exContext = createContext()
const ExProvider =(props)=> {
    const[username,setUsername]=useState("supp")
    const[users,setUsers]=useState(["supp"])
    const[description,setDescription]=useState("")
    const[duration,setDuration]=useState(0)
    const[date,setDate]=useState(new Date())
    const[exercises,setExercises]=useState([])

   
    const onChangeusername= (e)=>{
        setUsername(e.target.value)
    }
    const onChangedescription= (e)=>{
        setDescription(e.target.value)
    }
    const onChangeduration= (e)=>{
        setDuration(e.target.value)
    }
    const onChangedate= (date)=>{
        setDate(date)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        const exercise = {
           username,
           description,
           duration,
           date
        }
        console.log(exercise);
        window.location = '/';
        axios.post("http://localhost:5000/exercises/add",exercise)
        .then(res => console.log(res.data))
    }
    const onSubmitUsername=(e)=>{
        e.preventDefault();
        const user = {
           username,
        }
        console.log(user);
        axios.post("http://localhost:5000/users/add",user)
            .then(res => console.log(res.data))
        // window.location = '/';
        setUsername('')
    }
    const onEdit=(id)=>{
        axios.get('http://localhost:5000/exercises/'+id)
            .then (response=>{
                setUsername(response.data.username)
                setDescription(response.data.description)
                setDuration(response.data.duration)
                setDate(new Date(response.data.date))

    })
}


    useEffect(()=>{
        axios.get('http://localhost:5000/users/')
            .then(response=>{
                if(response.data.length>0){
                    setUsers(response.data.map(user => user.username))
                    setUsername(response.data[0].username)
                }
            })
        axios.get('http://localhost:5000/exercises/')
            .then(response=>{
                if(response.data.length>0){
                    setExercises(response.data)
                }
            })
            .catch((error)=>{console.log(error)})
    
    },[])
    const ondelete=(id)=>{
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res=> console.log(res.data))
        setExercises(exercises.filter(el=>el._id !== id))
    }
    return (
            <exContext.Provider value={{
                username,
                users,
                description,
                duration,
                date,
                exercises,
                onChangeusername,
                onChangedescription,
                onChangeduration,
                onChangedate,
                onSubmit,
                onSubmitUsername,
                ondelete,
                onEdit,
                }}>
                {props.children}
            </exContext.Provider>
    )
}

export default ExProvider
