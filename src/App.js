import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MainPage from'./components/mainPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// const MainPageVar = ReactDOM.render(<MainPage/>, document.getElementById('root'));
// window.updateMainPage = (someValue) => {
//     // Update state of topmost parent when this method is called 
//     console.log('this is username' +someValue);
//     MainPageVar.setState({ username : someValue }); 
// };
class App extends Component{
    render(){
        return(

            <MainPage/>

        )
    }
    
}
export default App;
