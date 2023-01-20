import { Button } from "reactstrap";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

export default function Footer() {
    return (
        <footer className="footer">
            <center>
                <Button target="_blank" href="https://www.linkedin.com/in/evan-voordeckers-softwaredev/" className="footer-button"><BsLinkedin /></Button>
                <Button target="_blank" href="https://twitter.com/EvanVoordeckers" className="footer-button"><BsTwitter /></Button>
                <Button target="_blank" href="https://github.com/ChaoticEvan" className="footer-button"><BsGithub /></Button>
                <Button href="mailto:evan.voordeckers@gmail.com" className="footer-button"><MdEmail /></Button>
            </center>
        </footer>
    );
}