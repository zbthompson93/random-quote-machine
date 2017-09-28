$(document).ready(function() {
  var quote;
  var author;
  $("#getQuote").on("click", (function() {
      $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(JSON) {
        $("#quote").text(JSON.quoteText);
        $("#author").text(JSON.quoteAuthor);
        quote = JSON.quoteText;
        author = JSON.quoteAuthor;
      });
  }));

     $('#tweet').on("click", function() {
    window.open('https://twitter.com/intent/tweet?text=' + '"'  + quote +'" ' +  author);
  });

});
