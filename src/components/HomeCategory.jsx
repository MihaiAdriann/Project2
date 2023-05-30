 import React from 'react'
 import { Link } from 'react-router-dom';
 
 function HomeCategory(props) {
    const{image,title,description,routeName}=props;
   return (
     <div className='col-6 mb-4'>
        <Link to={`/category/${routeName}`}>
          <img 
              className='w-50'
              src={image}
              alt=''
          />
          <h1>{title}</h1>
          <p>{description}</p>
        </Link>
    
     </div>
   )
 }
 
 export default HomeCategory
 