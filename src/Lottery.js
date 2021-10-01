import React, {Component} from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: String,
        numBalls: Number,  
        maxNum: Number, 
    };
    constructor(props){
        super(props);
        this.state = {
            nums: Array.from({length: this.props.numBalls})
        };
        this.generate = this.generate.bind(this);
    }
    generate(){
        this.setState(currentState => ({
            nums: currentState.nums.map(num => Math.floor(Math.random() * this.props.maxNum) + 1)
        }))}
    render(){
        return(
            <div className='Lottery'>
                <div className="Lottery-container">
                    <div className="Lotter-header">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="Lottery-balls">
                    {this.state.nums.map((n) => (
                        <LottoBall nums={n} />
                        ))}
                    </div>
                    <div>
                        <button className='Lottery-btn' onClick={this.generate}>Generate</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lottery;