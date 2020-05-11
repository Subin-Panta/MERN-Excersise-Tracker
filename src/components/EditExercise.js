import React,{useContext,useEffect} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { exContext } from '../context'
import axios from 'axios'
export default function EditExercise(props) {
    const{username,
      users,
      description,
      duration,
      date,
      onChangeusername,
      onChangedescription,
      onChangeduration,
      onChangedate,
      onSubmit,
    onEdit}=useContext(exContext)
      useEffect(()=>{
          onEdit(props.match.params.id)
      },[])
      const onSubmitEdit=(e)=>{
        e.preventDefault();
        const exercise = {
           username,
           description,
           duration,
           date
        }
        console.log(exercise);
        window.location = '/';
        axios.post("http://localhost:5000/exercises/update/"+props.match.params.id,exercise)
        .then(res => console.log(res.data))
    }
    return (
      
        <div>
            <div>
      <h3>Edit Exercise </h3>
      <form onSubmit={onSubmitEdit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select 
              required
              className="form-control"
              value={username}
              onChange={onChangeusername}>
              {
                users.map(user=> {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={description}
              onChange={onChangedescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={duration}
              onChange={onChangeduration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
              <DatePicker selected={date}
              onChange={onChangedate} />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
        </div>
    )
}
