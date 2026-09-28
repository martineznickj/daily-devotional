(function () {
  var root = document.documentElement;

  // ---------- language state ----------
  var LANG = 'en';
  try { LANG = localStorage.getItem('dd-lang') || 'en'; } catch (e) {}
  window.__lang = LANG;
  window.getLang = function () { return LANG; };

  var I18N = {
    es: {
      // nav + chrome
      'nav-today': 'Hoy',
      'nav-method': 'El Método',
      'nav-philosophy': 'Filosofía y Teología',
      'footer-line': 'ESV · leído a través de los Siete Movimientos',
      'brand': 'Devocional Diario',
      'title-index': 'Devocional Diario — Los Siete Movimientos',
      'title-method': 'El Método — Devocional Diario',
      'title-philosophy': 'Filosofía y Teología — Devocional Diario',

      // index UI
      'idx-earlier': 'Anterior',
      'idx-later': 'Siguiente',
      'idx-reading': 'La Lectura',
      'idx-word': 'La Palabra',
      'idx-apply': 'Aplicar',
      'idx-prayer': 'Oración',
      'idx-archive-head': 'Días Anteriores',
      'idx-calendar': 'Calendario',
      'idx-list': 'Lista',
      'idx-empty-title': 'Aún no hay nada',
      'idx-empty-sub': 'El primer devocional aún no se ha publicado.',
      'idx-check-back': 'Vuelve pronto.',
      'idx-prev-month': 'Mes anterior',
      'idx-next-month': 'Mes siguiente',

      // method page
      'method-pill': 'El Método',
      'method-h1': 'Cómo aprendemos y enseñamos',
      'method-lead': 'Todo en este sitio corre por un solo método. Siete movimientos. Cada uno es una habilidad antigua con un nombre nuevo y una pregunta simple.',
      'method-moves-label': 'Los Siete Movimientos',
      'method-pipeline-label': 'El Proceso',
      'method-pipeline-1': 'Corren en orden: Reunir, Filtrar, Entregar, Contar, Formar, Fluir, Alejar. Pero es un ciclo, no una escalera. Vuelves a Reunir todo el tiempo, y cada movimiento posterior te manda de regreso a revisar.',
      'method-pipeline-2': 'Cada movimiento lleva una virtud. Reunir es humildad. Filtrar es discernimiento. Entregar es generosidad. Contar es honestidad. Formar es claridad. Fluir es paciencia. Alejar es perspectiva. La habilidad y el carácter crecen juntos.',
      'method-rhythm-label': 'El Ritmo Diario',
      'method-rhythm-intro': 'Cada devocional del día usa un movimiento como su pregunta principal, así que la semana misma es el método.',
      'day-mon': 'Lun',
      'day-tue': 'Mar',
      'day-wed': 'Mié',
      'day-thu': 'Jue',
      'day-fri': 'Vie',
      'day-sat': 'Sáb',
      'day-sun': 'Dom',
      'method-rhythm-mon': 'Reunir. Lee el pasaje despacio y nombra lo que realmente dice.',
      'method-rhythm-tue': 'Filtrar. ¿Qué significa, y qué no significa?',
      'method-rhythm-wed': 'Entregar. Pon la idea en tus propias palabras, en una frase.',
      'method-rhythm-thu': 'Contar. Los números, la estructura, las repeticiones.',
      'method-rhythm-fri': 'Formar. Cómo encaja esta pieza en la historia completa.',
      'method-rhythm-sat': 'Fluir. Qué ritmo o patrón se repite.',
      'method-rhythm-sun': 'Alejar. Da un paso atrás y repasa la semana desde lo alto.',
      'method-origin-label': 'De Dónde Viene',
      'method-origin-1': 'Estos siete movimientos son las artes liberales clásicas, con otro nombre. Las tres artes del lenguaje son Gramática, Lógica y Retórica. Las cuatro artes del número son Aritmética, Geometría, Música y Astronomía. Las escuelas las enseñaron por dos mil años, y luego casi dejaron de hacerlo. Nosotros todavía las usamos, solo que con nombres sencillos.',
      'method-origin-2': 'Todo lo probamos contra el texto con estos movimientos. Si una idea no sobrevive Reunir y Filtrar, no entra.',

      // method page — the seven moves
      'move-gather-m': 'Reunir <span>· Gramática · humildad</span>',
      'move-gather-h3': 'Toma lo que realmente está ahí.',
      'move-gather-p': 'Las palabras, los términos, la materia prima. Antes de decidir lo que algo significa, reúnes lo que dice.',
      'move-gather-q': 'La pregunta: ¿qué dice realmente?',
      'move-filter-m': 'Filtrar <span>· Lógica · discernimiento</span>',
      'move-filter-h3': 'Separa la señal del ruido.',
      'move-filter-p': 'Decide lo que algo significa, y lo que no. Conserva lo verdadero. Deja caer el resto.',
      'move-filter-q': 'La pregunta: ¿qué significa, y qué no?',
      'move-deliver-m': 'Entregar <span>· Retórica · generosidad</span>',
      'move-deliver-h3': 'Dilo con tus propias palabras.',
      'move-deliver-p': 'Pon la idea en un lenguaje que aterrice en otra persona. Si no puedes decirlo con claridad, todavía no lo has reunido.',
      'move-deliver-q': 'La pregunta: ¿cómo lo diría para que aterrice?',
      'move-count-m': 'Contar <span>· Aritmética · honestidad</span>',
      'move-count-h3': 'Ponle los números.',
      'move-count-p': 'Qué es grande, qué es pequeño, qué cambia, qué se repite. Los números no adulan, y ese es el punto.',
      'move-count-q': 'La pregunta: ¿qué me dicen los números y la estructura?',
      'move-shape-m': 'Formar <span>· Geometría · claridad</span>',
      'move-shape-h3': 'Mira cómo encajan las partes.',
      'move-shape-p': 'Una pieza solo tiene sentido dentro del todo. Encuentra dónde va, y aparece el contorno.',
      'move-shape-q': 'La pregunta: ¿cómo encaja esta pieza en el todo?',
      'move-flow-m': 'Fluir <span>· Música · paciencia</span>',
      'move-flow-h3': 'Capta el ritmo.',
      'move-flow-p': 'El tiempo, el patrón, lo que se repite. Nota lo que vuelve a aparecer, y cuándo.',
      'move-flow-q': 'La pregunta: ¿qué ritmo o patrón se repite?',
      'move-zoom-m': 'Alejar <span>· Astronomía · perspectiva</span>',
      'move-zoom-h3': 'Da un paso atrás y mira el sistema completo.',
      'move-zoom-p': 'Sal del detalle. Desde lo alto, las partes que reuniste forman una sola imagen en movimiento.',
      'move-zoom-q': 'La pregunta: ¿cómo se ve esto desde la altura de la historia completa?',

      // philosophy page
      'phil-pill': 'Filosofía y Teología',
      'phil-h1': 'Lo que creemos, y la Escritura que lo respalda',
      'phil-lead': 'Cada idea en esta página se prueba de la misma forma. Una afirmación, luego el texto. Cada una lleva el movimiento que nos llevó hasta allí.',
      'phil-one-phrase-label': 'La Frase Única',
      'phil-one-phrase': 'Dios hace su hogar con nosotros. Lo rompemos. Él paga para recuperarlo.',
      'phil-one-phrase-moves': 'Derivado con <b>Reunir · Formar · Alejar</b>',
      'phil-one-phrase-text': 'El tema común es la redención. La columna es el pacto, seis de ellos: con Adán, Noé, Abraham, Moisés, David, y el nuevo pacto en Cristo. Cada libro de la Biblia es un pacto hecho, roto, recordado o cumplido.',
      'phil-core-label': 'La Filosofía Central',
      'phil-core-intro': 'Toda cosmovisión responde cinco preguntas. Así las responde el texto.',
      'phil-q1': '1. ¿Qué es real?',
      'phil-q1-text': 'Dios. No un ser entre muchos, sino el ser mismo, el fundamento de todo. La realidad es creada, intencional y buena.',
      'phil-q2': '2. ¿Qué está mal?',
      'phil-q2-text': 'La caída. La condición humana es una relación rota, una voluntad vuelta hacia adentro, no la mala suerte ni la ignorancia.',
      'phil-q3': '3. ¿Cuál es la solución?',
      'phil-q3-text': 'La gracia, no el mérito. Esta es la bisagra, y la diferencia más marcada con todo sistema basado en méritos.',
      'phil-q4': '4. ¿Cómo vivo?',
      'phil-q4-text': 'Amor. No reglas. Una persona, y luego personas.',
      'phil-q5': '5. ¿Hacia dónde va?',
      'phil-q5-text': 'La nueva creación. La restauración de todo, cuerpo incluido.',
      'phil-deep-label': 'Las Doctrinas Profundas',
      'phil-trinity': 'La Trinidad',
      'phil-trinity-text': 'Un Dios, tres personas. El Padre arriba, el Hijo con nosotros, el Espíritu dentro. La palabra nunca aparece en la Biblia. Es un resumen de tres hechos que el texto afirma a la vez.',
      'phil-trinity-moves': 'Derivado con <b>Formar</b>',
      'phil-return': 'El regreso al final de los tiempos',
      'phil-return-text': 'El cierre completado. Vuelve de la misma forma en que se fue. Restauración, no escape. Nadie sabe cuándo, y el texto dice que dejes de adivinar.',
      'phil-return-moves': 'Derivado con <b>Alejar · Fluir</b>',
      'phil-grace': 'Gracia y predestinación',
      'phil-grace-text': 'La tensión más profunda del libro. El texto dice ambas cosas, en las mismas cartas. Son dos vistas de la misma puerta: desde tu lado la empujas para abrirla, desde el lado de Dios ya estaba abierta para ti.',
      'phil-grace-moves': 'Derivado con <b>Filtrar · Contar</b>',
      'phil-hidden-label': 'La Estructura Oculta',
      'phil-hidden-intro': 'Debajo de la superficie, el libro está diseñado. Estos son los patrones que sostienen el peso.',
      'phil-bookend': 'El cierre del libro',
      'phil-bookend-text': 'Abre con Dios creando. Cierra con Dios habitando. Un solo arco, de Dios con nosotros a Dios con nosotros.',
      'phil-bookend-verse': 'En el principio creó Dios los cielos y la tierra. He aquí el tabernáculo de Dios con los hombres.',
      'phil-typology': 'Tipología',
      'phil-typology-text': 'El Antiguo Testamento es una sombra. Figuras anteriores ensayan a Cristo antes de que llegue: Adán, el cordero de la Pascua, la serpiente levantada, los tres días de Jonás.',
      'phil-exchange': 'El intercambio',
      'phil-exchange-text': 'Toda la máquina corre sobre la sustitución. El inocente carga con el culpable. Por eso todo pacto lleva un sacrificio.',
      'phil-mystery': 'El misterio',
      'phil-mystery-text': 'Lo oculto no es un código por descifrar. Es que el plan de Dios era habitar dentro de la persona, no solo cerca de ella.',
      'phil-one-line-label': 'La Única Línea',
      'phil-one-line': 'Es una historia de amor donde Dios no deja de volver.',

      // scripture verse text (RVR1960)
      'v-gen1-1': 'En el principio creó Dios los cielos y la tierra.',
      'v-rev21-3': 'He aquí el tabernáculo de Dios con los hombres, y él morará con ellos; y ellos serán su pueblo, y Dios mismo estará con ellos como su Dios.',
      'v-jer31-33': 'Y yo seré a ellos por Dios, y ellos me serán por pueblo.',
      'v-rom3-23': 'por cuanto todos pecaron, y están destituidos de la gloria de Dios.',
      'v-eph2-8-9': 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.',
      'v-mt22-37-39': 'Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo.',
      'v-gal5-6': 'la fe que obra por el amor.',
      'v-2cor5-17': 'De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.',
      'v-deut6-4': 'Oye, Israel: Jehová nuestro Dios, Jehová uno es.',
      'v-john1-1': 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.',
      'v-mt28-19': 'bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.',
      'v-acts1-11': 'Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo.',
      'v-rev21-4': 'Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor.',
      'v-mt24-36': 'Pero del día y la hora nadie sabe, ni aun los ángeles de los cielos, sino solo mi Padre.',
      'v-eph1-4-5': 'según nos escogió en él antes de la fundación del mundo, en amor habiéndonos predestinado para ser adoptados hijos suyos por medio de Jesucristo.',
      'v-john3-16': 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.',
      'v-2pet3-9': 'no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento.',
      'v-gal3-24': 'De manera que la ley ha sido nuestro ayo, para llevarnos a Cristo.',
      'v-1pet3-18': 'Porque también Cristo padeció una sola vez por los pecados, el justo por los injustos, para llevarnos a Dios.',
      'v-col1-27': 'Cristo en vosotros, la esperanza de gloria.',

      // scripture references (full, Spanish book names)
      'r-gen1-1': 'Génesis 1:1',
      'r-rev21-3': 'Apocalipsis 21:3',
      'r-jer31-33': 'Jeremías 31:33',
      'r-rom3-23': 'Romanos 3:23',
      'r-eph2-8-9': 'Efesios 2:8-9',
      'r-mt22-37-39': 'Mateo 22:37-39',
      'r-gal5-6': 'Gálatas 5:6',
      'r-2cor5-17': '2 Corintios 5:17',
      'r-deut6-4': 'Deuteronomio 6:4',
      'r-john1-1': 'Juan 1:1',
      'r-mt28-19': 'Mateo 28:19',
      'r-acts1-11': 'Hechos 1:11',
      'r-rev21-4': 'Apocalipsis 21:4',
      'r-mt24-36': 'Mateo 24:36',
      'r-eph1-4-5': 'Efesios 1:4-5',
      'r-john3-16': 'Juan 3:16',
      'r-2pet3-9': '2 Pedro 3:9',
      'r-gen1-1-rev21-3': 'Génesis 1:1 · Apocalipsis 21:3',
      'r-gal3-24': 'Gálatas 3:24',
      'r-1pet3-18': '1 Pedro 3:18',
      'r-col1-27': 'Colosenses 1:27',

      // scripture book references (Spanish book names)
      'ref-genesis': 'Génesis',
      'ref-revelation': 'Apocalipsis',
      'ref-jeremiah': 'Jeremías',
      'ref-romans': 'Romanos',
      'ref-ephesians': 'Efesios',
      'ref-matthew': 'Mateo',
      'ref-galatians': 'Gálatas',
      'ref-2corinthians': '2 Corintios',
      'ref-deuteronomy': 'Deuteronomio',
      'ref-john': 'Juan',
      'ref-acts': 'Hechos',
      'ref-2peter': '2 Pedro',
      'ref-1peter': '1 Pedro',
      'ref-colossians': 'Colosenses',
      'ref-proverbs': 'Proverbios',
      'ref-2timothy': '2 Timoteo'
    }
  };

  function t(key) {
    var dict = I18N[LANG];
    return dict ? dict[key] : null;
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (LANG === 'es') {
        var s = t(el.getAttribute('data-i18n'));
        if (s != null) el.textContent = s;
      } else if (el.__defaultText !== undefined) {
        el.textContent = el.__defaultText;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      if (LANG === 'es') {
        var s = t(el.getAttribute('data-i18n-html'));
        if (s != null) el.innerHTML = s;
      } else if (el.__defaultHtml !== undefined) {
        el.innerHTML = el.__defaultHtml;
      }
    });
    var titleEl = document.querySelector('title');
    if (titleEl) {
      if (LANG === 'es') {
        var page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
        var st = t('title-' + page);
        if (st != null) titleEl.textContent = st;
      } else if (titleEl.__defaultTitle !== undefined) {
        titleEl.textContent = titleEl.__defaultTitle;
      }
    }
    root.setAttribute('lang', LANG);
    syncTheme();
    if (typeof window.onLangChange === 'function') window.onLangChange(LANG);
  }

  window.setLang = function (l) {
    LANG = l;
    window.__lang = l;
    try { localStorage.setItem('dd-lang', l); } catch (e) {}
    applyI18n();
    syncLangBtn();
  };

  // ---------- theme ----------
  var toggle = document.getElementById('themeToggle');
  try {
    var savedTheme = localStorage.getItem('dd-theme');
    if (savedTheme) root.setAttribute('data-theme', savedTheme);
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      root.setAttribute('data-theme', 'dark');
  } catch (e) {}

  function syncTheme() {
    if (!toggle) return;
    toggle.textContent = root.getAttribute('data-theme') === 'dark'
      ? (LANG === 'es' ? 'Claro' : 'Light')
      : (LANG === 'es' ? 'Oscuro' : 'Dark');
  }

  // ---------- language toggle button ----------
  var langToggle = document.getElementById('langToggle');
  function syncLangBtn() {
    if (!langToggle) return;
    langToggle.textContent = LANG === 'en' ? 'ES' : 'EN';
    langToggle.setAttribute('aria-label', LANG === 'en' ? 'Cambiar a español' : 'Switch to English');
  }
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      window.setLang(LANG === 'en' ? 'es' : 'en');
    });
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark';
      root.setAttribute('data-theme', dark ? 'light' : 'dark');
      try { localStorage.setItem('dd-theme', dark ? 'light' : 'dark'); } catch (e) {}
      syncTheme();
    });
  }

  // ---------- nav active state ----------
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });

  // capture the English defaults once, before any translation overwrites them
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.__defaultText = el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    el.__defaultHtml = el.innerHTML;
  });
  var _titleEl = document.querySelector('title');
  if (_titleEl) _titleEl.__defaultTitle = _titleEl.textContent;

  applyI18n();
  syncLangBtn();
  syncTheme();
})();
