import { handleRenderList } from "./store"
import { handleGetProductLocalStorage } from "./persistence/localStorage.js"

export const handleSearch = ()=>{
    const inputSearch = document.getElementById('inputHeader')
    if (!inputSearch || !inputSearch.value) {
        console.error("Campo de búsqueda no encontrado o vacío");
        return;
    }
    console.log(inputSearch.value)
    const product = handleGetProductLocalStorage()
    const searchText = inputSearch.value.toLowerCase().trim();
    const result = product.filter((el) => {
        return el.nombre && el.nombre.toLowerCase().includes(searchText);
    });

    handleRenderList(result);

}