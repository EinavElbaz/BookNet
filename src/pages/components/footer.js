import { Link } from "react-router-dom";
import "../components/footer.css"
const Footer = () => {
    return (
        <div >
            <footer id="footer">
                <div>
                    <p>
                        אתר בוקנט כאן לשירותכם ותעשה הכל על מנת לתת לכם חווית קריאה מהנה
                        לשם שיפור השירות- בכל מקרה של בעיה או תקלה יש ליצור קשר עם בעל האתר
                        לקבלת עזרה בנושא יש להשאיר פניה <Link to="form">באתר</Link>
                    </p><
                        div id="rights">כל הזכויות שמורות לעינב ויסכה</div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;