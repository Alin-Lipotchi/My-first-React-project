import "./Navbar.css";

function Navbar() {
    return(
        <div className="navbar">
            <div className="nav-item">
                <h2 className="logo">Logo Site</h2>
            </div>
            <div className="nav-item">
                <button className="btn">Servicii</button>
                <button className="btn">Produse</button>
                <button className="btn">Despre Noi</button>
                <button className="btn">Contact</button>
            </div>
        </div>
    );
}

export default Navbar;