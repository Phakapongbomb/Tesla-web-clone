import React from 'react'
import styled from 'styled-components'

function CardCar({ ImgUrl, Alt, More1, More2}) {
    
  return (
        <Card>
            <ImgCar>
                <a href='/'>
                    <img src={ ImgUrl } alt={ Alt }/>
                </a>
            </ImgCar>
            <Content>
                <h3>{ Alt }</h3>
                <Contentmore>
                    <a href="/">{ More1 }</a>
                    <a href="/">{ More2 }</a>
                </Contentmore>
            </Content>
        </Card>
  );
};

const Card = styled.div`

    overflow: hidden;

`

const ImgCar = styled.div`
    
    a {
        display: ;
        width: 100%;
        height: 120px;
    }

    img {
        width: 100%;
        height: 120px;
    }

`
const Content = styled.div`

    

`
const Contentmore = styled.div`

    

`

export default CardCar;