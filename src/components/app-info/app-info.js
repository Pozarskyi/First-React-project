import './app-info.css';

const AppInfo = ({increased, emploees}) => {
    return (
        <div className="app-info">
            <h1>Перелік працівників в компанії Kрамар</h1>
            <h2>Загальна кількість працівників: {emploees}</h2>
            <h2>Премію отримають: {increased}</h2> 
        </div>
    );
}

export default AppInfo;