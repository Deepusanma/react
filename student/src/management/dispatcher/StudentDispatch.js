import { Dispatch } from "react"
import { useDispatch, useSelector } from "react-redux";


import { AddStudentAction, DeleteStudentAction } from "../action/StudentAction";
export const Dispatcher=()=>{
    const dis=useDispatch();
    const state=useSelector((state)=>state)
    return(
        <>
        <h1>Student Result Management System</h1>
        <button onClick={()=>{dis(AddStudentAction())}}>view percentage</button>
        <button onClick={()=>{dis(DeleteStudentAction())}}>view cut-off</button>
        <p>xth standard: {state.xth}</p>
        <p>xiith standard: {state.xiith}</p>
        </>
        
    )
}