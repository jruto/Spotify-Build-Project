
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
                                function search (query){
                                    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
                                      
                                    })
                                      .then((responseBody) => responseBody.json())
                                      .then((data) =>{
                                          console.log(data.data[1])
                                          let row =document.querySelectorAll('.pages.d-flex')[0]
                                          let column = document.createElement('div')
                                          column.classList.add("col-12","col-sm-6", "col-md-3","col-lg-4", "d-flex","flex-column", "mb-3")


                                          

                                          for(let i=0;i<data.data.length;i++){
                                            let card = document.createElement('div')
                                            
                                            console.log(card)
                                            card.innerHTML=`
                                            <div class="good-morning-card ml-3 mt-4 mb-3">
                                  <div class="row no-gutters">
                                      <div class="col-3">
                                          <img src="${data.data[i].artist.picture}"
                                              style="border-radius: 4px" width="80" />
                                      </div>
                                      <div class="col-5 ml-5">
                                          <div class="card-body">
                                              <h6 class="card-title text-white">
                                                  ${data.data[i].title}
                                              </h6>
                                              <button id='btn-with-style' type="button" class="btn btn-success">▶️</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                                `
                                column.appendChild(card)
                                row.appendChild(column)

                                          }
                                          card.addEventListener('click', () =>{

                                            window.location.assign(`./album.html?id=` + data.data[i].album.id + '&name=' + data.data[i].artist.name )
                                  
                                            //window.location.assign("./details.html?picId=" + photo.id)
                                  
                                            
                                          })

                                          
                                     
                                     
                                      })
                                  
                                  
                                  }
                                  
                                  
                                  
                                  
                                  
    
        
        window.onload = ()=>{
            search("metallica")

        }




       /*  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
https://github.com/guillermoFragachan/Spotify2/blob/main/js/strivify.js
 */
    

    