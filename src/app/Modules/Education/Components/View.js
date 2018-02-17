import React from 'react';
import _ from 'lodash';

export default ({ list, children}) => (
    <ul className='container'>
        {_.map(list, (item, idx) => (
            <li key={idx}>
                <ul className='container'>
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