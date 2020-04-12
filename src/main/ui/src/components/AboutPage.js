import React from "react";

class AboutPage extends React.Component {
    render() {
        return (
            <div >
                <h2>About</h2>
                <img style={{height:'8%',width:'9%'}} alt="UBKG LOGO" src={require('../resources/images/ubkg_logo.jpg')} />
                <p style={{paddingRight:'50%'}}>
                    Uttarbanga  Kshetriya Gramin  Bank, a Regional Rural Bank  sponsored by  Central Bank of India,
                    was established on the 7th March 1977 under the Provision of Section 3(2) of RRB Act 1976 [ 21 of 1976]
                    with equity participation of Government of India (50%), Central Bank of India (35%) and Government of
                    West Bengal (15%). The Bank has been operating in five districts of West Bengal namely, Coochbehar,
                    Jalpaiguri, Alipurduar, Darjeeling and Kalimpong with its Head Office at Coochbehar.
                </p>
            </div>
        );
    }
}

export default AboutPage;