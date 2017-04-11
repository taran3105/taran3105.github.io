window.$ && $(function() {
				var
				/**
				 *Receipt Address
				 * @type {jQuery}
				 */
					$addrs = $('.shipping-address .addr'),
					activeAddrClass = 'addr-active',
					index = {
						/**
						 * Entry Function
						 */
						init: function() {
							this.addrFuncs();
						},
						/**
						 * Logical Function
						 */
						addrFuncs: function() {
							var that = this,
								hoverClass = 'addr-hover';
							$addrs.each(function() {
								$(this).hover(function() { //Change the style
									$(this).addClass(hoverClass);
								}, function() {
									$(this).removeClass(hoverClass);
								});
								$(this).click(function(e) { //Click to select
									e.preventDefault();
									/**
									 * If not selected, then select
									 */
									if (!$(this).hasClass(activeAddrClass)) that.setAddrSeled(this);
								})
							});
							/**
							 * Set Default
							 */
							var $active = $('.' + activeAddrClass);
							if ($active.length) {
								this.setAddrSeled($active);
							} else { //select first address when no default
								$($addrs[0]).click();
							}
						},
						/**
						 * Select address
						 * @param {String|JQuery} placeholder selected
						 */
						setAddrSeled: function(placeholder) {
							$addrs.removeClass(activeAddrClass);
							$(placeholder).addClass(activeAddrClass);
							/**
							 * select value to get
							 */
							$('#addr-prov').val($('.prov', placeholder).text());
							$('#addr-city').val($('.city', placeholder).text());
							$('#addr-name').val($('.name', placeholder).text());
							$('#addr-dist').val($('.dist', placeholder).text());
							$('#addr-town').val($('.town', placeholder).text());
							$('#addr-street').val($('.street', placeholder).text());
							$('#addr-phone').val($('.phone', placeholder).text());
						}
					}
				index.init();
			});