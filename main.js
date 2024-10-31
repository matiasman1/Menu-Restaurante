import { renderCategories } from "./src/services/categories.js";
import { handleSearch } from "./src/services/searchBar.js";
import { openModal } from "./src/services/modal.js";
import { handleGetProductLocalStorage } from "./src/services//persistence/localStorage";

export let categoriaActiva=null
export const setCategoriaActiva=(categoriaIn)=>{
    categoriaActiva=categoriaIn
}
export let productoActivo=null
export const setProductoActivo=(productoIn)=>{
    productoActivo=productoIn
}
handleGetProductLocalStorage()
renderCategories()

// HEADER
const buttonAdd=document.getElementById('buttonAddElement')
buttonAdd.addEventListener('click',()=>{
    openModal()
})
// BUTTON SEARCH
const buttonSearch=document.getElementById('buttonSearch')
buttonSearch.addEventListener('click',()=>{
    handleSearch()
})