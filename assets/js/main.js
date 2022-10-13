let shoppingList = ['Riso Basmati', 'Gallette di Riso', 'Spinaci', 'Insalata Iceberg', 'Tonno in Scatola']


let olElement = document.querySelector('ol');


let i = 0;

while ( i< shoppingList.length){
    let articles = shoppingList[i];
    let liElement = `<li>${articles}</li>`;
    olElement.insertAdjacentHTML('beforeend', liElement);
    i++
}