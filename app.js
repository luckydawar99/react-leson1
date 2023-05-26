
import './app.css';
import About from './component/About';
import Navbar from './component/Navbar';
//import TextForm from './component/TextForm';

function App() {
    return (
        <>
            <Navbar />
            <div className='container my-3'>
                {/*  <TextForm heading="Enter the text " />*/}
                <About />
            </div>

        </>
    );
}

export default App;
