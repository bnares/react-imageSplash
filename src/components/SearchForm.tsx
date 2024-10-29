import React, { useState } from 'react'
import { useGlobalContext } from '../context/UserContext';

const SearchForm = () => {
    
    const {searchValue, setSearchValue} = useGlobalContext();
    const Submit = (e:any)=>{
        e.preventDefault();
        const inputValue = e.target.elements.search.value; //search.value jest poniewac input ma name = search a value na koncu bo chemy wartosc
        if(!inputValue) return;
        setSearchValue(inputValue);
        console.log(searchValue);
        
    }

    const changeValue = (e)=>{
        //setCat(e.target.value);
        setSearchValue(e.target.value);
    }
  return (
    <section>
        <h1 className='title'>Unspash Images</h1>
      <form onSubmit={Submit} className='search-form'>
        <input type='text' name='search' placeholder='Cat' className='form-input search-input' />
        <button type='submit' className='btn'>Send</button>
      </form>
    </section>
  )
}

export default SearchForm
