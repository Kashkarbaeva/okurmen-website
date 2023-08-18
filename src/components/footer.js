import Container from "react-bootstrap/Container";
import React, {useState, useEffect} from "react";

function AppFooter () {
    const [showTopBtn, setShowTopBtn] = useState (false);

    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if(window.scrollY > 400){
                setShowTopBtn(true)
            }else{
                setShowTopBtn(false)
            }
        })
    }, [])

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return  (
        <Container fluid>
          <div className="copyright">&copy; 2023 Okurmen. All Right Reserved.</div>
          <div className="socials">
            <ul>
                <li>
                    <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dru">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://ru.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
            </ul>
          </div>
          {showTopBtn && <div className="go-top" onClick={goTop}></div>}
        </Container>
    );
}

export default AppFooter;