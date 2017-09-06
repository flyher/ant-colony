if (window.location.protocol === 'http:' || window.location.protocol === 'HTTP:') {
  window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}