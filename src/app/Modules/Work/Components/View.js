import React from 'react';
import _ from 'lodash';
import img from "../../../../assets/img/work.png";


export default ({ list, children }) => (
    <ul className='list'>
        {_.map(list, (item, idx) => (
            <li key={idx}>
                <ul className='list-item'>
                    <img className="img" src={img} alt="Work"></img>
                    <li className='title'>{item.user}</li>
                    <li className='content'>{item.company}</li>
                    <li className='content'>{item.description}</li>
                    <li className='content'>{item.year}</li>
                </ul>
                {children}
            </li>
        ))}
    </ul>
);