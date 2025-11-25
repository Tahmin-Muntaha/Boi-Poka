const added=()=>{
    const data=localStorage.getItem('wishList')
    if(data){
        return JSON.parse(data)
    }
    else{
        return []
    }
}
const addtoWishList=(id)=>{
    const data=added()
    if(data.includes(id)){
        alert('Book is already in wishlist')
    }
    else{
        data.push(id)
        const final=JSON.stringify(data)
        console.log(data)
        localStorage.setItem('wishList',final)
    }
}
export {addtoWishList,added}