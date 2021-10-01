import React, {Component} from 'react';
import './LottoBall.css'

class LottoBall extends Component {
    render(){
        return (
            <div className='LottoBall'>
                {this.props.nums}
            </div>
        )
    }
}

export default LottoBall;