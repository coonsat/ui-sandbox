import React from 'react'
import './ListView.css';
import { formattedList } from '../../Data/listview';

const ListView = () => {
    return (
        <div className="content">
            This is for the list view
            <ul>
                {formattedList.map( (item, index) => {
                    return ( 
                        <li key={index}>{item.name} {item.email}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListView;
