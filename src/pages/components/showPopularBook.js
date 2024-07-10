import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ShowPopularBook = ( props ) => {
    const [checkPopular, setCheckPopular] = React.useState(props.book.isPopular);    
 
    React.useEffect(()=>{    
},[])
    return (
        <div>
            {checkPopular == 1 ?
                <Card sx={{ maxWidth: 345, flexWrap: 'wrap', margin: '30px', marginTop: '80px', display: 'flex' }}>
                    <CardActionArea>
                        <CardMedia
                            // onClick={nav("/AllBook")}
                            component="img"
                            height="140"
                            image={'/image/image for final project/' + props.book.imagBook}
                            alt="book"
                        />
                          
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                          {props.book.namebook}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                             {new Date(props.book.yearBook).getFullYear()}
                            </Typography>
                    
                            <Typography variant="body2" color="text.secondary">
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                : <></>}
        </div>
    )
}

export default ShowPopularBook;