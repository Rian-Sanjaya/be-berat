import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ListRow.css';

class ListRow extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.goToEdit = this.goToEdit.bind(this);
    }

    handleDelete(e) {
        this.props.onDelete(this.props.listDate.id);
        e.preventDefault();
    }

    goToEdit() {
        this.props.goEdit(this.props.listDate);
        return <Redirect to = '/' />
    }

    render() {
        return (
            <tr>
                <td>
                    <Link 
                        to = { 
                            {pathname: '/detail', 
                            state: {id: this.props.listDate.id, max: this.props.listDate.max, min: this.props.listDate.min}
                            } 
                        }
                    >{this.props.listDate.id}
                    </Link>
                </td>
                <td>
                    <Link to = { 
                            {pathname: '/detail', 
                            state: {id: this.props.listDate.id, max: this.props.listDate.max, min: this.props.listDate.min}
                            } 
                        }>{this.props.listDate.max}
                    </Link>
                </td>
                <td>
                    <Link to = { 
                            {pathname: '/detail', 
                            state: {id: this.props.listDate.id, max: this.props.listDate.max, min: this.props.listDate.min}
                            } 
                        }>{this.props.listDate.min}
                    </Link>
                </td>
                <td>
                    <Link to = { 
                            {pathname: '/detail', 
                            state: {id: this.props.listDate.id, max: this.props.listDate.max, min: this.props.listDate.min}
                            } 
                        }>{this.props.listDate.max - this.props.listDate.min}
                    </Link>
                </td>
                <td>
                    <button onClick={this.goToEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default ListRow;