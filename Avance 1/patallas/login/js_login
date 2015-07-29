var user = {
  _key: '0901f261-121e-6748-97f5-94deb654f97d',
  app_code: 'tococo',
  accName: 'guest',
  passwd: 'guest'
};

$.getScript("http://tococo.coimapi.tw/coim.js",
  //$.getScript("http://app.ezoui.com/home/demo/coim.js",
  function (data, textStatus, jqxhr) {
    $('#loginBtn').removeClass('ui-disabled');
  });

$(document).on("pageshow", function () {
  $('#loginBtn').on('click', function () {
    user.accName = $('#accName').val();
    user.passwd = $('#passwd').val();
    //login
    coimlogin(user, function (data) {
      if (data.errCode == 0) {
        $.mobile.changePage('#books');
        api("book/book/search", {
            "kw": "HTML5",
            "_ps": 100
          },
          function (list) {
            $('#booklist').show();
            $('#booklist').gk('model', list);
          });
      }
    });
  });
});

$(document).on('pageinit', '#books', function () {
  $('#booklist').hide();
  //search keyin
  $('#search').on('keyup', function (e) {
    var keyword = e.target.value.trim();
    if (keyword == '') {
      $('#booklist').gk('model', []);
    } else {
      api("book/book/search", {
          "kw": keyword
        },
        function (list) {
          $('#booklist').gk('model', list);
        });
    }
  });
  //select book
  $('#booklist').gk('onRow', function (li) {
    $.mobile.changePage('#bookinfo');
    $('#bookicon').attr('src', li.find('img').attr('src'));
    $('#bookname').html(li.find('h2').html());
    var bkID = li.attr('bkID');
    console.log('bkID', bkID);
    api('book/book/info/' + bkID, {}, function (info) {
      $('#price').html('售價 : ' + info.price);
      $('#pages').html('頁數 : ' + info.pages);
      $('#bnAbstract').html('<h2>摘要</h2>' + info.bnAbstract);
    });
  });

});

function api(name, param, callback) {
  coim.send(
    name, param,
    function (result) {
      var list = result.value.list;
      if (list) {
        var url = 'http://' + user.app_code + '.coimapi.tw/book/auxi/node?_key=' + user._key + '&path=';
        $.each(list, function (idx, ele) {
          if (ele.icon != "undefined") {
            ele.icon = url + ele.icon;
          }
        });
        callback(list);
      } else {
        callback(result.value);
      }
    },
    function (err) {
      // do your stuff with err
    },
    function () {
      // do your stuff while token invalid
    });
}

function coimlogin(user, callback) {
  coim.setDebug(true);
  coim.initSDK(user._key, user.app_code);
  coim.login(
    "core/user/login", {
      "accName": user.accName,
      "passwd": user.passwd
    }, callback,
    function (err) {
      console.log('err:', err);
      // do your stuff with err
    });
}
