jQuery(document).ready(function (n) {
  function t() {
    var e = !n('.cd-dropdown').hasClass('dropdown-is-active');
    n('.cd-dropdown').toggleClass('dropdown-is-active', e),
      n('.house_toggle').toggleClass('dropdown-is-active', e),
      e ||
        n('.cd-dropdown').one(
          'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
          function () {
            n('.has-children ul').addClass('is-hidden'),
              n('.move-out').removeClass('move-out'),
              n('.is-active').removeClass('is-active');
          }
        );
  }
  n('.house_toggle').on('click', function (e) {
    e.preventDefault(), t();
  }),
    n('.cd-dropdown .cd-close').on('click', function (e) {
      e.preventDefault(), t();
    }),
    n('.has-children')
      .children('a')
      .on('click', function (e) {
        e.preventDefault(),
          n(this)
            .next('ul')
            .removeClass('is-hidden')
            .end()
            .parent('.has-children')
            .parent('ul')
            .addClass('move-out');
      }),
    n('.go-back').on('click', function () {
      var e = n(this);
      n(this).parent('ul').parent('.has-children').parent('ul'),
        e
          .parent('ul')
          .addClass('is-hidden')
          .parent('.has-children')
          .parent('ul')
          .removeClass('move-out');
    });
}),
  (function (v) {
    v.fn.menuAim = function (e) {
      return (
        this.each(function () {
          (function (e) {
            function t(e) {
              e != l && (l && h.deactivate(l), h.activate(e), (l = e));
            }
            var s = v(this),
              l = null,
              d = [],
              f = null,
              o = null,
              h = v.extend(
                {
                  rowSelector: '> li',
                  submenuSelector: '*',
                  submenuDirection: 'right',
                  tolerance: 75,
                  enter: v.noop,
                  exit: v.noop,
                  activate: v.noop,
                  deactivate: v.noop,
                  exitMenu: v.noop,
                },
                e
              ),
              i = function (e) {
                var n = u();
                n
                  ? (o = setTimeout(function () {
                      i(e);
                    }, n))
                  : t(e);
              },
              u = function () {
                if (!l || !v(l).is(h.submenuSelector)) return 0;
                var e = { x: (c = s.offset()).left, y: c.top - h.tolerance },
                  n = { x: c.left + s.outerWidth(), y: e.y },
                  t = { x: c.left, y: c.top + s.outerHeight() + h.tolerance },
                  o = { x: c.left + s.outerWidth(), y: t.y },
                  i = d[d.length - 1],
                  u = d[0];
                if (!i) return 0;
                if (
                  (u = u || i).x < c.left ||
                  u.x > o.x ||
                  u.y < c.top ||
                  u.y > o.y
                )
                  return 0;
                if (f && i.x == f.x && i.y == f.y) return 0;
                function r(e, n) {
                  return (n.y - e.y) / (n.x - e.x);
                }
                var a = n,
                  c = o;
                return (
                  'left' == h.submenuDirection
                    ? ((a = t), (c = e))
                    : 'below' == h.submenuDirection
                    ? ((a = o), (c = t))
                    : 'above' == h.submenuDirection && ((a = e), (c = n)),
                  (e = r(i, a)),
                  (n = r(i, c)),
                  (a = r(u, a)),
                  (c = r(u, c)),
                  e < a && c < n ? ((f = i), 300) : ((f = null), 0)
                );
              };
            s
              .mouseleave(function () {
                o && clearTimeout(o),
                  h.exitMenu(this) && (l && h.deactivate(l), (l = null));
              })
              .find(h.rowSelector)
              .mouseenter(function () {
                o && clearTimeout(o), h.enter(this), i(this);
              })
              .mouseleave(function () {
                h.exit(this);
              })
              .click(function () {
                t(this);
              }),
              v(document).mousemove(function (e) {
                d.push({ x: e.pageX, y: e.pageY }), 3 < d.length && d.shift();
              });
          }.call(this, e));
        }),
        this
      );
    };
  })(jQuery);
