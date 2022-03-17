import Link from "next/link";

const Footer = () => {
    return (
        <div id="Footer">
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">Site by Evgeniy Kukonen, 2022 - 2022</p>
                    <p>Contact: <a href="mailto:evgeniy.kukonen.1337@gmail.com">evgeniy.kukonen.1337@gmail.com</a></p>
                </footer>
            </div>
        </div>
    )
}

export default Footer;