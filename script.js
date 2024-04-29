async function getPosts (){
    const url = "https://jsonplaceholder.typicode.com/posts";

    try{
        const resultado = await fetch(url);
        const data = await resultado.json(); 
        const postData = document.getElementById("post-data")

        data.forEach(element => {
            postData.innerHTML +=
            ` <div>
               <li> userId: ${element.userId}</li>
               <li>id: ${element.id}</li>
               <li>title: ${element.title}</li>
               <li>body: ${element.body}</li>
               </div>`
            }); 

            return data;
         
    } catch (error) {
        console.log("Error al obtener los datos");
    }
    
}

