import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SurpanchTable from './components/SurpanchTable';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow">
        <SurpanchTable/>
      </main> 
      <Footer/>
    </div>
  );
}
