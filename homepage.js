
/* <div class="good-morning-card ml-3 mt-4 mb-3 active ">
                                <div  class="row no-gutters">
                                    <div class="col-3">
                                        <img src="/assets/1.jpg"
                                            style="border-radius: 4px" width="80" />
                                    </div>
                                    <div class="col-5 ml-5">
                                        <div class="card-body">
                                            <h6 class="card-title text-white">
                                                Burning Jazz-rock Fusion
                                            </h6>
                                            <button id='btn-with-style' type="button" onclick="playTrack()" class="btn btn-success">▶️</button>
                                        </div>
                                    </div>
                                </div> */
  loadImages = ()=>{
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen", {
      
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data)

        const row = document.querySelector(".good-morning-card")
            row.innerHTML = " "

                    data.data.forEach(ele => {
                        const col = document.createElement("div")
                        col.classList.add("col-12", "col-md-4", "d-flex", "mb-3")

                        const img = document.createElement("img")
                        img.src = ele.md5_image
                        img.classList.add("img-fluid", "h-100", "w-100")
                        img.style.objectFit = "cover"

                        // ######################
                        // This is where we create the link with pagename + query string + dynamic photo id
                        /* img.onclick = () => {
                            window.location.assign("./details.html?picId=" + photo.id)
                        }

                        // changing the mouse cursor to the pointer like a link would have
                        img.style.cursor = "pointer" */

                        col.appendChild(img)
                        row.appendChild(col)
        
            })
        })
            
    
    .catch(err => console.error(err))
    
        }
        window.onload = ()=>{
            loadImages()

        }
    

    