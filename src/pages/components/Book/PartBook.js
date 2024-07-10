import { Button } from "@mui/base";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { updateMarkToServer } from "../API/BookApi";

export default function PartBook() {

  let navigate = useNavigate();
  // let book = useSelector(state => state.books.currBook);
  let book = useSelector(state => state.books.currBook);
  let user = useSelector(state => state.users.currentUser);
  let parts = book.pages;
  let { partIndex } = useParams();
  partIndex = Number(partIndex);
// alert(partIndex)
  let [txt, setTxt] = useState(null);


  function updateMark(partIndex) {
    let details = {}
    if (partIndex + 1 == parts.length)
      details = {
        idPage: parts[0].idPage,
        idUser: user.Id,
        idBook: book.idbook

      }
    else details = 
    {
      idPage: parts[partIndex + 1].idPage,
      idUser: user.Id,
      idBook: book.idbook

    }
    updateMarkToServer(details).then(res => {
    }).catch(err => {
      console.log(err);
    })
  }
  return <div>
    {/* {
      parts[partIndex] && parts[partIndex].text
    } */}
   
   <div>פרק <p>{parts[partIndex].numPage}</p></div> 
   <p>{parts[partIndex].text}</p> 
   
    <br />
    {partIndex < parts.length - 1 ? <Button onClick={() => {
      user && updateMark(partIndex);
      navigate(`/PartBook/${partIndex + 1}`)
    }} variant="contained">עבור פרק</Button> : <Button onClick={() => {
      user && updateMark(partIndex);
      navigate(`/OneBook`)
    }} variant="contained">סיימתי לקרוא</Button>}

  </div>

}