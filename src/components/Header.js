import React from 'react'
import styled from 'styled-components'
import Profilebar from './Profilebar';
import Dropdown from './Dropdown';

function Header() {
    
  return (
    <Container>
        <a href='/'>
            <Logo src='./Image/Tesla.png' alt='' />
        </a>
        <Menu>
            <div>
                <Button><p>รถ</p></Button>
                <Dropdown />
            </div>
            <div>
                <Button><p>พลังงาน</p></Button>
            </div>
            <div>
                <Button><p>การชาร์จ</p></Button>
            </div>
            <div>
                <Button><p>ค้นหา</p></Button>
            </div>
            <div>
                <Button><p>ซื้อสินค้า</p></Button>
            </div>
        </Menu>
        <Profilebar />
    </Container>
  )
}

export default Header;


const Container = styled.header`

    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0px 32px;
    top: 0;
    left: 0;
    right: 0;

`

const Menu = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    p {

        padding: 0 10px;
        flex-wrap: nowrap;

    }

`

const Logo = styled.img`

    max-width: 10rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 16px;
    border-left: 16px solid transparent;

`

const Button = styled.button`

    list-style-type: none;
    padding: 4px 8px;
    background: none;
    border: none;
    color: black;
    font-size: 16px;
    
    &:hover {

        background-color: #F2F2F2;
        border-radius: 4px;

    }

    p {

        color: #000;

    }

`