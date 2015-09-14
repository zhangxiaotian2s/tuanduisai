var tab = function(mycfg) {
	var cfg = {
		tabId: '#tab_nav',
		tabChild: 'li',
		tabContentId: '#tab_content',
		tabContentChid: '.tab_content_child',
		tabClass: 'current'
	}
	$.extend(false, cfg, mycfg);
	var tabBtn = $(cfg.tabId),
		tabBtnChild = tabBtn.children(cfg.tabChild),
		tabContent = $(cfg.tabContentId),
		tabContetChild = tabContent.children(cfg.tabContentChid);
	var tabFn = function() {
		tabBtnChild.bind('click', function() {
			var _i = $(this).index();
			$(this).addClass(cfg.tabClass).siblings(cfg.tabChild).removeClass(cfg.tabClass)
			tabContetChild.eq(_i).show().siblings(cfg.tabContentChid).hide()
			
			
		})
	}
	tabFn()

}