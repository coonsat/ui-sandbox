import React, { useState } from 'react';
import './Sidebar.css';
import { sidebar } from './data';


const Sidebar = () => {
    const [selected, setSelected] = useState(sidebar[0]);
    const [toggle, setToggle] = useState(false);

    console.log(sidebar)

    return (
        <div>
            <ul>
                { sidebar && sidebar.map( (item, index) => {
                    return <li 
                              key={index}
                              className={`navigation-item ${selected.title === item.title ? "selected" : ""}`}
                              onClick={() => setSelected(item)}
                            >
                                <div className="nav-display">
                                    {item.icon} {item.title}
                                    {selected.title === item.title ? item.open : item.closed}
                                </div>

                                <ul className={`sub-nav ${selected.title === item.title ? "open" : "hide"}`}>
                                    {item.subNav && item.subNav.map( (sub, index) => {
                                        return <p>{sub.title}</p>
                                    })}
                                </ul>

                           </li>
                })}
            </ul>
        </div>
    )
}

export default Sidebar
