import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements,renderLoader, clearLoader} from './views/base'
/**Global state of the app
 * search Object
 * current reciepe object
 * Shopping list object
 * Liked reciepes
 */
const state = {}
const controlSearch = async () => {
    //1. Get query from the view
    const query = searchView.getInput();
    
    if(query){
        //2.New search object and add to state
        state.search = new Search(query);

        //3.Prepare UI for the results
        searchView.cleaInput();
        searchView.clearResult();
        renderLoader(elements.searchRes);


        //4.Search for the recipes
        await state.search.getResults();
        //5.Render result on UI
        searchView.rendeResults(state.search.result);
        clearLoader();
        }
} 
document.querySelector('.search').addEventListener('submit',e=>{
    e.preventDefault(); //Stop searching on click
    controlSearch();
});

elements.searchResPages.addEventListener('click', e=>{
    const btn = e.target.closest('.btn-inline')
    if(btn){
        const goToPage =parseInt(btn.dataset.goto,10)
        searchView.clearResult();
        searchView.rendeResults(state.search.result,goToPage);
        console.log(goToPage)
    }
});

