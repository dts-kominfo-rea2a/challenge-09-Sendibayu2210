import './App.css';
import Header from './components/Header';
// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App  
  return (
    <div className="App">
        <Header />     
       <Contact contact={contacts} />
    </div>
  );
}

export default App;
