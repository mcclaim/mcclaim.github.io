$(document).ready(function(){$(".tab-content select, select").each(function(){var t=$(this),e=$(this).children("option").length;t.addClass("select-hidden"),t.wrap('<div class="select"></div>'),t.after('<div class="select-styled"><span>1</span></div>');var i=t.next("div.select-styled");i.text(t.children("option").eq(0).text());for(var s=$("<ul />",{class:"select-options"}).insertAfter(i),l=0;l<e;l++)$("<li />",{text:t.children("option").eq(l).text(),rel:t.children("option").eq(l).val()}).appendTo(s);var c=s.children("li");i.click(function(t){t.stopPropagation(),$("div.select-styled.active").not(this).each(function(){$(this).removeClass("active").next("ul.select-options").hide()}),$(this).toggleClass("active").next("ul.select-options").toggle()}),c.click(function(e){e.stopPropagation(),i.text($(this).text()).removeClass("active"),t.val($(this).attr("rel")),s.hide()}),$(document).click(function(){i.removeClass("active"),s.hide()})})});