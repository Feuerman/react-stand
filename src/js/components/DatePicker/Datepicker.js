import React, { Component } from "react";
import moment from 'moment';


class Datepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date || moment(),
            datesArr: []
        }
    }

    componentWillMount() {
        let date = this.state.date,
            currentMonth = date.month(),
            datesArr = [];

        while(currentMonth === date.month()) {
            datesArr.push(date.date());
            date = date.add('1', 'days');
        }

        this.setState({
            datesArr: datesArr
        });
    }

    render() {
        return (
            <div className="datepicker">
                <div className="datepicker__input">input</div>
                <div className="datepicker__body">
                    <div className="datepicker__header">
                        <div className="arrow arrow--left">-</div>
                        <div className="name">Month</div>
                        <div className="arrow arrow--right">+</div>
                    </div>
                    <div className="datepicker__dates">
                        <table>
                            <tbody>
                                <tr>
                                    { this.state.datesArr.map((item, index) => {
                                        return <DateCell date={item} key={index}/>
                                    }) }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

let DateCell = (props) => {
    return (
        <td>{ props.date }</td>
    )
}

export default Datepicker;