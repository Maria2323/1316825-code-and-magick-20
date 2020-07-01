'use strict';

(function () {
  var URL = 'https://javascript.pages.academy/code-and-magick/data';
  var statusCode = {
    OK: 200
  };

  window.backend.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === statusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(xhr.statusText);
      }
    });

    xhr.open('GET', URL);
    xhr.send();
  };
  window.backend.save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === statusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(xhr.statusText);
      }
    });

    xhr.open('POST', URL);
    xhr.send();
  };
})();
