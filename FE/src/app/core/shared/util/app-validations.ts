export const validatePhone = event => {
  if (event.target.value.length >= 10 && event.keyCode != 8) {
    return false;
  }
  let charCode = event.which ? event.which : event.keyCode;
  if ((charCode >= 48 && charCode <= 57) || charCode == 8) {
    return true;
  } else {
    return false;
  }
};

export const linkify = inputText => {
  let replacedText, replacePattern1, replacePattern2, replacePattern3;

  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = inputText.replace(
    replacePattern1,
    '<a class="text-urlStr" href="$1" target="_blank">$1</a>'
  );

  replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(
    replacePattern2,
    '$1<a class="text-urlStr" href="http://$2" target="_blank">$2</a>'
  );

  replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(
    replacePattern3,
    '<a class="text-urlStr" href="mailto:$1">$1</a>'
  );
  return replacedText;
};
