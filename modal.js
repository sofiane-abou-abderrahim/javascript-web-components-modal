class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        #backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.75);
          z-index: 10;
        }

        #modal {
          position: fixed;
          top: 15vh;
          left: 25%;
          width: 50%;
          height: 30rem;
          z-index: 100;
          background: white;
          border-radius: 3px;
          border-shadow: 0 2px 8px rgba(0,0,0,0.26);
        }
      </style>
      <div id="backdrop"></div>
      <div id="modal">
        <header>
          <h1>Please Confirm</h1>
        </header>
        <section id="main">
          <slot></slot>
        </section>
        <section id="actions">
          <button>Cancel</button>
          <button>Okay</button>
        </section>
      </div>
    `;
  }
}

customElements.define('uc-modal', Modal);
