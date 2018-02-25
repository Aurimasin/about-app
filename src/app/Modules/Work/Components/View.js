import React from 'react';
import _ from 'lodash';

export default ({list, children}) => (
    <ul className='list'>
        {_.map(list, (item, idx) => (
            <li key={idx}>
                <ul className='list-item row'>
                    <div className="col-md-2">
                        {item.year}
                    </div>
                    <div className=" col-md-8">
                        <li className='title'>{item.user}</li>
                        <li className='company'>{item.company}</li>
                        <li className='content'>{item.description}</li>
                    </div>
                </ul>
                {children}
            </li>
        ))};
    </ul>
);