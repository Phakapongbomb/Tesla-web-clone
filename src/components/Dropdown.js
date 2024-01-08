import React from "react";
import styled from "styled-components";
import CardCar from "./Card/CardCar";

const Dropdown = () => {
    return (
        <Container>
            <InContainer>
                <GroupCar>
                    <CardCar 
                        ImgUrl="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-RHD.png"
                        Alt="Model 3"
                        More1="เรียนรู้"
                        More2="สั่งซื้อ"
                    />
                    <CardCar 
                        ImgUrl="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"
                        Alt="Model Y"
                        More1="เรียนรู้"
                        More2="สั่งซื้อ"
                    />
                    <CardCar 
                        ImgUrl="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png"
                        Alt="Cybertruck"
                        More1="เรียนรู้"
                        More2=""
                    />
                </GroupCar>
                <Line></Line>
                <List>
                    <ul>
                        <li><a href="/">สินค้าคงคลัง</a></li>
                        <li><a href="/">มือสองที่ผ่านการรับรอง</a></li>
                        <li><a href="/">ทดลองขับ</a></li>
                        <li><a href="/">Model S</a></li>
                        <li><a href="/">Model X</a></li>
                        <li><a href="/">Roadster</a></li>
                    </ul>
                </List>
            </InContainer>
        </Container>
    );
};

const Container = styled.div`

    display: none;
    position: absolute;
    background: #fff;
    width: 100%;
    index: 10;

`
const InContainer = styled.div`

    display: flex;
    flex-direction: row;

`
const Contentmore = styled.div`

`
const GroupCar = styled.div`

    display: flex;
    flex-direction: row;

`
const ImgCar = styled.div`

`
const Content = styled.div`

`
const Line = styled.div`

`
const List = styled.div`

`

export default Dropdown;