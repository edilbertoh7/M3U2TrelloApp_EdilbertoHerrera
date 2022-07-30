const usuarios= [];
axios.get(`${API_URL}/users.json`)
.then(function (response) {
    const data = response.data
  
    
    const responsible = document.getElementById("responsible")

    for (const id in data) { 
        usuarios.push({"username":data[id].name,"ide":id})
    }
    //responsible.options[0]=  Option('sle', 'value : 0')
    for (let i = 0; i < usuarios.length; i++) {
        responsible.options[i+1]= new Option(usuarios[i].username, 'value :'+usuarios[i].ide)
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })