function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function randomFrom(array) {
  return array[Math.floor(Math.random()*(array.length))];
}

function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function findInArray(haystack,needle) {
  let n = haystack.indexOf(needle);
  if (n > -1) {
    return n;
  } else {
    return null;
  }
}

function removeFromArray(haystack,needle) {
  for( var i = haystack.length-1; i--;){
    if ( haystack[i] == needle) { 
      haystack.splice(i, 1);
    }
  }
}

function sendEvent(c, a, l, v) {
  if (v) {
    gtag('event', a, {
      'event_category': c,
      'event_label': l,
      'value': v
    });
    //console.log('CATEGORY: '+c+', ACTION:'+a+', LABEL:'+l+', VALUE:'+v);
  } else if (l) {
    gtag('event', a, {
      'event_category': c,
      'event_label': l
    });
    //console.log('CATEGORY: '+c+', ACTION:'+a+', LABEL:'+l);
  } else {
    gtag('event', a, {
      'event_category': c
    });
    //console.log('CATEGORY: '+c+', ACTION:'+a);
  }
}