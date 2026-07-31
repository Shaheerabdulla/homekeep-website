function gtagSendEvent(url) {
  var callback = function () {
    if (typeof url === 'string') {
      window.location = url;
    }
  };
  gtag('event', 'WhatsApp_Click_Website', {
    'event_callback': callback,
    'event_timeout': 2000
  });
  return false;
}
