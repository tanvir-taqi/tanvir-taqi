import React, { useState } from 'react';

const MySingleProject = ({project,handleDeleteMyProject,handleIndexUpdate}) => {
    const {  subtitle ,
        _id,
        live ,
        client ,
        type ,
        source ,
        index ,
        details ,
        technologies ,
        projectPhoto ,
        name } = project
    const [indexValue, setIndexValue] = useState(null)

    return (
        <div>
             <div className='grid grid-cols-1 md:grid-cols-7 gap-6 items-center md:rounded-full w-full md:flex-row bg-primary text-secondary my-4 p-1  '>
                
                <img src={projectPhoto} className='h-20 w-20 border-b-4 border-r-2 border-l-2 border-cyan-700 p-1 rounded-full' alt="" />
                <h1 className='text-center'>{name}</h1>
                <p className='text-center'>{subtitle}</p>
               
                <p>Index: {index}</p>
                <input onChange={(event)=>setIndexValue(event.target.value)} type="number"  />
                    
                <button onClick={()=>handleIndexUpdate(_id,indexValue)} className='btn btn-xs bg-orange-600 '>Update Index</button>
                <button onClick={()=>handleDeleteMyProject(_id)}  className='btn btn-xs bg-red-600 w-8'>X</button>
            </div>
        </div>
    );
};

export default MySingleProject;