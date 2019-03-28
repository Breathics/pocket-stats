import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #ff9800;
    margin: 6px 0;
    transition: .4s;
    z-index: 1;
`;

export default (props) => {
    const { active, toggle } = props;

    return (
        <div className='hamburger' onClick={toggle}>
            <Bar className={active ? 'top' : ''} />
            <Bar className={active ? 'middle' : ''} />
            <Bar className={active ? 'bottom' : ''} />
        </div>
    )
}
