import React, { Component } from 'react';
// import FlexContainer from '../../components/FlexContainer';
import GridContainer from '../../components/GridContainer';

import styled from 'styled-components';
import {connect} from 'react-redux';
import {setViewedDate, fetchCalendarFromApi} from '../../actions/actionCreators';

// Adjusted some of the button styling
// Added button click effects
// - Andy
const DateButton = styled.button`
    border: 0;
    padding: 1em;
    height: 3.1em;
    width: 6em;
    border-radius: 0.75em;
    box-shadow: 0 4px #ff9800;
    background-color: #eaeaea;
  
    &:focus {
        outline: 0;
    }

    &:hover {
        background-color: #a0a0a0;
    }
    &:active {
        background-color: #a0a0a0;
        box-shadow: 0 1px #c37400;
        transform: translateY(4px);
    }
`;

const CurrentDate = styled.h4`
    text-align: center
`;

const FlexContainer = styled.div`
    display: flex;
    margin-top: 2.5%;
    justify-content: center;
`;

const LogoImage = styled.img`
    width: 6rem;

    @media (max-width: 450px) {
        width: 4rem;
    }
`;

class DateNavi extends Component{
    constructor(props){
        super(props);
        this.props.dateFromApi();

        // for regular date
        this.props.sendDate(new Date());

        // date format (year, month, day)
        // this.props.sendDate(new Date(2017, 11, 8))

    }

    previousDay(){
        let temp = this.props.unformattedDate;
        temp.setDate(temp.getDate()-1);
        this.props.sendDate(temp);
    }

    nextDay(){
        let temp = this.props.unformattedDate;
        temp.setDate(temp.getDate()+1);
        this.props.sendDate(temp);
    }

    render(){
        return(
            <div>
                <GridContainer>
                    <DateButton onClick={()=>this.previousDay()}>Previous</DateButton>
                    <LogoImage src="../../assets/hoop_color_2.png" alt="hoop image"/>
                    <DateButton  onClick={()=>this.nextDay()}>Next</DateButton>
                </GridContainer>
                <FlexContainer>
                    <CurrentDate>{this.props.viewedDateLongForm}</CurrentDate>
                </FlexContainer>
            </div>

        )
    }
}



const mapStateToProps = (state)=>{
    return{
        viewedDate: state.setDate.viewedDate,
        viewedDateLongForm: state.setDate.viewedDateLongForm,
        unformattedDate: state.setDate.unformattedDate,
        endSeasonDate: state.setDate.endSeasonDate
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        sendDate: (day) => dispatch(setViewedDate(day)),
        dateFromApi: () => dispatch(fetchCalendarFromApi())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateNavi);