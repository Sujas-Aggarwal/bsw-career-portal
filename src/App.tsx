import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ExplorePage from './pages/Explore';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/explore/:profileName" element={<ExplorePage />} />
            </Routes>
        </Router>
    );
}
