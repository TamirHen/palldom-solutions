import React, {useState} from 'react';
import styles from "../styles/MessageUsPopup.module.scss";

const MessageUsPopup = ({isOpen, setIsOpen}) => {
    const [form, setForm] = useState({});

    const onFormChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = () => {


        setForm(undefined);
    }

    return (
        <div className={styles.popup} style={{maxWidth: isOpen ? '100%' : '0'}}>
            <form onSubmit={onSubmitHandler} onChange={onFormChangeHandler} style={{opacity: isOpen ? 1 : 0}}>
                <h1>Send Us a Message</h1>
                <label htmlFor={"name"}>Name</label>
                <input required type="text" name={"name"}/>
                <label htmlFor={"email"}>Email</label>
                <input required type="email" name={"email"}/>
                <label htmlFor={"phone"}>Phone Number</label>
                <input required type="text" name={"phone"}/>
                <label htmlFor={"message"}>Whats on your mind?</label>
                <textarea name={"message"}/>

                <button type="submit">SEND</button>
            </form>
            <button className={styles.buttonX} onClick={() => setIsOpen(false)}>x</button>
        </div>
    );
};

export default MessageUsPopup;