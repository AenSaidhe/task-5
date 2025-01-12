import {useState, useRef} from "react";
import {initialState} from "./utils.js";

const sendFormData = (formData) => {
    console.log(formData);
}

function UsualForm() {
    const [formState, setFormState] = useState(initialState)
    const [error, setError] = useState(null);
    const submitButtonRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const { password, confirmedPassword } = formState;
        if (confirmedPassword && password !== confirmedPassword) {
            e.preventDefault()
            setError('Passwords do not match');
        } else {
            setError(null)
            sendFormData(formState)
            submitButtonRef.current.focus()
        }
    }

    const { email, password, confirmedPassword } = formState

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                value={email}
                type="Email"
                placeholder="Enter your email"
                onChange={(e) => setFormState({
                    ...formState,
                    email: e.target.value,
                })}
                required
            />
            <input
                value={password}
                type="password"
                placeholder="Create your password"
                minLength={6}
                onChange={(e) => setFormState({
                    ...formState,
                    password: e.target.value,
                })}
                required
            />
            <input
                value={confirmedPassword}
                type="password"
                placeholder="Confirm your password"
                minLength={6}
                onChange={(e) => setFormState({
                    ...formState,
                    confirmedPassword: e.target.value,
                })}
                required
            />
            { error && <p>{ error }</p> }
            <input ref={ submitButtonRef } type="submit" value="Sign up" />
        </form>
    )
}

export default UsualForm
