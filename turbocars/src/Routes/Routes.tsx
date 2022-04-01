import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

const Routing = () => {
return(
<Router>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
</Router>
)
}

export default Routing;