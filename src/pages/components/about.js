import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../components/navBar.css";
import "./about.css"
const About = () => {
    const theme = useTheme();
    return (       
        <div id='about'>
            <Card sx={{ display: 'flex' }} id='right'>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={"/image/compbook.jpeg"}
                    alt="pic of cumputer and book"
                />
                <Box sx={{ display: 'flex', }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            בכל מקום ובכל זמן
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            עם בוקנט תוכלו לקרוא בכל זמן ובכל שעה שתירצו
                        </Typography>
                    </CardContent>
                </Box>
            </Card><br/>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            שיפור הכתיבה
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            באתר שלנו יש אפשרות לקורס כתיבה יוצרת אשר מאפשר לכותבים הצעירים לשפר את יכולת הכתיבה
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/image/write.jpeg"
                    alt="pic of cumputer and book"
                />
            </Card><br/>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/image/man.jpeg"
                    alt="pic of cumputer and book"
                />
                <Box sx={{ display: 'flex', }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            כתיבה חופשית
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            לסופר הצעיר הצעיר יש את האפשרות לעלות את מחשבותיו על הכתב כך שגולשים אחרים יוכלו להינות מפרי דמיונם של הכותבים
                        </Typography>
                    </CardContent>
                </Box>

            </Card><br/>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                             דירוג הספר  
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            שאר הגולשים שבאתר יכולים לקרוא את הנכתב ולדרגו בהתאם לחווית הקריאה שלהם 
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/image/level.jpeg"
                    alt="pic of cumputer and book"
                />
            </Card><br/>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/image/money.jpeg"
                    alt="pic of cumputer and book"
                />
                <Box sx={{ display: 'flex', }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            ללא תשלום
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            בבוקנט תוכל להינות מקריאה ללא תשלום או עלות כלשהיא על מנת לשפר את הקריאה 
                        </Typography>
                    </CardContent>
                </Box>

            </Card><br/>
        </div>
    );
}

export default About;

