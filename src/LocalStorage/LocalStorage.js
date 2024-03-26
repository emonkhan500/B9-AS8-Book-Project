const getReadBooks=()=>{
    const readedBooks=localStorage.getItem('readedBook')
    if(readedBooks){
        return JSON.parse(readedBooks)
    }
    return[];
};

const readBooks=(selectedBook)=>{

const readedBook=getReadBooks()
const exists=readedBook.find(readedbook=>readedbook.bookId===selectedBook.bookId)
if(!exists){
    readedBook.push(selectedBook);
    localStorage.setItem('readedBook',JSON.stringify(readedBook))
}
}

// wishlist er jonno

const getWishList=()=>{
    const addedWishBook=localStorage.getItem('wish')
    if(addedWishBook){
        return JSON.parse(addedWishBook)
    }
    return[];
}
const saveWishlist=(selectedBook)=>{

    const addedWishBook=getWishList()
    const exists=addedWishBook.find(wishBook=>wishBook.bookId===selectedBook.bookId)
    if(!exists){
        addedWishBook.push(selectedBook);
        localStorage.setItem('wish',JSON.stringify(addedWishBook))
    }
}
export{readBooks,getReadBooks,saveWishlist,getWishList}