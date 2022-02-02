import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

export default function App() {

    const data = [
        {name: 'John Doe', salary: '800', increase: false, id: 1},
        {name: 'Jane Doe', salary: '1400', increase: false, id: 2},
        {name: 'Joe Smith', salary: '2300', increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm />
        </div>
    )
}