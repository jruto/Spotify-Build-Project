

loadImages = ()=>{
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, {
        method: "GET",
        headers: {
          "x-rapidapi-key": "6dd0f092dfmshc7c788985801fa3p1b5331jsncbb8c36c49bb",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      })

      .then(response => response.json())
      .then(data => console.log(data))
}

window.onload = ()=>{
    loadImages()
}