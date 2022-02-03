import React,{useState} from 'react'
import './index.css'
import Category from './Category'
import Menu from './Menu'
import items from './data'
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from './Theme'

const allCategories = ['all', ...new Set(items.map((item)=>item.category))]

const StyledApp = styled.div`
color: ${props => props.theme.fontColor}
`;

function App() {
  const [theme, setTheme] = useState("light");
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);


  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const filterItems = (category) =>{
    if (category === "all"){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category);
    setMenuItems(newItems);
  }
   
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
    <main>
      
      <section className="menu section">
       
     <div className="title">
          <h2>Restaurant Menu</h2>
          <div className="underline"></div>
          
        <div className="changeTheme">                                                                 
	        <input type="checkbox" class="checkbox" id="chk"  onClick={()=> themeToggler()}/>  
	         <label class="label" for="chk">
	          <i class="fas fa-moon"></i>
	          <i class="fas fa-sun"></i>
		        <div class="ball"></div>
	          </label>
        </div>

     </div>

        <Category categories={categories} filterItems={filterItems}  />
        <Menu items={menuItems}/>

      </section>
    </main>

    </StyledApp>
    </ThemeProvider>
    
  );
}

export default App;
