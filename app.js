const list = document.querySelector('#list')
const inputs = document.querySelectorAll('input')
const add = document.querySelector('#add')
//CRUD Http methods
//C-reate POST 
//Read-GET
//U-PUT
//D-DELETE  
// const url = 'https://dummyjson.com/recipes'
async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()
    console.log(data.recipes);
    showProducts(data.recipes)


  }       catch (err) {
         console.log(err);

  }
}
getProducts()
function showProducts(arr) {
  for (const pr of arr) {
    list.innerHTML += `
  <li>
  <h4> ${pr.name} </h4>
  <p>${pr.id}</p>
  <img src=${pr.image}/>
  <button>Upadate</button>
  </li>

  `
  }
}



async function delProduct(id) {
  try{
    const res=await fetch(url+'/'+id,{
      method:'DELETE',
      headers:{
          'Content-Type': 'applicatoion/json'
      }
    })
    const data=await res.json()
    console.log(data);
    getProducts()

  }catch(err){
    console.log(err);
    
  }
}




async function changeProduct(id){
  const inputTitle=prompt('Enter title')
  const img=prompt('Enter image url')
  const res=await fetch(`${url}/${id}`,{
    method:"PUT",
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify({title:inputTitle, image:img})
  })
  const date=await res.json()
  getProducts()
}



async function createProduct(params){
  const res =await fetch(url,{
    method:"POST",
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify({
      title:inputs[0].value,
      price:inputs[1].value,
      image:inputs[2].value
    })

  })
  const data=await res.json()
  console.log(data);
  
  getProducts()
}
add.onclick=()=>{
  createProduct()
}