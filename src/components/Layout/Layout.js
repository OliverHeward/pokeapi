import React from 'react';
import GlobalStyles from "../../styles/GlobalStyles"
import Typography from "../../styles/Typography"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = ({children}) => {
    return (
        <div>
            <GlobalStyles />
            <Typography />
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;