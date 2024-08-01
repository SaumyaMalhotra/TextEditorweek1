
let textarea = document.querySelector('#textarea');
let fontFamilySelect = document.querySelector('#font-family-select'); 
let fontSizeInput = document.querySelector('#font-size-input'); 
let colorPicker = document.querySelector('#color-picker'); 
let undoBtn = document.querySelector('.undo-btn');
let redoBtn = document.querySelector('.redo-btn');

let undos=[];
let redos=[];

const current_state= () => {
    const state = textarea.value;
    undos.push(state);
  
    updateUI();
  }

const Font_Family = () => {
    textarea.style.fontFamily = fontFamilySelect.value;
};


const Font_Size = () => {
    textarea.style.fontSize = fontSizeInput.value + 'px';
};


const Font_Color = () => {
    textarea.style.color = colorPicker.value;
};


const undo = () => {
    console.log('Undo action triggered');
    const laststate =undos.pop()
    if(laststate)
        textarea.value=laststate
    
    updateUI()
};

const redo = () => {   
        console.log('Redo action triggered');
};

const updateUI = () => {
  
    if (undos.length)
      undoBtn.removeAttribute('disabled')
    else
      undoBtn.setAttribute('disabled', true)
  
}

textarea.addEventListener('keydown', () => current_state())
  
fontFamilySelect.addEventListener('change', Font_Family);
fontSizeInput.addEventListener('input', Font_Size);
colorPicker.addEventListener('input', Font_Color);
undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);
