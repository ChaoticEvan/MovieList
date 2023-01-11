import { Button } from "reactstrap";
import { BsTwitter, BsGithub } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

export default function Footer() {
    return (
        <footer className="footer">
            <center>
                <Button href="https://twitter.com/EvanVoordeckers" className="footer-button"><BsTwitter /></Button>
                <Button href="https://github.com/ChaoticEvan" className="footer-button"><BsGithub /></Button>
                <Button href="mailto:evan.voordeckers@gmail.com" className="footer-button"><MdEmail /></Button>
            </center>
        </footer>
    );
}