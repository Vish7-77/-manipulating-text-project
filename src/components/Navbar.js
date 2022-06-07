import React from 'react';
import './style.css'
function Navbar(props) {





    return (
        <div><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{borderBottom:'1px solid ' ,marginTop:'0px', borderColor:`${props.mode==='light'?'black':'#b8adad'}`}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{ fontFamily: '-moz-initial', fontSize: '22px' }}>ManuP-Text</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" style={{ fontFamily: '-moz-initial', fontSize: '17px' }} href="/">About</a>
                    </li>
                </ul>
            </div>
            <div class={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{ marginRight: '22px',minWidth:'max-content'}} >
                <input class="form-check-input" onClick={props.HandleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">{props.mode === "dark" ? "disable dark mode" : "enable dark mode"}</label>
            </div>
        </nav>
        
        
        </div>
    )
}

export default Navbar;