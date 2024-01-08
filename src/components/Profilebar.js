import styled from "styled-components";
import ListMenuData from "./ListMenuData";



const Profilebar = () => {

    const Datafilter = ListMenuData.filter(L=>{
        return L.imgUrl&&L.ListMenu;
    })
    

    const menuElements = Datafilter.map(( listItem, index ) => {
        return <List key={ index }><A href="/"><ImageMenu src={ listItem.imgUrl } alt={ listItem.ListMenu } /></A></List>;
    });

    return (
        <Menubarlist>
            { menuElements }
        </Menubarlist>
    );
};
const A = styled.a`

    height: 20px;
    width: 20px;

`


const Menubarlist = styled.div`

    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;

`;


const List = styled.li`

    height: 40px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;

    &:hover {
        background-color: #B6B3B7;
    }

    &:last-child {
    margin-right: 16px;

    }
`;

const ImageMenu = styled.img`

    max-width: 100%;
    height: 20px;
    
`;



export default Profilebar;