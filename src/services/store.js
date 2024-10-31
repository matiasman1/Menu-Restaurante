import { handleGetProductLocalStorage } from "./persistence/localStorage"
import { setProductoActivo } from "../../main"
import { openModal } from "./modal"
export const handleGetProductToStore =()=>{
    const products=handleGetProductLocalStorage()
    handleRenderList(products)
}
export const handleRenderList=(productosIn)=>{
    const burgers=productosIn.filter((el)=>el.categories=="Hamburguesas")
    const papas=productosIn.filter((el)=>el.categories=="Papas")
    const gaseosas=productosIn.filter((el)=>el.categories=="Gaseosas")

    const rederProductGroup =(productos,title)=>{
        if (productos.length >0) {
            const productosHTML=productos.map((producto,index)=>{
                return `
                <div class='containerTargetItem' id="product-${producto.categories}-${index}">
                    <div >
                        <img src="${producto.imagen}">/>
                        <div> 
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class='targetProps'>
                            <p><b>Precio:</b> $ ${producto.precio}</p>
                           
                        </div>
                    </div>
                </div>
                `;
            })
            return `
                <section class='sectionStore'>
                <div class='containerTitleSection'>
                <h3>${title}</h3>
                </div>
                <div class='containerProductStore'>
                ${productosHTML.join("")}
                </div>
                </section>
            `;
        }else{
            return ""
        }
    }
    const appContainer=document.getElementById('storeContainer')
    appContainer.innerHTML=`
        ${rederProductGroup(burgers,"Hamburguesas")}
        ${rederProductGroup(papas,"Papas")}
        ${rederProductGroup(gaseosas,"Gaseosas")}`
    const addEvents =(productsIn)=>{
        if (productsIn) {
            productsIn.forEach((element,index )=> {
                const productContainer=document.getElementById(`product-${element.categories}-${index}`)
                productContainer.addEventListener('click',()=>{
                setProductoActivo(element)
                openModal()                    
                })
            });
        }
    }
    addEvents(burgers)
    addEvents(papas)
    addEvents(gaseosas)
}