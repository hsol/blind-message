function getUrlParams() {
  var params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
    params[key] = value;
  });
  return params;
}

function convertToCorsUrl(url) {
  var protocol = (window.location.protocol === 'http:' ? 'http:' : 'https:');
  return protocol + '//cors-anywhere.herokuapp.com/' + url;
}

function setLoaded() {
  document.body.classList.add('loaded');
}