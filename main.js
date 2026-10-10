(function () {
  var cuts = {
    boyun:     ['Boyun', 'Güveç, haşlama ve kıyma için. Yavaş pişen yemeklerin lezzetli parçasıdır.'],
    kurek:     ['Kürek', 'Kavurma, güveç ve kuşbaşı için. Hem kısa hem uzun pişirmeye uyar.'],
    dos:       ['Döş ve kaburga', 'Haşlama, fırın ve uzun pişirmeler için. Yağı lezzet taşır.'],
    antrikot:  ['Antrikot', 'Izgara ve tavada biftek için. Yağ damarlı ve sulu bir parçadır.'],
    kontrfile: ['Kontrfile', 'Izgara biftek için. Antrikota göre biraz daha yağsızdır.'],
    bonfile:   ['Bonfile', 'En yumuşak parça. Hızlı pişirilir, az pişmeyi sever.'],
    karin:     ['Karın', 'Kıyma, sarma ve köfte için.'],
    rosto:     ['Rosto (but)', 'Fırın rostosu, şnitzel ve yağsız kuşbaşı için.'],
    incik:     ['İncik', 'Kısık ateşte uzun pişirmek için. Çorba ve incik tandırın parçasıdır.']
  };

  var nameEl = document.getElementById('cut-name');
  var textEl = document.getElementById('cut-text');
  var chips = document.getElementById('chips');
  var current = null;

  Object.keys(cuts).forEach(function (key) {
    var li = document.createElement('li');
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = cuts[key][0];
    b.setAttribute('data-cut', key);
    li.appendChild(b);
    chips.appendChild(li);
  });

  function select(key) {
    if (!cuts[key] || key === current) return;
    current = key;
    document.querySelectorAll('[data-cut]').forEach(function (el) {
      el.classList.toggle('on', el.getAttribute('data-cut') === key);
    });
    nameEl.textContent = cuts[key][0];
    textEl.textContent = cuts[key][1];
    document.querySelectorAll('.cow .labels text').forEach(function (t) {
      t.classList.toggle('on', t.textContent.indexOf(cuts[key][0].split(' ')[0]) === 0);
    });
  }

  document.querySelectorAll('.cow .zone, .chips button').forEach(function (el) {
    var key = el.getAttribute('data-cut');
    el.addEventListener('mouseenter', function () { select(key); });
    el.addEventListener('focus', function () { select(key); });
    el.addEventListener('click', function () { select(key); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(key); }
    });
  });

  window.__selectCut = select;
})();
