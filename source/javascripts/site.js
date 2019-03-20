// This is where it all goes :)
// You can comment this JS out and the app will still work.
(function() {
  var app = {
    'routes': {
      'mise_en_bouche': {
        'rendered': function() {
          console.log('view currently showing is "mise_en_bouche"');
          app.preventScroll();
        }
      },
      'projet': {
        'rendered': function() {
          console.log('view currently showing is "projet"');
          app.preventScroll();
        }
      },
      'fonctionnement': {
        'rendered': function() {
          console.log('view currently showing is "fonctionnement"');
          app.preventScroll();
        }
      },
      'infos': {
        'rendered': function() {
          console.log('view currently showing is "infos"');
          app.preventScroll();
        }
      },
      'on_sy_met': {
        'rendered': function() {
          console.log('view currently showing is "on_sy_met"');
          app.preventScroll();
        }
      },
      'a_propos': {
        'rendered': function() {
          console.log('view currently showing is "a_propos"');
          app.preventScroll();
        }
      },
    },
    'default': 'a_propos',
    'preventScroll': function() {
      document.querySelector('html').scrollTop = 0;
      document.querySelector('body').scrollTop = 0;
    },
    'routeChange': function() {
      app.routeID = location.hash.slice(1);
      app.route = app.routes[app.routeID];
      app.routeElem = document.getElementById(app.routeID);
      app.route.rendered();
    },
    'init': function() {
      window.addEventListener('hashchange', function() {
        app.routeChange();
      });
      if (!window.location.hash) {
        window.location.hash = app.default;
      } else {
        app.routeChange();
      }
    }
  };
  window.app = app;
})();

app.init();
