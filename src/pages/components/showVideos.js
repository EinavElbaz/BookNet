// import * as React from 'react';
import { useEffect, useState } from "react";
import { getVideosFromServer } from "./API/videosApi";
import { DeleteVideosFromServer } from "./API/videosApi";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { deleteVideos, getAllVideos } from '../components/videosSlice';
const ShowVideos = (props) => {
    let user = useSelector(state => state.users.currentUser);
    let arrvideo = useSelector(state => state.videos.videosList);
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    let dis=useDispatch();
    useEffect(() => {

        getVideosFromServer().then(res => {
            setVideos(res.data);
            dis(getAllVideos(res.data));
        }).catch(err => {
            console.log(err);
        })


    }, [])
    function FuncDelete(id) {
        DeleteVideosFromServer(id).then(res => {
            alert("מחיקה בוצע בהצלחה")
            dis(deleteVideos(id));

        }).catch(err => {
            console.log(err)
            alert("המחיקה נכשל ")
        })
    }

    return (
        <div>
            <h1>הקורסים שלנו</h1>
            {
                arrvideo.length!=0 && arrvideo.map(v =>
                    <div>
                        <h2>{v.Name_Videos}</h2>

                        <video controls="controls" width="500" src={"http://localhost:8000/public/videos/" + v.Videos_Link}>

                        </video>
                        {
                            user && user.user_type_id === 1 &&
                            <Button onClick={()=>{FuncDelete(v.Id_Videos)}} variant="outlined" size="small">
                                delete
                            </Button>
                        }


                    </div>)

            }
            {
                user && user.user_type_id === 1 &&
                <Button onClick={() => { navigate("/FormVideos") }}>
                    add video
                </Button>}
        </div>
    )
}
export default ShowVideos;