import { useState } from "react";
import "./PutUpForm.css";
import { ItemList } from "./ItemList/ItemList";
import { Listing } from "./Listing/Listing";

function App() {
  // reload ItemList after Listing complete
  const [reload, setReload] = useState(true);
  return (
    <div>
      <div>
        <Listing onListingCompleted={() => setReload(true)} />
      </div>
      <div>
        <ItemList reload={reload} onLoadCompleted={() => setReload(false)} />
      </div>
    </div>
  );
}

export default App;