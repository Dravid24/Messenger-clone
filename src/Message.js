import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react';
import "./message.css";

const Message = forwardRef( ({message,username},ref) => {
    const isuser = username === message.username;
    return (
        <div className={isuser ? "message_user" : "message"}>
            <Card className={isuser ? "message_usercard" : "message_other"}>
                <CardContent>
                    <Typography  >
                   <strong className="users"> {!isuser ? (message.username) : "" } </strong>
                        &nbsp; {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default Message
