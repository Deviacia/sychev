import { Routes, Route } from 'react-router-dom';
import Page from '../layouts/Page';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Portfolio from './Portfolio/Portfolio';

const Root = () => {
    return (
        <Routes>
            <Route path='/' element={<Page />}>
                <Route index element={<Home />} />
                {/* <Route path='/portfolio' element={<Portfolio />} /> */}
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default Root