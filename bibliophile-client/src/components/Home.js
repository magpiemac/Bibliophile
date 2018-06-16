import React from 'react';
import './Home.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

const Home = () => {
    return (
        <div>

            <Header/>

            <div className="container text-muted">
                <Section/>
                <Footer/>
            </div>

        </div>
    );
};



export default Home;

// class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Bibliophile</h1>
//       </div>
//     );
//   }
// }
//
// export default Home;
