export const handleGetProductLocalStorage=()=>{
    const product=JSON.parse(localStorage.getItem("products"));
    if (product) {
        return product
    }else{
        return[]
    }
}
export const setInLocalStorage=(productIn)=>{
    if (productIn) {
        let productInLocal=handleGetProductLocalStorage();
        const existingIndex=productInLocal.findIndex((productLocal)=>
            productLocal.id==productIn.id
        )
        if (existingIndex!=-1) {
            productInLocal[existingIndex]=productIn
            
        }else{
            // Si existe se remplaza
            productInLocal.push(productIn)
        }
        localStorage.setItem("products",JSON.stringify(productInLocal))
    } 
}