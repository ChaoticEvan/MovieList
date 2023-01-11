import { Button } from "reactstrap";
import { BsTwitter, BsGithub } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

export default function Footer() {
    return (
        <footer className="footer">
            <center>
                <Button className="footer-button"><BsTwitter /></Button>
                <Button className="footer-button"><BsGithub /></Button>
                <Button className="footer-button"><MdEmail /></Button>
            </center>
        </footer>
    );
}