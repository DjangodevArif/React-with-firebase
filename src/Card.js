import React, { useEffect, useState } from 'react';
import { Badge, Card, CardContent, Chip, Paper, Typography } from '@material-ui/core';
import "./static/card.css";
import db from './firebase';
import { useStateValue } from './static/StateProvider';

const OurCard = () => {

    const [data, setData] = useState([]);

    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const close = db.collection('Server').orderBy("added", "asc").onSnapshot(snapshot => (
            // console.log('data', snapshot.docs.data()),
            setData(snapshot.docs.map(item => ({
                id: item.id,
                datum: item.data()

            })))
        ))
        return () => {
            close();
        }
    }, []);
    return (
        <>
            <div className="card__container">
                <div className="card">
                    {data?.map(item =>

                    (
                        <div className="card__item">
                            <Card variant="outlined" key={item.id}>
                                <CardContent>
                                    <Typography color="textPrimary" gutterBottom>
                                        {item.datum.name}
                                        <Chip label={new Date(item.datum?.added?.toDate()).toUTCString()} />
                                    </Typography>
                                    {
                                        user?.email === item.datum.email ?
                                            <Badge color="primary" component="div" variant="dot">
                                                <Typography variant="h5" component="p">
                                                    {item.datum.email}
                                                </Typography>

                                            </Badge>
                                            :
                                            <Typography variant="h5" component="p">
                                                {item.datum.email}
                                            </Typography>
                                    }
                                    <Typography variant="h5" component="div">
                                        {item.datum.message}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default OurCard;