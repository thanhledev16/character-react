import { useState,useEffect } from "react";
import "./App.css";
import PartList from "./component/PartList";
import Avatar from "./component/Avatar";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  glasses: 17,
  earrings: 32,
  hats: 28,
  neckwear: 18,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
  noses: 1,
  facial_hair: 17,
};

function App() {
  const [body, setBody] = useState(2);
  const [hair, setHair] = useState(15);
  const [eyes, setEyes] = useState(1);
  const [eyebrows, setEyebrows] = useState(0);
  const [mouths, setMouths] = useState(0);
  const [facial_hair, setFacialhair] = useState(2);
  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(4);
  const [earrings, setEarrings] = useState(0);
  const [glasses, setGlasses] = useState(3);
  const [hats, setHats] = useState(10);
  const [neckwear, setNeckwear] = useState(12);
  const [noses, setNoses] = useState(0); 

  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setHair(Math.floor(Math.random() * total.hair));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setMouths(Math.floor(Math.random() * total.mouths));
    setFacialhair(Math.floor(Math.random() * total.facial_hair));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
    setEarrings(Math.floor(Math.random() * total.earrings));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setHats(Math.floor(Math.random() * total.hats));
    setNeckwear(Math.floor(Math.random() * total.neckwear));
  };


 /*useEffect(() => {
    randomize()
  }, []);*/

  const [reset, setReset] = useState(false);

  const resetAvatar = () => {
    setReset(true);
  };

  useEffect(() => {
    if (reset) {
      setBody(0);
      setHair(0);
      setEyes(0);
      setEyebrows(0);
      setNoses(0);
      setMouths(0);
      setFacialhair(0);
      setClothing1(0);
      setClothing2(0);
      setClothing3(0);
      setEarrings(0);
      setGlasses(0);
      setHats(0);
      setNeckwear(0);
      setReset(false);
    }
  }, [reset]);

  return (
    <>
    <div className="App">
      <div className="title">CUSTOMIZE YOUR AVATAR</div>
      <div className="main">
        <div>
          <div className="avatar-wrapper">
            <Avatar body={body} hair={hair} eyes={eyes} eyebrows={eyebrows} noses={noses} mouths={mouths} facial_hair={facial_hair} clothing1={clothing1} clothing2={clothing2} clothing3={clothing3} earrings={earrings} glasses={glasses} hats={hats} neckwear={neckwear} />
            <div className="btn-avatar">
              <button className="button" onClick={() => randomize()}>🛠️RANDOMIZE🛠️</button>
              <button className="button" onClick={() => resetAvatar()}>🛠️RESET🛠️</button>
            </div>
          </div>
        </div>
        <div>
          <div className="list-items">
            <h1>Body</h1>
            <PartList
              total={total.body}
              path="body"
              active={body}
              set={setBody}
              top="50%"
              zoom={1.5}
            />
          </div>
          <div className="list-items">
            <h1>Hair</h1>
            <PartList
              total={total.hair}
              path="hair"
              active={hair}
              set={setHair}
              top="60%"
              zoom={1.5}
            />
          </div>
          <div className="list-items">
            <h1>Eyes</h1>
            <PartList
              total={total.eyes}
              path="eyes"
              active={eyes}
              set={setEyes}
              zoom={2.5}
              top="70%"
            />
          </div>
          <div className="list-items">
            <h1>Eyebrows</h1>
            <PartList
              total={total.eyebrows}
              path="eyebrows"
              active={eyebrows}
              set={setEyebrows}
              zoom={2}
              top="80%"
            />
          </div>
          <div className="list-items">
            <h1>Mouths</h1>
            <PartList
              total={total.mouths}
              path="mouths"
              active={mouths}
              set={setMouths}
              zoom={3}
              top="30%"
            />
          </div>
          <div className="list-items">
            <h1>Facial</h1>
            <PartList
              total={total.facial_hair}
              path="facial_hair"
              active={facial_hair}
              set={setFacialhair}
              top="50%"
              zoom={1.5}
            />
          </div>
          <div className="list-items">
            <h1>Clothes</h1>
            <PartList
              total={total.clothing1}
              path="clothes/layer_1"
              active={clothing1}
              set={setClothing1}
              top="20%"
              zoom={1.5}
            />
            <br></br>
            <PartList
              total={total.clothing2}
              path="clothes/layer_2"
              active={clothing2}
              set={setClothing2}
              top="20%"
              zoom={1.5}
            />
            <br></br>
            <PartList
              total={total.clothing3}
              path="clothes/layer_3"
              active={clothing3}
              set={setClothing3}
              top="20%"
              zoom={1.5}
            />
          </div>
          <div className="list-items">
            <h1>Earrings</h1>
            <PartList
              total={total.earrings}
              path="accessories/earrings"
              active={earrings}
              set={setEarrings}
              top="50%"
              left="25%"
              zoom={2}
            />
            <h1>Glasses</h1>
            <PartList
              total={total.glasses}
              path="accessories/glasses"
              active={glasses}
              set={setGlasses}
              top="65%"
              left="50%"
              zoom={1.5}
            />
            <h1>Hats</h1>
            <PartList
              total={total.hats}
              path="accessories/hats"
              active={hats}
              set={setHats}
              top="70%"
              left="50%"
              zoom={1.5}
            />
            <h1>Neckwear</h1>
            <PartList
              total={total.neckwear}
              path="accessories/neckwear"
              active={neckwear}
              set={setNeckwear}
              top="20%"
              left="50%"
              zoom={1.5}
            />
          </div>
        </div>
      </div>
    </div>
    <footer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="divider"></div>
    </footer>
    </>

  );
}

export default App;
