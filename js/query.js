$('#search-button').click(function(event) {
  console.log('clicked');
  var searchedWords = document.getElementById('searchWords').text();
  $.ajax({
    method: "GET",
    url: 'https://en.wikipedia.org/w/api.php',
    data: { action: "query", titles: searchedWords, prop: "revisions", 
      rvprop: "content", format: "jsonfm" }, 
    success: function(data) {
      console.log(data);
    }
  });
});
