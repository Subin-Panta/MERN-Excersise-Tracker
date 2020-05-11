import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import { exContext } from '../context'

export default function ExerciseList() {
    const{exercises,
        ondelete}=useContext(exContext)
    
    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {exercises.map(ex=>{
                       return (
                       <tr key={ex._id}>
                        <td>{ex.username}</td>
                        <td>{ex.description}</td>
                        <td>{ex.duration}</td>
                        <td>{ex.date.substring(0,10)}</td>
                        <td><Link to={"/edit/"+ex._id}>edit</Link> | <button className="btn btn-link" onClick={()=>{ondelete(ex._id)}}>Delete</button></td>
                       </tr>
                       ) 
                    })}
                </tbody>
            </table>
        </div>
    )
}
