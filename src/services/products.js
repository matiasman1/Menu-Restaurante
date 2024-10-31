import { productoActivo } from "../../main.js"
import { handleGetProductLocalStorage, setInLocalStorage } from "./persistence/localStorage.js"
import { closeModal } from "./modal.js"
import { handleGetProductToStore, handleRenderList } from "./store.js"

const acceptButton=document.getElementById('acceptButton')
acceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElements()
})
const handleSaveOrModifyElements=()=>{
    const nombre=document.getElementById('nombre').value,
         imagen=document.getElementById('img').value,
         precio=document.getElementById('precio').value,
         categories=document.getElementById('categoria').value
    let object=null
    if (productoActivo) {
        object={
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories
        }
    }else{
            object={
            id:new Date().toISOString(),  
            nombre,
            imagen,
            precio,
            categories
        }
    }
    setInLocalStorage(object)
    handleGetProductToStore()
    closeModal()
        
}
export const handleDeleteProduct=()=>{
            const products=handleGetProductLocalStorage()
            const result=products.filter((el)=>el.id!=productoActivo.id)
            localStorage.setItem("products",JSON.stringify(result))
            const newProducts=handleGetProductLocalStorage()
            handleRenderList(newProducts)
            closeModal()
      };
   
