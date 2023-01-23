import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomeInfo = ({ element }) => {
    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate(`/songs/${element.id}`)

    }
    return (
            <Card onClick={handleClick} sx={{ width:412, maxWidth:'90%',m: 3 , flexDirection:'row'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image={element.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" >
                            {element.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {element.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

    )
}

export default HomeInfo
