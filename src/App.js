import './App.css';
import ListIcon from '@material-ui/icons/List';


const Header = () => {
    return (
        <div className="header">
            <ListIcon/>
        </div>
    );
}
const Body = () => {
    return (
        <div className="body">
        </div>
    )
}
const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li>Today</li>
                <li>WillBe</li>
                <li>Overdue</li>
                <li>Done</li>
            </ul>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Menu/>
            <Body/>
        </div>
    );
}

export default App;
