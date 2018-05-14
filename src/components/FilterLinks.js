import React from 'react';
import constants from '../constants';

const {ALL, ACTIVE, COMPLETED} = constants;

const Link = ({currentFilter, filterName, onFilterChange, children}) => {
    let linkStyle = {marginLeft:'3px', marginRight:'3px' };
    if( currentFilter === filterName ) {
        linkStyle = {marginLeft:'3px', marginRight:'3px',
                     backgroundColor: '#e6e6e6', borderColor: '#adadad', lineHeight: '1.5' }
    }
    return (
        <a href="#"
           className="btn btn-default btn-sm btn-info"
           onClick={ evt => onFilterChange(evt, filterName) }
           style={linkStyle}>
            <strong>{children}</strong>
        </a>
    );
}

const FilterLinks = (props) => {
    return (
        <div style={{marginTop:'5px', marginBottom: '20px'}}>
            {'Display: '}
            <Link {...props} filterName={ALL} >{ALL}</Link>
            <Link {...props} filterName={ACTIVE} >{ACTIVE}</Link>
            <Link {...props} filterName={COMPLETED} >{COMPLETED}</Link>
        </div>
    );
};

export default FilterLinks;