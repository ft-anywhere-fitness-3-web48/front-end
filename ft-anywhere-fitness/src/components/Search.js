import React from 'react';


const Search = (props) => {
    return (
        <form>
                <input 
                type='text'
                placeholder='Search for a Class'
                name='search'
                />
                <button type='submit'>Search</button>
        </form>
    )
}

export default Search;