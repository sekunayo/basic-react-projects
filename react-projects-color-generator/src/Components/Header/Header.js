import React from 'react';
import '../Header/header.css';

function Header(props){
    return(
    <header>
        <h3>color generator</h3>
        <form action="" onSubmit={props.submit}>
            <input type="text" placeholder="#f15025" value={props.value} onChange={props.change}></input>
            <button type="submit">Submit</button>
        </form>
    </header>
    )
}

export default Header;