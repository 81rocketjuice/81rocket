$(function(){
    var domain = "tottamitta.tumblr.com";
    var api_key = "sZip2Y6YxHtpjqCWKUVEfrmOncL51iEowyLg5OadmT287StJOO";
    var getTag1 = "snap";
    var getTag2 = "topics";



    // LOAD SNAP
    $.ajax({
        url: "https://api.tumblr.com/v2/blog/"+domain+"/posts?api_key="+api_key+"&tag="+getTag1,
        dataType: "jsonp"
    }).done(function(evt) {
        var img = new Image();
        var ms = 200;
        var $tmpl;
        var $addLine;
        var getDate, addDate, getTitle, setTitle;
        
        // console.log(evt);
        try {
            var length = 1;
            for (var i = 0; i < length; ++i) {
                // console.log(evt.response.posts[i].type);
                switch(evt.response.posts[i].type) {
                    case "photo":
                        getDate = new Date(evt.response.posts[i].date.replace(/-/g, '/'));
                        addDate = getDate.getFullYear() + '.' + ('0'+(getDate.getMonth()+1)).slice(-2) + '.' + ('0'+(getDate.getDate())).slice(-2);

                        getTitle = evt.response.posts[i].caption;
                        if($(getTitle).find("h2")) {
                            setTitle = $(getTitle).html();
                        }
                        $addLine = "<li><a href='" + evt.response.posts[i].post_url + "' target='_blank'>";
                        $addLine += "<span class='date'>" + addDate + "</span>";
                        // $addLine += "<span class='cat'>" + evt.response.posts[i].tags[0] + "</span></dt>";
                        $addLine += "<span class='text'>" + setTitle + "</span>";
                        $addLine += "</a></li>";


                        getImg = evt.response.posts[i].photos[0].alt_sizes[0].url;
                        // console.log(getImg);

                        $addImg = "<a href='" + evt.response.posts[i].post_url + "' target='_blank'><img src='" + getImg + "' width='100%' alt=''></a>";
                        break;
                    case "text":
                        break;
                    case "quote":
                        break;
                    case "link":
                        break;
                    case "chat":
                        break;
                    case "audio":
                        break;
                    case "video":
                        break;
                }
                // console.log($addLine);
                // $("#snap .news li.loading").hide();
                $("#snap ul.snap").append($addLine);
                $("#snap figure").append($addImg);
                $("#snap p.btn a").attr('href', evt.response.posts[i].post_url);
            }
        } catch(err) {
            console.log(err);
        }
    });



    // LOAD TOPIX
    $.ajax({
        url: "https://api.tumblr.com/v2/blog/"+domain+"/posts?api_key="+api_key+"&tag="+getTag2,
        dataType: "jsonp"
    }).done(function(evt) {
        var img = new Image();
        var ms = 200;
        var $tmpl;
        var $addLine;
        var getDate, addDate, getTitle, setTitle;
        
        // console.log(evt);
        try {
            var length = evt.response.posts.length < 3 ? evt.response.posts.length : 3;
            for (var i = 0; i < length; ++i) {
                // console.log(evt.response.posts[i].type);
                switch(evt.response.posts[i].type) {
                    case "photo":
                        getDate = new Date(evt.response.posts[i].date.replace(/-/g, '/'));
                        addDate = getDate.getFullYear() + '.' + ('0'+(getDate.getMonth()+1)).slice(-2) + '.' + ('0'+(getDate.getDate())).slice(-2);

                        getTitle = evt.response.posts[i].caption;
                        if($(getTitle).find("h2")) {
                            setTitle = $(getTitle).html();
                        }
                        $addLine = "<li><a href='" + evt.response.posts[i].post_url + "' target='_blank'>";
                        $addLine += "<span class='date'>" + addDate + "</span>";
                        // $addLine += "<span class='cat'>" + evt.response.posts[i].tags[0] + "</span></dt>";
                        $addLine += "<span class='text'>" + setTitle + "</span>";
                        $addLine += "</a></li>";
                        break;
                    case "text":
                        break;
                    case "quote":
                        break;
                    case "link":
                        break;
                    case "chat":
                        break;
                    case "audio":
                        break;
                    case "video":
                        break;
                }
                // console.log($addLine);
                $("#topics .news li.loading").hide();
                $("#topics .news").append($addLine);
            }
        } catch(err) {
            console.log(err);
        }
    });

});
