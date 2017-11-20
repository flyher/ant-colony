if (window.location.protocol.toLowerCase() === 'http:' && window.location.hostname.toLowerCase() !== 'localhost') {
  window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}