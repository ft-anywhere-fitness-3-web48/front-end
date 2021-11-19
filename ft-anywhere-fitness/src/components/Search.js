import React from 'react';


const Search = (props) => {
    return (
        <form>
            <div>
                <input 
                type='text'
                placeholder='Search Here'
                name='search'
                />
                <button type='submit'>Search</button>
            </div>
        </form>
    )
}

export default Search;