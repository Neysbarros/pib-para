// Rodapé compartilhado. Edite o conteúdo abaixo para atualizar todas as páginas.
// Os links internos usam a raiz do projeto, calculada a partir deste script.
(() => {
  const script = document.currentScript;
  const siteRoot = new URL("../", script.src);
  const template = document.createElement("template");
  template.innerHTML = `<footer class="footer-main" id="contato">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-3 col-md-6">
          <h5 class="footer-title mb-4">Sobre FAPESPA</h5>
          <p class="small text-light">Fundação Amazônia de Amparo a Estudos e Pesquisas, promovendo ciência, tecnologia e inovação para o desenvolvimento do estado.</p>
          <div class="social-icons mt-4">
            <a href="https://www.instagram.com/fapespa/" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="footer-title mb-4">Contato</h5>
          <ul class="list-unstyled small text-light">
            <li class="mb-3"><i class="bi bi-geo-alt me-2 text-white"></i>Av. Brg. Protásio, 621 - Souza, Belém - PA</li>
            <li class="mb-3"><i class="bi bi-telephone me-2 text-white"></i>+55 (91) 3110-1150</li>
            <li class="mb-3"><i class="bi bi-clock me-2 text-white"></i>Seg-Sex: 8h às 14h</li>
            <li><i class="bi bi-envelope me-2 text-white"></i><a class="text-light text-decoration-none" href="mailto:detgi@fapespa.pa.gov.br">detgi@fapespa.pa.gov.br</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="footer-title mb-4">Links Úteis</h5>
          <ul class="list-unstyled small">
            <li class="mb-2"><a class="text-light text-decoration-none" href="https://www.pa.gov.br/" target="_blank" rel="noopener noreferrer">Governo do Estado do Pará</a></li>
            <li class="mb-2"><a class="text-light text-decoration-none" href="https://www.fapespa.pa.gov.br/" target="_blank" rel="noopener noreferrer">FAPESPA</a></li>
            <li class="mb-2"><a class="text-light text-decoration-none" href="politica-privacidade.html">Política de Privacidade</a></li>
            <li><a class="text-light text-decoration-none" href="termos-uso.html">Termos de Uso</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="footer-title mb-4">Navegação</h5>
          <ul class="list-unstyled small">
            <li class="mb-2"><a class="text-light text-decoration-none" href="index.html">Página Inicial</a></li>
            <li class="mb-2"><a class="text-light text-decoration-none" href="pib-estadual/index.html">PIB Estadual</a></li>
            <li class="mb-2"><a class="text-light text-decoration-none" href="pib-municipal/index.html">PIB Municipal</a></li>
            <li class="mb-2"><a class="text-light text-decoration-none" href="pib-trimestral/index.html">PIB Trimestral</a></li>
            <li class="mb-2"><a class="text-light text-decoration-none" href="https://www.fapespa.pa.gov.br/dashboard/" target="_blank" rel="noopener noreferrer">Painéis Estatísticos</a></li>
            <li class="mb-2"><a class="text-light text-decoration-none" href="https://www.fapespa.pa.gov.br/wp-content/uploads/2026/03/Relatorio-Preliminar-Publicacao-Bioeconomia-Versao-Final.pdf" target="_blank" rel="noopener noreferrer">Bioeconomia (PDF)</a></li>
            <li><a class="text-light text-decoration-none" href="https://www.fapespa.pa.gov.br/wp-content/uploads/2025/09/Nota_tecnica_MIP_final.pdf" target="_blank" rel="noopener noreferrer">Matriz de Insumo-Produto (PDF)</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <div class="footer-copyright text-center py-3">
    <div class="container">
      <small>© <span data-current-year></span> PIB do Pará | FAPESPA</small>
    </div>
  </div>`;
  template.content.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(href)) {
      link.href = new URL(href, siteRoot).href;
    }
  });
  template.content.querySelector("[data-current-year]").textContent = new Date().getFullYear();
  script.replaceWith(template.content);
})();
