class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <br>
		<div class="copyright">&copy; <script>document.write( new Date().getFullYear() );</script> PSSF DGK, ein <a href="https://bluestar.breitband.group">Bluestar Entertainment</a> Unternehmen. <br> Design: <a href="https://html5up.net">HTML5 UP</a> & <a href="https://lamplnet.breitband.group"><span style="color: #00b9ae;">Lampl</span><span style="color: #037171;">Net</span></a>.<br><br>Zur <a href="index.html">Homepage</a> | <a href="agb.html">AGB</a></div>
      `;
    }
  }
  
  customElements.define('footer-copyright', Footer);