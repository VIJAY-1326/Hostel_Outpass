import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
        Tailwind CSS is working!
        </h1>
      </div>
      <Footer />

    </>
  );
}

export default App;