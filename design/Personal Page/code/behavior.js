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

    //------------------------
    // User menu buttons
    //------------------------
    // user post
    $("button#userPost").click(function() {
        console.log('user post click!'); 
    });

    // user profile
    $("button#userProfile").click(function() {
        console.log('user profile click!'); 
    });

    // following list
    $('button#userFollowing').click(function() {
        console.log('user following click!');
    });

    // follower list
    $('button#userFollower').click(function() {
        console.log('user follower click!'); 
    });

    //------------------------
    // Search buttons
    //------------------------
    // search button
    $('button#searchBtn').click(function(e) {
        console.log('search btn click!'); 

        var text = $('input#search').text();
        $('input#search').text('aaaa');  

        // prevent the page from scrolling to top
        e.preventDefault();
    });

    //------------------------
    // Send comment buttons
    //------------------------
    // send comment
    $('button.sendCmt').click(function() {
        // get id to identify which post
        var id = $(this).attr('id');
        // get content of the comment to post
        var text = $(this).siblings('textarea').text();

        console.log(text, 'send comment for post ' + id.slice(-1)); 
    });

    //------------------------
    // Like buttons
    //------------------------
    // like button on each post
    $('button.likeBtn').click(function() {
        // get id to identify which post
        var id = $(this).attr('id');

        console.log('like button on post ' + id.slice(-1));
    });

    //------------------------
    // Setting buttons
    //------------------------
    // setting btn click(button on top right corner)
    $('button#settingBtn').click(function(e) {
        console.log('setting open!');

        // prevent the page from scrolling to top
        e.preventDefault();
    });

    // account setting btn
    $('a#accSetting').click(function(e) {
        console.log('account setting click!'); 
        // prevent the page from scrolling to top
        e.preventDefault();
    });

    // log out
    $('a#logout').click(function(e) {
        console.log('log out!'); 

        // prevent the page from scrolling to top
        e.preventDefault();
    });

    //------------------------
    // New post buttons
    //------------------------
    // open new post editor btn
    $('button#newPostBtn').click(function(e) {
        console.log('open new post editor!');
        $('#dimBg').css({visibility: 'visible'});
        blockScrolling();
    });

    // post a new post
    $('button#postNewPost').click(function(e) {
        console.log('post a new post');
        var text = $(this).siblings('textarea').text();


        // hide the editor
        $('#dimBg').css({visibility: 'collapse'});
        restoreScrolling();
        e.preventDefault();
    });

    // cancel a new post
    $('button#cancelNewPost').click(function(e) {
        console.log('cancel!');

        // hide the editor
        $('#dimBg').css({visibility: 'collapse'});
        restoreScrolling();
        e.preventDefault();
    });

    //------------------------
    // Functions
    //------------------------
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
        
//        $('#newPostDiv').css({
//            top: pageHeight / 2 - $('#dimBg').height() / 2,
//            left: pageWidth / 2 - $('#dimBg').width() / 2
//        });
    }

    function blockScrolling() {
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    }

    function restoreScrolling() {
        $('html, body').css({
            'overflow': 'scroll',
            'height': 'auto'
        });
    }
});