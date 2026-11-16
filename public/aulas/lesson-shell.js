const lessonTitle = document.querySelector('meta[name="lesson-title"]')?.content;
const lessonDiscipline = document.querySelector('meta[name="lesson-discipline"]')?.content;
const lessonIconDisciplines =
  document.querySelector('meta[name="lesson-icon-disciplines"]')?.content || lessonDiscipline;
const lessonTechnicalInfo = document.querySelector('meta[name="lesson-technical"]')?.content;
const equationEngine =
  document.querySelector('meta[name="lesson-equation-engine"]')?.content || 'MathJax';
const testTarget = document.querySelector('meta[name="lesson-test-target"]')?.content;

if (lessonTitle && lessonDiscipline) {
  document.title = `${lessonTitle} | Monitoria BNCC | ${lessonDiscipline}`;

  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href =
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.append(fontAwesome);
  }

  const header = document.querySelector('header');
  const headerContent = header?.querySelector(':scope > div') || header;
  if (header && headerContent) {
    const navigationLinks = [...headerContent.querySelectorAll('nav a')].map((link) =>
      link.cloneNode(true),
    );
    const timer = headerContent.querySelector('#timer-display');
    const answeredCount = headerContent.querySelector('#header-answered-count');
    const status = document.createElement('div');
    status.className = 'bncc-lesson-status';
    if (timer) status.append(timer);
    if (answeredCount) status.append(answeredCount);

    header.classList.add('bncc-lesson-header');

    const identity = document.createElement('div');
    identity.className = 'bncc-lesson-identity';

    const brand = document.createElement('a');
    brand.className = 'bncc-lesson-brand';
    brand.href = '../';
    brand.textContent = 'Monitoria BNCC';

    const metadata = document.createElement('span');
    metadata.className = 'bncc-lesson-meta';
    const titleText = document.createElement('span');
    titleText.className = 'bncc-lesson-meta-title';
    titleText.textContent = lessonTitle;

    const disciplineText = document.createElement('span');
    disciplineText.className = 'bncc-lesson-meta-discipline';
    disciplineText.textContent = lessonDiscipline;

    const disciplineIcons = document.createElement('span');
    disciplineIcons.className = 'bncc-lesson-discipline-icons';
    disciplineIcons.setAttribute('aria-label', lessonIconDisciplines);

    const icons = [
      { terms: ['matemática'], icon: 'fa-calculator', label: 'Matemática' },
      { terms: ['física'], icon: 'fa-bolt', label: 'Física' },
      { terms: ['química'], icon: 'fa-flask', label: 'Química' },
      { terms: ['biologia'], icon: 'fa-dna', label: 'Biologia' },
      { terms: ['língua portuguesa', 'linguagens'], icon: 'fa-book-open', label: 'Linguagens' },
      { terms: ['língua inglesa'], icon: 'fa-language', label: 'Língua Inglesa' },
      { terms: ['arte'], icon: 'fa-palette', label: 'Arte' },
      { terms: ['educação física'], icon: 'fa-person-running', label: 'Educação Física' },
      { terms: ['história'], icon: 'fa-landmark', label: 'História' },
      { terms: ['geografia'], icon: 'fa-earth-americas', label: 'Geografia' },
      { terms: ['filosofia'], icon: 'fa-brain', label: 'Filosofia' },
      { terms: ['sociologia'], icon: 'fa-people-group', label: 'Sociologia' },
    ];
    const iconText = lessonIconDisciplines.toLocaleLowerCase('pt-BR');
    const disciplinasEncontradas = icons.filter(({ terms }) =>
      terms.some((term) => iconText.includes(term)),
    );
    if (disciplinasEncontradas.length === 0) {
      disciplinasEncontradas.push({ terms: [], icon: 'fa-layer-group', label: 'Interdisciplinar' });
    }

    disciplinasEncontradas.forEach(({ icon, label }) => {
      const disciplineIcon = document.createElement('i');
      disciplineIcon.className = `fa-solid ${icon}`;
      disciplineIcon.title = label;
      disciplineIcon.setAttribute('aria-hidden', 'true');
      disciplineIcons.append(disciplineIcon);
    });

    metadata.append(titleText, disciplineText, disciplineIcons);
    identity.append(brand, metadata);

    const menuButton = document.createElement('button');
    menuButton.className = 'bncc-lesson-menu-button';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'bncc-lesson-menu');
    menuButton.setAttribute('aria-label', 'Abrir menu da aula');
    menuButton.innerHTML = '<span></span><span></span><span></span>';

    const menu = document.createElement('div');
    menu.className = 'bncc-lesson-menu';
    menu.id = 'bncc-lesson-menu';
    menu.hidden = true;

    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Navegação da aula');
    navigationLinks.forEach((link) => nav.append(link));

    const actions = document.createElement('div');
    actions.className = 'bncc-lesson-menu-actions';

    const printButton = document.createElement('button');
    printButton.className = 'bncc-lesson-action bncc-lesson-print';
    printButton.type = 'button';
    printButton.textContent = 'Gerar PDF';
    printButton.addEventListener('click', () => window.print());

    const testLink = document.createElement('a');
    testLink.className = 'bncc-lesson-action bncc-lesson-test';
    testLink.href = testTarget || '#questoes';
    testLink.textContent = 'Testar conhecimentos';

    actions.append(printButton, testLink);
    menu.append(nav, actions);
    const headerInner = document.createElement('div');
    headerInner.className = 'bncc-lesson-inner';
    headerInner.append(identity, status, menuButton, menu);
    header.replaceChildren(headerInner);

    function setMenuOpen(open) {
      menu.hidden = !open;
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Fechar menu da aula' : 'Abrir menu da aula');
    }

    menuButton.addEventListener('click', () => {
      setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) setMenuOpen(false);
    });
    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    });
  }

  const footer = document.querySelector('footer');
  if (footer) {
    footer.classList.add('bncc-lesson-footer');
    const credits = document.createElement('p');
    credits.className = 'bncc-lesson-copyright';
    credits.textContent = '© 2026 Apprendendo • Todos os Direitos Reservados';

    const technical = document.createElement('p');
    technical.className = 'bncc-lesson-technical';
    technical.textContent =
      `Desenvolvido com suporte nativo a simulações visuais e equações matematicamente formatadas em LaTeX (${equationEngine}).`;

    const lessonInfo = document.createElement('p');
    lessonInfo.className = 'bncc-lesson-details';
    lessonInfo.textContent =
      lessonTechnicalInfo || `Aula: ${lessonTitle} · Componente curricular: ${lessonDiscipline}.`;

    const returnLink = document.createElement('a');
    returnLink.className = 'bncc-lesson-return';
    returnLink.href = '../';
    returnLink.textContent = 'Voltar à Monitoria BNCC';

    footer.replaceChildren(credits, technical, lessonInfo, returnLink);
  }
}
