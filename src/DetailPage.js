import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DetailPage extends Component {
    render() {
        const {id, max, min} = this.props.location.state;
        
        return (
            <div>
                <h2>BE - Berat</h2>
                <div>
                    <Link className='link-detail' to = '/'>Home</Link>
                </div>
                <ul>
                    <li><span className='detail-span detail-bold'>Tanggal</span><span className='detail-span detail-bold'>{id}</span></li>
                    <li><span className='detail-span'>Max</span><span className='detail-span'>{max}</span></li>
                    <li><span className='detail-span'>Min</span><span className='detail-span'>{min}</span></li>
                    <li><span className='detail-span'>Perbedaan</span><span className='detail-span'>{max - min}</span></li>
                </ul>
            </div>
        )
    }
}

export default DetailPage;