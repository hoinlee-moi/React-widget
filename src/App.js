import styles from "./App.module.css";
import ItemList from "./components/ItemList";

function App() {
  return <div className={styles.container}>
    <h1>Click to check it out!</h1>
    <ItemList />
  </div>;
}

export default App;
