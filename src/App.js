// App.js
import React, { useState } from 'react';
import './App.css';
import Popup from './components/Popup';
import Buttons from './components/Buttons';
import FormColor from './components/FormColor';
import styled from 'styled-components';

const AppStyled = styled.div`
  background-color: ${props => props.bgColor || 'white'};
`;

function App() {
  const [close, setClose] = useState(false);

  const [fontColor, setFontColor] = useState("#444444");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [buttonColor, setButtonColor] = useState("#2072EF");
  const [buttonBorderColor, setButtonBorderColor] = useState("#2072EF");
  const [buttonMouseoverColor, setButtonMouseoverColor] = useState("#0053D1");

  const [hasChanges, setHasChanges] = useState(false);

  const handleColor = (e) => {
    setFontColor(e.target.value);
    setHasChanges(true);
  };

  const handlebgColor = (e) => {
    setBgColor(e.target.value);
    setHasChanges(true);
  };

  const handlebuttonColor = (e) => {
    setButtonColor(e.target.value);
    setHasChanges(true);
  };

  const handlebuttonBorderColor = (e) => {
    setButtonBorderColor(e.target.value);
    setHasChanges(true);
  };

  const handlebuttonMouseoverColor = (e) => {
    setButtonMouseoverColor(e.target.value);
    setHasChanges(true);
  };

  const handleClose = () => {
    setClose(!close);
  };

  const handleSave = () => {
    setHasChanges(false);
    setClose(!close);
  };

  return (
    <AppStyled className="App" bgColor={bgColor}>
      <button className='showPopup' onClick={handleClose}>show popup</button>

      <Popup trigger={close} setClose={setClose}>
        <div className="insidePopup">
          <header>
            <h2>Theme Color</h2>
            <h4>Change Theme</h4>
          </header>

          <main className='mainColors'>
            <FormColor
              name={"Font Color"}
              value={fontColor}
              onChange={handleColor}
            />

            <FormColor
              name={"Background Color"}
              value={bgColor}
              onChange={handlebgColor}
            />

            <FormColor
              name={"Button Color"}
              value={buttonColor}
              onChange={handlebuttonColor}
            />

            <FormColor
              name={"Button Border Color"}
              value={buttonBorderColor}
              onChange={handlebuttonBorderColor}
            />

            <FormColor
              name={"Button Mouseover Color"}
              value={buttonMouseoverColor}
              onChange={handlebuttonMouseoverColor}
            />
          </main>
        </div>

        <div className='popupButtons'>
          <button onClick={handleClose}>Cancel</button>
          <button 
            onClick={handleSave} 
            disabled={!hasChanges}
            className={`${!hasChanges ? "disable" : "activeSave"} `}  
          >Save</button>
        </div>
      </Popup>

      <div className='buttonsApp'>
        <Buttons
          fontColor={fontColor}
          buttonColor={buttonColor}
          buttonBorderColor={buttonBorderColor}
          buttonMouseoverColor={buttonMouseoverColor}
        />
      </div>
    </AppStyled>
  );
}

export default App;
