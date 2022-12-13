import './assets/reset.css';
import './assets/App.css';

import SignIn from './page/SignIn';
import Todo from './page/Todo';

function App() {
    return (
        <div className="App">
            <SignIn />
            <Todo />
        </div>
    );
}

export default App;
