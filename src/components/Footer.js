import "./Footer.css";

function Footer() {
    return(
        <div className="footer">
            <div className="footer-item">
                <div className="link-col">
                    <p className="link-top">Links</p>
                    <p className="link">Link #1</p>
                    <p className="link">Link #2</p>
                    <p className="link">Link #3</p>
                    <p className="link">Link #4</p>
                    <p className="link">Link #5</p>
                </div>
                <div className="link-col">
                    <p className="link-top">Links</p>
                    <p className="link">Link #1</p>
                    <p className="link">Link #2</p>
                    <p className="link">Link #3</p>
                    <p className="link">Link #4</p>
                </div>
            </div>
            <div className="footer-item">
                <div className="social-links">
                    <div className="social-item"></div>
                    <div className="social-item"></div>
                    <div className="social-item"></div>
                </div>
                <div className="social-links">
                    <div className="social-item"></div>
                    <div className="social-item"></div>
                    <div className="social-item"></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;