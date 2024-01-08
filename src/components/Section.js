import React, { useContext, useEffect } from "react";
import styled from "styled-components";

const Section = ({ title, description, descriptionline, leftBtnText, rightBtnText, backgroundImg, backgroundVideo, overlay }) => {

    return ( 

        <Page bgImage={ backgroundImg } ovlay={ overlay }>

                <ItemText >
                    <h1>{ title }</h1>
                    <p>{ description }<U>{ descriptionline }</U></p>
                </ItemText>

            <ButtonGroup>
            {

                ( () => {
                    if ( leftBtnText && !rightBtnText ) {
                        return (

                            <LeftButton ovlay={ overlay }>
                                { leftBtnText }
                            </LeftButton>

                        );
                    } else if ( leftBtnText && rightBtnText ) {
                        return (

                            <LeftButton ovlay={ overlay }>
                                { leftBtnText }
                            </LeftButton>

                        );
                    }
                    return null;
                })()

            }
                { rightBtnText &&

                    <RightButton ovlay={ overlay }>
                        { rightBtnText }
                    </RightButton>

                }
            </ButtonGroup>

            { backgroundVideo &&

                <BgVideo>
                    <Video src={ backgroundVideo } autoPlay muted loop/>
                </BgVideo>
                
            }

        </Page>

    );

};

export default Section;

const BgVideo = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;

`

const Video = styled.video`

    width: 100%;
    height: 100vh;
    object-fit: cover;

`

const Page = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${props => `url("${props.bgImage}")`};
    box-shadow: ${props => (props.ovlay ? 'inset 0px 200px 50px 0px rgba(0, 0, 0, 0.1)' : 'none')};

    h1 {
        color: ${props => (props.ovlay ? '#fff' : '#000')};
    }

    p {
        color: ${props => (props.ovlay ? '#fff' : '#000')};
    }


`

const U = styled.a`

    border-bottom: 1px solid black; 
    transition: border-bottom 0.3s ease; 
    cursor:pointer;

    &:hover {
        border-bottom: 2.5px solid black;
    }

`

const ItemText = styled.div`

    
    padding-top: 15vh;
    text-align: center;

    p {

        font-size: 14px;

    }

    h1 {

        font-size: 36px;
        
    }
`

const ButtonGroup = styled.div`

    display: flex;
    margin-bottom: 84px;
    justify-content: center;
    gap: 24px;

`

const LeftButton = styled.div`

    background-color: ${props => (props.ovlay ? '' : 'rgba(23, 26, 32, 0.8)')};
    height: 40px;
    width: 264px;
    padding: 4px 24px;
    border: ${props => (props.ovlay ? '3px solid #fff' : '3px solid transparent;')};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`

    background: #D2D2D7;
    color: rgba(23, 26, 32, 0.8);

`