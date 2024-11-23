import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import TodoList from "./TodoList";

function App() {

  return (
    <div>
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
