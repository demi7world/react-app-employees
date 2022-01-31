import './app-filter.css';

export default function AppFilter() {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light mr-3"
                type="button">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light mr-3"
                type="button">
                    На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    З/П больше 1000$
            </button>
        </div>
    )
}