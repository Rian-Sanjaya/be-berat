import React, { Component } from 'react';
import ListRow from './ListRow';
import EditForm from './EditForm';

var LISTDATES = {
    '2018-08-22': {id: '2018-08-22', max: 50, min: 20},
    '2018-08-21': {id: '2018-08-21', max: 52, min: 22},
    '2018-08-20': {id: '2018-08-20', max: 54, min: 24}
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listdates: LISTDATES,
            render: 0,
            listOneDate: undefined
        }

        this.sortList = this.sortList.bind(this);
        this.sortProducts = this.sortProducts.bind(this);
        this.saveBerat = this.saveBerat.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.loadEditForm = this.loadEditForm.bind(this);
        this.loadHome = this.loadHome.bind(this);
    }

    sortList(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }

    sortProducts() {
        let beratArray = Object.keys(this.state.listdates).map( (dt) => this.state.listdates[dt] );
        return beratArray.sort(this.sortList);
    }

    saveBerat(listBerat) {
        this.setState((prevState) => {
            let dates = prevState.listdates;
            dates[listBerat.id] = listBerat;
            return { dates };
        });
    }

    handleDelete(dateId) {
        this.setState((prevState) => {
          let dates = prevState.listdates;
          delete dates[dateId];
          return { dates };
        });
    }

    loadEditForm(oneDate) {
        if (oneDate) {
            this.setState({
                render: 1,
                listOneDate: oneDate
            })
        } else {
            this.setState({
                render: 1
            })
        }
    }

    loadHome() {
        this.setState({
            render: 0,
            listOneDate: undefined
        })
    }

    render() {
        let rows = [];
        this.sortProducts().forEach( listDate => {
            rows.push(
                <ListRow 
                    key = {listDate.id}
                    listDate = {listDate}
                    goEdit = {this.loadEditForm}
                    onDelete = {this.handleDelete}
                />
            )
        });

        if (this.state.render === 0) {
            return (
                <div>
                    <header className="App-header">
                        <h2>BE - Berat</h2>
                    </header>
                    <div>
                        <button className='link-header' onClick={() => this.loadEditForm()}>Add</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tanggal</th>
                                <th>Max</th>
                                <th>Min</th>
                                <th>Perbedaan</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <div>
                    <EditForm 
                        onSave = {this.saveBerat}
                        goHome = {this.loadHome}
                        listOneDate = {this.state.listOneDate}
                    />
                </div>
            )
        }
    }
}

export default Home;