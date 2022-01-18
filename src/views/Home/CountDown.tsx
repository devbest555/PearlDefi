import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Heading, Text} from "uikit";

const ClockDiv = styled.div`
font-family: sans-serif;
color: #f4baac;
display: inline-block;
font-weight: 100;
text-align: center;
font-size: 30px;
`

const ClockTimeSide = styled.div`
padding: 10px;
border-radius: 3px;
background: #852f41;
display: inline-block;
margin-right: 10px;
`

const ClockTimeSideSpan = styled.span`
border-radius: 3px;
background: #852f41;
display: inline-block;
margin-right: 10px;
`

const ClockTimeSideLabel = styled.span`
border-radius: 3px;
display: inline-block;
padding-top: 5px;
font-size: 16px;
`

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}


const CountDown = () => {
    const deadline = 'Mon Apr 19 2021 00:58:29 GMT+0300';
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(deadline));
    const [show, setShow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const temp = getTimeRemaining(deadline);
            /* eslint-disable */
            setTimeRemaining(timeRemaining => temp);
            if (temp.total <= 0) {
                setShow(show => false);
            } else {
                setShow(show => true);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        show ?
            <div>
                <div>
                    <Heading as="h1" size="lg" mb="20px" color="primary"
                             style={{alignContent: "center", textAlign: "center"}}>Farming Starts from Block <a style={{marginLeft:"5px", color:"#f4baac"}} href="https://bscscan.com/block/countdown/6685000">#6685000</a></Heading>
                    <div style={{alignContent: "center", textAlign: "center"}}>
                        ~
                        <ClockDiv>
                            <ClockTimeSide>
                                <ClockTimeSideSpan className="days">{timeRemaining.days}</ClockTimeSideSpan>
                                <ClockTimeSideLabel>Days</ClockTimeSideLabel>
                            </ClockTimeSide>
                            <ClockTimeSide>
                                <ClockTimeSideSpan className="hours">{timeRemaining.hours}</ClockTimeSideSpan>
                                <ClockTimeSideLabel>Hours</ClockTimeSideLabel>
                            </ClockTimeSide>
                            <ClockTimeSide>
                                <ClockTimeSideSpan className="minutes">{timeRemaining.minutes}</ClockTimeSideSpan>
                                <ClockTimeSideLabel>Min</ClockTimeSideLabel>
                            </ClockTimeSide>
                            <ClockTimeSide>
                                <ClockTimeSideSpan className="seconds">{timeRemaining.seconds}</ClockTimeSideSpan>
                                <ClockTimeSideLabel>Sec</ClockTimeSideLabel>
                            </ClockTimeSide>
                        </ClockDiv>
                    </div>
                </div>
                <Text style={{alignContent: "center", textAlign: "center", marginTop:"5px"}} >
                    <a style={{marginLeft:"5px", color:"#f4baac", textDecoration:"underline"}} href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x1590b659D48717F541A19534d3571573eA7A49A5" target="_blank">Click here to Buy $PEARL with BUSD</a> |
                    |<a style={{marginLeft:"5px", color:"#f4baac", textDecoration:"underline"}} href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=0x1590b659D48717F541A19534d3571573eA7A49A5" target="_blank">Click here to Buy $PEARL with BNB</a>
                </Text>
            </div>
            : <div>
            </div>
    )
}

export default CountDown
