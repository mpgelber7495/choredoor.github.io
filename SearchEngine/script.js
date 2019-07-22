let googleSearch = document.getElementById('google_search');
let searchValue = document.getElementById('form-search').value;
let searchBar = document.getElementById('form-search');
let responseArea = document.getElementById('response');
let alertImage = document.getElementById('alert');


function showResponse () {
  let searchValue = document.getElementById('form-search').value;
  responseArea.removeAttribute('hidden');
  responseArea.innerHTML = ("Warning, you've been hacked. We have stored your search value: " + searchValue);
  alertImage.removeAttribute('hidden');

}






googleSearch.onclick = () => {

  let searchValue = document.getElementById('form-search').value;
  showResponse(searchValue);
}
