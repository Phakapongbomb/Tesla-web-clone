import styled from "styled-components";
import Menubar from "./Menubar";
import Profilebar from "./Profilebar";


const Navbar = () => {
    return (
        <div>
            <Nav1>
                <Logo href="/">
                    <LogoT src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"  alt="Tesla Logo"/>
                </Logo>
                <Menubar />
                <Profilebar />
            </Nav1>
        </div>
    );
};
const Nav1 = styled.div`

    display: flex;
    justify-content: space-between;

`

const Logo = styled.a`

    max-width: 7.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 32px;
    border-left: 16px solid transparent;

`;

const LogoT = styled.img`

    max-width: 100%;
    height: auto;

`

export default Navbar;