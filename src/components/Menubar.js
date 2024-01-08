import React from "react";
import styled from "styled-components";
import ListMenuData from "./ListMenuData";

const Menubar = () => {

    const Datafilter = ListMenuData.filter(L=>{
        return !L.ListMenu || !L.imgUrl;
    });
    
    
    const menuElements = Datafilter.map((listItem, index) => {
        return <List key={index}>{ listItem.ListMenu }</List>;
    });

    return (
        <ListMenubar>
            { menuElements }
        </ListMenubar>
    );
};

const List = styled.button`

    list-style-type: none;
    padding: 4px 8px;
    background: none;
    border: none;
    
    &:hover {
        background-color: #F2F2F2;
        border-radius: 4px;
    }
`;

const ListMenubar = styled.ul`

    display: flex;
    justify-content: space-between;
    padding: 0px;
    
`;


export default Menubar;
