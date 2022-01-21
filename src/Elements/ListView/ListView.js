import React from 'react'
import './ListView.css';
import '../Button/Button.css'
import { AiOutlineSearch } from 'react-icons/ai';

const ListView = ({ data }) => {

    return (
        <div className="content">
            <div className="content-manager-container">
                
                <div className="content-manager-header">
                    <div className="button-bar">
                        <button className="btn success">Add</button>
                        <button className="btn warning">Edit</button>
                        <button className="btn error">Delete</button>
                    </div>
                    <div className="search">
                        <span><AiOutlineSearch /></span>
                        
                        <input id="search" placeholder="Search..." />
                    </div>
                </div>
                
                <div className="content-manager-content">
                    <div className="table-header">
                        {data && Object.keys(data[0]).map(key => {
                            return <div className="header-item">{key}</div>
                        })}
                    </div>
                    <ul>
                        {data.map( (item, index) => {
                            return ( 
                                <li className="row"
                                    key={index}>{item.name} {item.email} {item.country} {item.postcode} {item.phone}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="content-manager-footer">
                This is the footer
                </div>

            </div>
        </div>
    )
}

export default ListView;
