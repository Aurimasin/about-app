import React from 'react';
import _ from 'lodash';

export default ({list, children}) => (
    <ul className='list'>
        {_.map(list, (item, idx) => (
            <li key={idx}>
                <ul className='list-item'>
                    <img className="img" src="../assets/img/education01.png" alt="Education"></img>
                    <li className='title'>{item.institution}</li>
                    <li className='content'>{item.description}</li>
                    <li className='content'>{item.year}</li>
                </ul>
                {children}
            </li>
        ))}
    </ul>
);
