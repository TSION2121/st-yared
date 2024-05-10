import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const paperStyle = {
    root: {
        minWidth: 275,
        margin: '20px',
    },
    title: {
        fontSize: 14,
    },
};

export default function ResearchPaper({ title, summary }) {
    return (
        <>
        <Card style={paperStyle.root}>
            <CardContent>
                <Typography style={paperStyle.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    {summary}
                </Typography>
            </CardContent>
        </Card>
            <Card style={paperStyle.root}>
                <CardContent>
                    <Typography style={paperStyle.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {summary}
                    </Typography>
                </CardContent>
            </Card>
</>
    );
}
