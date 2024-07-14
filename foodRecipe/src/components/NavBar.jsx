import React from "react";
import styled from "styled-components"
function NavBar() {
  return (
      <nav>
        <Wrapper>
      <div className="logo">
        <h1 style={{marginLeft:'10px'}}>FOOD RECIPE</h1>
      </div>
      <div className="menuItems">
        <span>Dish</span>
        <span>Saved</span>
        <span>User</span>
      </div>
    </Wrapper>
    </nav>
  );
}
const Wrapper = styled.div`
display:flex;
background-color:rgba(227, 60, 34,0.7);
height:80px;
width:100%;
box-shadow:0px 0px #ccc;
flex-direction:row;
justify-content:space-between;
align-items:center;
.menuItems:{
display:flex;
justify-items:space-between;
padding:10px;

}
.menuItems span{
margin-left:10px;
padding:20px;
}

`
export default NavBar;
