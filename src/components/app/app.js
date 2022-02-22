import { Component} from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Doe', salary: '800', increase: false, rise: true, id: 1},
                {name: 'Jane Doe', salary: '1400', increase: false, rise: false, id: 2},
                {name: 'Joe Smith', salary: '2300', increase: true, rise: false, id: 3},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }
    
    deletItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newData = [...data, newItem];
            console.log(newData);
            return {
                data: newData
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmployees(data, term), filter);

        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        
        return (
            <div className="app">
                <AppInfo
                    employeesNumber={employees}
                    employeesOnIncrease={increased} />
                <div className="search-panel">
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                    filter={filter} 
                    onFilterSelect={this.onFilterSelect} />
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deletItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;