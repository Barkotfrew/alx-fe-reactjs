import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
<<<<<<< HEAD
=======
import UserProfile from './components/UserProfile';  // ✅ import UserProfile
>>>>>>> e16cb1884472f77c8a315666727f347f409aca66

function App() {
  return (
    <div>
      <Header />
      <MainContent />
<<<<<<< HEAD
=======
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
>>>>>>> e16cb1884472f77c8a315666727f347f409aca66
      <Footer />
    </div>
  );
}

export default App;
