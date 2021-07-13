import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import firebase from 'firebase';
import db from './firebase';
import './static/form.css'
import { useStateValue } from './static/StateProvider';
const Form = () => {
    const [data, setData] = useState("");

    const [{ user }, dispatch] = useStateValue();

    const submitData = (e) => {
        e.preventDefault();
        console.log('user', user)
        db.collection("Server").add({
            name: user.displayName,
            email: user.email,
            message: data,
            added: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setData("")

    }

    return (
        <>
            {console.log('render')}
            <form noValidate autoComplete="off">
                <TextField fullWidth value={data} onChange={e => setData(e.target.value)} id="outlined-basic" label="Message" variant="outlined" />
                <button className="sub_button" type="submit" onClick={submitData}>Submit</button>
            </form>
        </>
    );
}

export default Form;