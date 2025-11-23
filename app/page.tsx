import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow">
        <h1 className='text-2xl text-red-500'>Hello, Goverment</h1>
      </main> 
      <Footer/>
    </div>
  );
}
