import React, { useEffect } from 'react';

// Components
import Navbar from '../components/Navbar';
import Filter from '../components/Filter';
import RequestToolbar from '../components/RequestToolbar';
import DateDisplay from '../components/DateDisplay';
import Footer from '../components/Footer';

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        document.title = 'CareConnect';

        // TODO: check if user is logged in
    }, []);

    return (
        <div>
            {loggedIn ? (
                {/* TODO: signed in version */}
            ) : (
                {/* TODO: signed out version */}
            )}
        </div>
    );
};

export default Home;
