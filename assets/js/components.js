/**
 * components.js — Renders the navigation menu from nav-config.js.
 *
 * Loaded at end of <body> so the DOM is already available.
 * Automatically detects whether we're on the home page or an inner page
 * and uses the correct link prefixes.
 */
(function () {
  var path = window.location.pathname;
  var isHome = path === '/' || path.endsWith('/index.html');
  var prefix = isHome ? '' : 'index.html';
  var tutorialsHref = isHome ? '#tutorials' : '#';

  var tutorialItems = VANOMATION_TUTORIALS.map(function (t) {
    return '              <li><a href="' + t.href + '">' + t.label + '</a></li>';
  }).join('\n');

  document.querySelector('#navbar > ul').innerHTML =
    '          <li><a class="nav-link scrollto active" href="' + prefix + '#hero">Home</a></li>\n' +
    '          <li><a class="nav-link scrollto" href="' + prefix + '#about">About</a></li>\n' +
    '          <li><a class="nav-link scrollto" href="' + prefix + '#pictures">Pictures</a></li>\n' +
    '          <li class="dropdown"><a href="' + tutorialsHref + '"><span>Tutorials</span> <i class="bi bi-chevron-down"></i></a>\n' +
    '            <ul>\n' +
    tutorialItems + '\n' +
    '            </ul>\n' +
    '          </li>\n' +
    '          <li><a class="nav-link scrollto" href="future_projects.html">Future Projects</a></li>';
})();
