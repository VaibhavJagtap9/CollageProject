import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/Header.module.css'; // This file might be better named if it's not just for header styles

const Home: React.FC = () => {
  return (
    <div>
      
    <Header></Header>

      <Footer></Footer>
    
    </div>
  );
}

export default Home;
