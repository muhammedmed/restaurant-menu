import React from 'react';

function Menu({items}) {  
  return (
     <div className="section-center">
         {items.map((menuItem)=>{
             const {id,title,img,desc,price,category} = menuItem;
             
             return(
                <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo"/>
                <div className="item-info">
                    <header>
                        <h4>{title}</h4>
                        <h4 className="price">${Math.floor(price*3)}</h4>
                         <p className="category-item"><i class="fas fa-tag"></i>{category} </p>
                    </header>
                    <p className="item-text">{desc} <span className="view">view more</span></p>
                </div>
            </article>
             );
         })}
         
     </div>
    )
}

export default Menu;
