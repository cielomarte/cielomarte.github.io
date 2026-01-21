import treeData from "./data/ai_tree.json";
import { TreeCanvas } from "./components/TreeCanvas";

function App() {
  return (
    <>
      <h1>AI Knowledge Navigator</h1>
      <p>Click a node to expand the tree.</p>
      <TreeCanvas tree={treeData} />
    </>
  );
}

export default App;
