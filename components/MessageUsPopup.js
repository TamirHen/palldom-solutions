import React, {useState} from 'react';
import styles from "../styles/MessageUsPopup.module.scss";
import axios from "axios";

const MessageUsPopup = ({isOpen, setIsOpen}) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [error, setError] = useState();

    const onFormChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!form) return;
        const body = `<h2>Someone sent us a message from the message-us form on the website:</h2>
            <h3>Name: ${form.name}</h3>
            <h3>Email: ${form.email}</h3>
            <h3>Phone Number: ${form.phone}</h3>
            <h3> Message:<br/>${form.message}</h3>
            <br/>
            Thank you,<br/>
            The Palladom Solutions Team`
        try {
            const response = await axios.post('/api/email', {body});
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setError(undefined);
            setIsOpen(false);
        } catch (err) {
            console.error(err);
            setError("There was an error, please try again");
        }
    }

    return (
        <div className={styles.popup} style={{maxWidth: isOpen ? '100%' : '0'}}>
            <form onSubmit={onSubmitHandler} style={{opacity: isOpen ? 1 : 0}}>
                <h1>Send Us a Message</h1>
                <label htmlFor={"name"}>Name</label>
                <input value={form.name} onChange={onFormChangeHandler} required type="text" name={"name"}/>
                <label htmlFor={"email"}>Email</label>
                <input value={form.email} onChange={onFormChangeHandler} required type="email" name={"email"}/>
                <label htmlFor={"phone"}>Phone Number</label>
                <input value={form.phone} onChange={onFormChangeHandler} required type="text" name={"phone"}/>
                <label htmlFor={"message"}>Whats on your mind?</label>
                <textarea value={form.message} onChange={onFormChangeHandler} name={"message"}/>

                <button type="submit">SEND</button>

                {error && <p className={styles.error}>{error}</p>}
            </form>
            <button className={styles.buttonX} onClick={() => setIsOpen(false)}>x</button>
        </div>
    );
};

export default MessageUsPopup;