! function(a) {
    a.fn.jalendar = function(e) {
        var t = a.extend({
                customDay: new Date,
                color: "#3aa4d1",
                color2: "",
                lang: "RU",
                type: "",
                customUrl: "#",
                dateType: "dd-mm-yyyy",
                dayWithZero: !0,
                monthWithZero: !0,
                sundayStart: !1,
                dayColor: null,
                titleColor: null,
                weekColor: null,
                todayColor: null,
                selectingBeforeToday: !1,
                selectingAfterToday: !1,
                done: null
            }, e),
            n = {},
            r = {},
            d = {},
            i = {};
        n.EN = new Array("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"), n.RU = new Array("Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"),n.OZ = new Array("Du", "Se", "Cho", "Pa", "Ju", "Sha", "Ya"), n.UZ = new Array("Ду", "Се", "Чо", "Па", "Жу", "Ша", "Як"), r.EN = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),r.RU = new Array("Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"), r.OZ = new Array("Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"), r.UZ = new Array("Январ", "Феврал", "Март", "Апрел", "Май", "Июн", "Июл", "Август", "Сентябр", "Октябр", "Ноябр", "Декабр"),d.EN = "News", d.RU = "Новость", d.OZ = "Yangilik", d.UZ = "Янгиликлар", i.EN = "Close", i.RU = "Закрыть", i.OZ = "Yopmoq", i.UZ = "Ёпкоқ";
        var l = new Date,
            s = l.getDate(),
            o = l.getMonth(),
            y = l.getFullYear(),
            u = a(this),
            f = function(e, t) {
                return a(document.createElement(e)).addClass(t)
            },
            h = "" === t.color2 ? t.color : t.color2;
        u.append(a('<input type="hidden" class="data1" /><input type="hidden" class="data2" />'), f("div", "jalendar-container").append(f("div", "jalendar-pages").append(f("div", "header").append(f("a", "prv-m").append(f("i", "fa fa-angle-left")), f("h1"), f("a", "nxt-m").append(f("i", "fa fa-angle-right")), f("div", "day-names")), f("div", "days"), f("div", "add-event").append(f("div", "events").append(f("h3", "").html("<span></span> " + d[t.lang]), f("div", "events-list")), f("div", "close-button").text(i[t.lang]))).attr("style", "background-color:" + t.color + "; background: -webkit-gradient(linear, left top, left bottom, from(" + t.color + "), to(" + h + ")); background: -webkit-linear-gradient(top, " + t.color + ", " + h + "); background : -moz-linear-gradient(top, " + t.color + ", " + h + "); background: -ms-linear-gradient(top, " + t.color + ", " + h + "); background: -o-linear-gradient(top, " + t.color + ", " + h + ");"))), "range" == t.type && u.find(".jalendar-pages").addClass("range").append(f("input", "first-range-data").attr({
            type: "hidden"
        }), f("input", "last-range-data").attr({
            type: "hidden"
        }));
        for (var p = 0; p < 42; p++) u.find(".days").append(f("div", "day"));
        var m = 0;
        1 == t.sundayStart && (u.find(".day-names").append(f("h2").text(n[t.lang][6])), m = 1);
        for (p = m; p < 7; p++) u.find(".day-names").append(f("h2").text(n[t.lang][p - m]));
        var v, c = new Date(t.customDay),
            g = c.getFullYear(),
            b = c.getDate(),
            C = c.getMonth(),
            A = function(a) {
                var e, t;
                return !0 == (e = g, (t = new Date).setYear(e), t.setMonth(1), t.setDate(29), 29 == t.getDate()) ? 29 : 28
            },
            w = new Array(31, A(v), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),
            D = null,
            k = null,
            M = null,
            T = null,
            N = null,
            S = null;

        function x() {
            w[1] = A(v);
            var e = new Date;
            e.setFullYear(g, C, 0);
            var n = e.getDay() + m;
            u.find(".header h1").html(r[t.lang][C] + " " + g + '<div class="total-bar"></div>'), u.find(".day").html("&nbsp;").removeAttr("data-date").removeClass("this-month have-event disable-selecting");
            for (var d = 0; d < 42 - (n + w[C]); d++) u.find(".day").eq(n + w[C] + d).html("<span>" + (d + 1) + "</span>");
            for (d = 0; d < n; d++) {
                var i = void 0 == w[C - 1] ? w[11] : w[C - 1];
                u.find(".day").eq(d).html("<span>" + (i - n + (d + 1)) + "</span>")
            }
            for (d = 1; d <= w[C]; d++) {
                var l;
                n++;
                var h = C + 1;
                !0 === t.dayWithZero && (d = d < 10 ? "0" + d : d), !0 === t.monthWithZero && (h = C < 9 ? "0" + (C + 1) : C + 1), "dd-mm-yyyy" == t.dateType ? l = d + "-" + h + "-" + g : "mm-dd-yyyy" == t.dateType ? l = h + "-" + d + "-" + g : "yyyy-mm-dd" == t.dateType ? l = g + "-" + h + "-" + d : "yyyy-dd-mm" == t.dateType && (l = g + "-" + d + "-" + h), "linker" == t.type ? u.find(".day").eq(n - 1).addClass("this-month").attr("data-date", l).html('<span><a href="' + t.customUrl + l + '">' + d + "</a></span>") : u.find(".day").eq(n - 1).addClass("this-month").attr("data-date", l).html("<span>" + d + "</span>");
                var p = Math.round(new Date(g + "/" + (C + 1) + "/" + d + " 00:00:00").getTime() / 1e3),
                    D = Math.round(new Date(y + "/" + (o + 1) + "/" + s + " 00:00:00").getTime() / 1e3);
                1 == t.selectingBeforeToday && p > D && u.find(".day").eq(n - 1).addClass("disable-selecting"), 1 == t.selectingAfterToday && p < D && u.find(".day").eq(n - 1).addClass("disable-selecting"), u.find(".days").attr("data-month", h).attr("data-year", g)
            }
            C == c.getMonth() && g == c.getFullYear() ? u.find(".day.this-month").removeClass("today").eq(b - 1).addClass("today") : u.find(".day.this-month").removeClass("today").attr("style", ""), u.find(".added-event").each(function(e) {
                    a(this).attr("data-id", e);
                    var t = a(this).attr("data-date");
                    u.find('.this-month[data-date="' + t + '"]').append(f("div", "event-single").attr("data-id", e).append(f("a", "").attr("href", a(this).attr("data-link")).attr("target", "blank").text(a(this).attr("data-title")))), u.find(".day").has(".event-single").addClass("have-event")
                }),
                function() {
                    var e = u.find(".this-month .event-single").length;
                    0 == e && u.find(".total-bar").hide(0);
                    u.find(".total-bar").text(e), u.find(".events h3 span").text(a(".jalendar .day.selected .event-single").length)
                }(), null !== t.dayColor && u.find(".day span, .day span a").css({
                    color: t.dayColor
                }), null !== t.titleColor && u.find(".header h1, .header .prv-m, .header .nxt-m, .event-single p, h3, .close-button").css({
                    color: t.titleColor
                }), null !== t.weekColor && u.find("h2").css({
                    color: t.weekColor
                }), null !== t.todayColor && u.find(".day.this-month.today span, .day.this-month.today span a").css({
                    color: t.todayColor
                }), "#fff" != t.color && "#ffffff" != t.color && "white" != t.color || u.find(".header h1, .header .prv-m, .header .nxt-m, .day.today span, h2, .event-single p, h3, .close-button").css({
                    "text-shadow": "none"
                })
        }
        x();
        var E = new Array(u.find(".prv-m"), u.find(".nxt-m"));
        u.find(".jalendar .close-button");

        function F() {
            u.find(".day").removeClass("selected").removeAttr("style"), u.find(".add-event").removeClass("selected").height(0)
        }

        function j() {
            if (u.find(".day").removeClass("first-range range last-range"), null !== D)
                if (0 == u.find('[data-date="' + L.val() + '"]').length) {
                    if (M < Number(u.find(".days").attr("data-month")) && N >= Number(u.find(".days").attr("data-year")) || N < Number(u.find(".days").attr("data-year")) ? D = 0 : (M > Number(u.find(".days").attr("data-month")) && N <= Number(u.find(".days").attr("data-year")) || N > Number(u.find(".days").attr("data-year"))) && (D = 42), null !== k) {
                        if (N == S && M == T) return !1;
                        var a = parseInt(u.find(".days").attr("data-year"), 10),
                            e = parseInt(u.find(".days").attr("data-month"), 10);
                        (N < a && S > a || T > e && S >= a && N < a || M < e && N == a && T > e && S == a || M < e && S > a && N == a || M < e && N == a && T > e && S >= a) && u.find(".day").addClass("range")
                    }
                } else D = u.find('[data-date="' + L.val() + '"]').index()
        }

        function z() {
            u.find('.day[data-date="' + L.val() + '"]').addClass("first-range"), u.find('.day[data-date="' + J.val() + '"]').addClass("last-range"), u.find('.day[data-date="' + L.val() + '"]').nextUntil('.day[data-date="' + J.val() + '"]').addClass("range"), u.find('.day[data-date="' + J.val() + '"]').length > 0 && (u.find(".day.first-range").length > 0 ? u.find(".day.first-range").nextUntil(".day.last-range").addClass("range") : (u.find(".day:eq(" + D + ")").nextUntil(".day.last-range").addClass("range"), 0 == D && u.find(".day:eq(0)").addClass("range")))
        }
        var L = u.find("input.first-range-data"),
            J = u.find("input.last-range-data");
        E[1].on("click", function() {
            C >= 11 ? (C = 0, g++) : C++, x(), F(), "range" == t.type && (j(), z())
        }), E[0].on("click", function() {
            dayClick = u.find(".this-month"), 0 === C ? (C = 11, g--) : C--, x(), F(), "range" == t.type && (j(), z())
        }), u.on("click", ".close-button", function(a) {
            a.preventDefault(), u.find(".add-event").removeClass("selected").height(0), u.find(".this-month.selected").removeClass("selected")
        }), u.on("click", ".this-month:not(.disable-selecting)", function() {
            if ("selector" == t.type) return a(this).parent().find(".selected").removeClass("selected"), a(this).addClass("selected"), u.find("input.data1").val(u.find(".this-month.selected").attr("data-date")), u.parent().is(".jalendar-input") && (u.parent().find("input").removeClass("selected"), u.parent(".jalendar-input").find("input").val(a(this).data("date"))), null !== t.done && t.done.call(this), !1;
            if ("range" == t.type) {
                a(this).parent().find(".first-range"), a(this).parent().find(".last-range");

                function e(a) {
                    a.parent().find(".day").removeClass("first-range").removeClass("range").removeClass("last-range"), a.addClass("first-range"), L.val(a.attr("data-date")), D = u.find('[data-date="' + u.find(".first-range").attr("data-date") + '"]').index(), M = Number(u.find(".days").attr("data-month")), N = Number(u.find(".days").attr("data-year")), k = null, J.val("")
                }
                if (null !== D)
                    if (null !== k) e(a(this));
                    else {
                        if (D > a(this).index()) return e(a(this)), !1;
                        (n = a(this)).addClass("last-range"), J.val(n.attr("data-date")), k = u.find(".last-range").index(), T = Number(u.find(".days").attr("data-month")), S = Number(u.find(".days").attr("data-year")), u.find("input.data1").val(L.val()), u.find("input.data2").val(J.val()), u.parent().is(".jalendar-input") && (u.parent().find("input").removeClass("selected"), u.parent(".jalendar-input").find("input").val(u.find("input.data1").val() + ", " + u.find("input.data2").val())), null !== t.done && t.done.call(this)
                    }
                else e(a(this));
                return u.on({
                    mouseenter: function() {
                        if (null === D) return !1;
                        "" === J.val() && (u.find(".day").removeClass("range last-range"), a(this).index() > D && a(this).hasClass("this-month") && (a(this).addClass("last-range"), a(this).parent().find(".day:eq(" + D + ")").nextUntil(".this-month.last-range").addClass("range"), 0 == D && a(this).parent().find(".day:eq(0)").addClass("range")))
                    },
                    mouseleave: function() {
                        "" === J.val() && a(this).parent().find(".day").removeClass("last-range").removeClass("range")
                    }
                }, ".range .day.this-month"), !1
            }
            var n, r = a(this).find(".event-single");
            u.find(".events .event-single").remove(), F(), "" === t.type && (u.find("input.data1").val(a(this).data("date")), a(this).addClass("selected"), u.find(".add-event").find(".events-list").html(r.clone()), u.parent().is(".jalendar-input") && u.parent(".jalendar-input").find("input").val(a(this).data("date")), u.find(".events .event-single").length >= 0 && u.find(".events h3 span").html(u.find(".events .event-single").size()), u.find(".add-event").addClass("selected").height(u.find(".add-event .events").height() + 59))
        }), u.parent().is(".jalendar-input") && u.parent(".jalendar-input").find('input[type="text"], .jalendar').on("click", function(e) {
            e.stopPropagation(), a(this).addClass("selected")
        }), a("html").on("click", function() {
            a(".jalendar-input input").removeClass("selected")
        })
    }
}(jQuery);