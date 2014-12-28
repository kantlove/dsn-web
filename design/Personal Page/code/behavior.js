$ = jQuery.noConflict();
$(document).ready(function(e) {
    var pageWidth = $(document).width(), pageHeight = $(document).height();
    console.log('pageW: ' + pageWidth, 'pageH: ' + pageHeight);

    /* arrange elements */
    arrangeElmts();
    $(window).resize(function() {
        arrangeElmts();
    });

    // button scroll to top
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    function arrangeElmts() {
        var pageWidth = $(document).width(), pageHeight = $(document).height();
        var posts = $('#userPosts');
        var itemList = $('.postItem');
        var totalH = 0, itemPadding = 10, margin = 50;
        // setting button
        var isSettingOpened = false;
        $('#settingBtn').click(function() {
            isSettingOpened == false? $('li.has-sub ul').css({visibility: 'visible'}) : $('li.has-sub ul').css({visibility: 'collapse'});
            isSettingOpened = !isSettingOpened;
        });

        // align the list
        posts.css({left: pageWidth / 4});

        // align each item
        $.each(itemList, function() {
            // 
            var comments = $(this).children('.commentList');

            // recalculate height
            var lastChild = $(this).children().last();
            var itemH = lastChild.position().top + lastChild.last().height() - 30;

            $(this).css({top: totalH});
            $(this).height(itemH + itemPadding * 2); // 10 is padding
            $(this).children('.postImg').width($(this).width() + itemPadding * 2);
            //console.log($(this).children('.postImg'));
            totalH += itemH + itemPadding * 2 + margin;
        });

        // align buttons on menu   
        var cnt = $('#avatarDiv').position().left + $('#avatarDiv').width();
        $.each($('#userMenu').children('button.userMenuItem'), function(idx, value) {
            $(value).css({left: cnt});
            cnt += $(value).width();
        });
        var followBtn = $('#followBtn');
        if(followBtn != null)
            followBtn.css({left: cnt + 100});

        posts.height(totalH);

        $('#bodyDiv').height(posts.height() + 60);
    }

});