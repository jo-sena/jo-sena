export class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="nav">
        <a href="#" class="logo">Névoa IA</a>
        <button class="menu-btn" aria-label="Menu">☰</button>
      </header>`;
  }
}

export class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="hero">
        <h1 class="title"><span id="typewriter"></span></h1>
        <p class="subtitle">Sua parceira em inteligência artificial</p>
      </section>`;
  }
}

export class ResourcesSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="resources">
        <h2>Recursos</h2>
        <div class="grid">
          <article class="card">Automação</article>
          <article class="card">Análise</article>
          <article class="card">Integração</article>
        </div>
      </section>`;
  }
}

export class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer">©2025 Névoa IA</footer>`;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('hero-section', HeroSection);
customElements.define('resources-section', ResourcesSection);
customElements.define('site-footer', SiteFooter);
