import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ShowUser({ user }) {
    let book = useSelector(state => state.books.currBook);
    const users = useSelector(item => item.users.usersList);
    // onst [year, setYears] = React.useState(false);
    return (
        <div id='cardUser'>

            {/* <select onChange={(e) => {  }}>
                <option value="">סנן לפי סוג משתמש</option>
            </select> */}


            <Card sx={{ maxWidth: 345, }}>
                <CardActionArea sx={{ display: 'flex', alignContent: 'stretch', flexWrap: 'wrap' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={'/image/image for final project/' + book.imagBook}
                        alt="book"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {user.userName}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {user.typeUser}
                            {/* שאילתת משתמש אם טייפ =1 יירשם מנהל */}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.email}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

        </div>
    )
}