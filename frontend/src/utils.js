import {toast} from "react-toastify"

export const handelsuccess=(msg)=>{
    toast.success(msg,{
        position:"top-right"
    })
}

export const handelerr=(msg)=>{
    toast.error(msg,{
        position:"top-right"
    })
}