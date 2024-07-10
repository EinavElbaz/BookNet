import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getFavoriteBookToServer } from "./API/favoriteBook";
import ShowFavorieBooks from "../components/showFevoriteBooks";
import { Flag } from "@mui/icons-material";
export default function FavoriteBooks() {

    let user = useSelector(state => state.users.currentUser);
    let [books, setBooks] = useState([]);
    useEffect(() => {
        let arr = [];
        getFavoriteBookToServer(user.Id)
            .then((res) => {
                let flag = false;
                let object = {};

                for (let i = 0; i < res.data.length; i++) {
                    for (let j = 0; j < arr.length; j++) {
                        if (res.data[i].idBook === arr[j].idBook) {
                            flag = true;
                        }
                    }

                    if (!flag)
                        arr.push(res.data[i])
                    flag = false;
                }

                setBooks(arr);
            })
            .catch((err) => {

            })
    }, [])


    return <div>
        {

            books && books.map(b => <div key={b.idfavoritebook}>
                <ShowFavorieBooks book={b.book} />
            </div>)
        }
    </div>
}