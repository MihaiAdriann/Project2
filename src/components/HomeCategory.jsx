 import React from 'react'
 
 function HomeCategory(props) {
    const{image,title,description}=props;
   return (
     <div className='col-6 mb-4'>
        <img 
            className='w-50'
            src={image}
            alt=''
        />
        <h1>{title}</h1>
        <p>{description}</p>
    
     </div>
   )
 }
 
 export default HomeCategory
 