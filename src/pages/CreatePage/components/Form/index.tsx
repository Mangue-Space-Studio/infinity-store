import { useForm } from "react-hook-form"

type formData = {
    assistaint: string,
    typeHistory: string,
    typeChar: string,
    typeMission: string,
    age: number
}



export default function Form(){
    const {
        register,
        setValue,
        handleSubmit,
        formstate: { errors },
    } = useForm<FormData>()
    return (
        <form
    )
}