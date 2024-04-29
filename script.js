async function getPosts (){
    const url = "https://jsonplaceholder.typicode.com/posts";

    try{
        const resultado = await fetch(url);
        const data = await resultado.json(); 
        const postData = document.getElementById("post-data")

        data.forEach(element => {
            postData.innerHTML +=
            ` <div>
               <li> 
               userId: ${element.userId}<br>
               id: ${element.id}<br>
               title: ${element.title}<br>
               body: ${element.body}</li>
               <br></div>`
            }); 

            return data;
         
    } catch (error) {
        console.log("Error al obtener los datos");
    }
    
}

