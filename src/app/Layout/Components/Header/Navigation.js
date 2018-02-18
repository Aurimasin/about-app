import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import _ from 'lodash';


const menu = {
    items: [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Education',
            path: '/education'
        },
        {
            label: 'Work',
            path: '/work'
        },
    ]
};


const Level = ({path, items}) => (
    <div>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean">
            <div className="container"><p className="navbar-brand">AURIMAS IN</p>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span
                    className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse navigation"
                     id="navcol-1">
                    <ul className="nav navbar-nav ml-auto">
                        {_.map(items, (item, idx) => (
                            <li key={idx} className="nav-item" role="presentation">
                                <Link to={item.path}
                                      className={`nav-link ${(item.path === path) ? 'active' : ''}`}>{item.label}</Link>
                                {!!item.items && <Level path={path} items={item.items}/>}
                            </li>
                        ))}
                        <li className="nav-item" role="presentation">
                            <Link to={'/contacts'} className="nav-link">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

const Navigation = (props ) => (
    <div>
        <Level path={props.location.pathname} items={menu.items}/>
    </div>
);

export default withRouter(Navigation);
