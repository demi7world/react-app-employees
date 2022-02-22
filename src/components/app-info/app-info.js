import './app-info.css';

export default function AppInfo(props) {
    const {employeesNumber, employeesOnIncrease} = props;
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании</h1>
            <h2>Общее количество сотрудников: {employeesNumber}</h2>
            <h2>Премию получат: {employeesOnIncrease}</h2>
        </div>
    )
}