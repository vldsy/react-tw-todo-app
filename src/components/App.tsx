import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import TodoList from "./TodoList";

function App() {

  return (
    <div className="font-sans bg-[#f1d4b3] min-h-screen flex justify-center items-center flex-col">
      <BackgroundHeading />
      <main>
        <Header />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}

export default App
