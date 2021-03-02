import { useState } from 'react'

const UseForm = (callback, validate) => {
    const [values, setvalues] = useState({
        email: ''
    })

    const [error, seterror] = useState({})

    const handleChange = e => {
        const { name, value } = e.target;
        setvalues({
            ...values,
            [name]: value
        })
    }

    return { handleChange, values, error};
}

export default UseForm
