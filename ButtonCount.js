class ButtonCount extends HTMLElement {
    constructor(){
        super();
        let counter = 0;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = '<button id="counter">Times Clicked: 0</button>'
        this.shadowRoot.firstElementChild.onclick = addCount;
        function addCount(){
            counter++;
            this.innerHTML = `Times Clicked: ${counter}`;  
        }
    }
}
window.customElements.define('button-count', ButtonCount);