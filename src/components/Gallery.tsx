import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useFetchImages } from './reactQueryCustomHooks'
import { useGlobalContext } from '../context/UserContext'
const Gallery = () => {
    const {searchValue} =useGlobalContext();

    const  {data,isLoading, isPending, error, isError} = useFetchImages(searchValue);
    

    if(isPending){
        return(
            <section className='image-container'>
                <h4>Loading...</h4>
                
            </section>
        )
    }

    if(isError){
        return(
            <section className='image-container'>
                <h4>There was error...</h4>
            </section>
        )
    }

    if(data.results.length<0){
        return(
            <section className='image-container'>
                <h4>No resukts found...</h4>
            </section>
        )
    }

  return (
    <section className='image-container'>
    
      {data.results.map((photo:any,idx:number)=>{
        return <img key={photo?.id} src={photo?.urls?.small} />
      })}
    </section>
  )
}

export default Gallery
