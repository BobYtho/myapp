
import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Card({title, description, image })  {
        return(
            <CardMUI sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {title}
                 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardMUI>
        
    );
  }
  export default Card;