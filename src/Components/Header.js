import React from "react";

const Header = () => {
    return(
        <>
            <div className="container py-2 py-md-4">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="company-logo" width="40" height="32" />
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <small><li><a href="#sectionOne" className="nav-link px-2 link-dark"> SEC 1 </a></li></small>
                        <small><li><a href="#sectionTwo" className="nav-link px-2 link-dark"> SEC 2 </a></li></small>
                        <small><li><a href="#sectionThree" className="nav-link px-2 link-dark"> SEC 3 </a></li></small>
                        <small><li><a href="#about" className="nav-link px-2 link-dark"> ABOUT </a></li></small>
                        <small><li><a href="#contact" className="nav-link px-2 link-dark"> CONTACT </a></li></small>
                    </ul>
                </header>

            </div>
        </>
    )
}

export default Header;
