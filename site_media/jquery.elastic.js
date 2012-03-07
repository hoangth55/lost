(function (jQuery) {
    jQuery.fn.extend({
        elastic: function () {
            var mimics = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'fontSize', 'lineHeight', 'fontFamily', 'width', 'fontWeight', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'borderTopStyle', 'borderTopColor', 'borderRightStyle', 'borderRightColor', 'borderBottomStyle', 'borderBottomColor', 'borderLeftStyle', 'borderLeftColor'];
            return this.each(function () {
                if (this.type !== 'textarea') {
                    return false
                }
                var $textarea = jQuery(this),
                    $twin = jQuery('<div />').css({
                        'position': 'absolute',
                        'left': '-999em',
			'top': 0,
                        'word-wrap': 'break-word'
                    }),
                    lineHeight = parseInt($textarea.css('line-height'), 10) || parseInt($textarea.css('font-size'), '10'),
                    minheight = parseInt($textarea.css('height'), 10) || lineHeight * 3,
                    maxheight = parseInt($textarea.css('max-height'), 10) || Number.MAX_VALUE,
                    goalheight = 0;
                if (maxheight < 0) {
                    maxheight = Number.MAX_VALUE
                }
			
		$twin.attr('class', 'elastic-div');

		$textarea.parent().find('.elastic-div').remove();

                $twin.appendTo($textarea.parent());
                var i = mimics.length;
                while (i--) {
                    $twin.css(mimics[i].toString(), $textarea.css(mimics[i].toString()))
                }
                function setTwinWidth() {
                	return; //this function causes browser crashes so I disabled it - Mike
                    curatedWidth = Math.floor(parseInt($textarea.width(), 10));
                    if ($twin.width() !== curatedWidth) {
                        $twin.width(curatedWidth + 'px');
                        update(true)
                    }
                }
                function setHeightAndOverflow(height, overflow) {
                    var curratedHeight = Math.floor(parseInt(height, 10));
                    if ($textarea.height() !== curratedHeight) {
                        $textarea.css({
                            'height': curratedHeight + 'px',
                            'overflow': overflow
                        });
                        $textarea.trigger('resize')
                    }
                }
                function update(forced) {
				
                    var textareaContent = $textarea.val().replace(/&/g, '&amp;').replace(/ {2}/g, '&nbsp;').replace(/<|>/g, '&gt;').replace(/\n/g, '<br />');
			                    
		    var twinContent = $twin.html().replace(/<br>/ig, '<br />');
                    if (forced || textareaContent + '&nbsp;' !== twinContent) {
                        $twin.html(textareaContent + '&nbsp;');
                        if (Math.abs($twin.height() + lineHeight - $textarea.height()) > 3) {
                            var goalheight = $twin.height() + 5;
			    
                            if (goalheight >= maxheight) {
                                setHeightAndOverflow(maxheight, 'auto')
                            } else if (goalheight <= minheight) {
                                setHeightAndOverflow(minheight, 'hidden')
                            } else {
                                setHeightAndOverflow(goalheight, 'hidden')
                            }
                        }
                    }

                }
                $textarea.css({
                    'overflow': 'hidden'
                });

			$textarea.bind('keyup change cut paste', function () {
                   		 update()
                	});
			$textarea.bind('resize', setTwinWidth);
			$textarea.bind('update', update);
			$textarea.bind('input paste', function (e) {
                    		setTimeout(update, 250)
                	});


                jQuery(window).bind('resize', setTwinWidth);
                update()
            })
        }
    })
})(jQuery);
