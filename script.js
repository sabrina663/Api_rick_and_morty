function api(){
    let url = 'https://rickandmortyapi.com/api/character'
    let xml = new XMLHttpRequest()
    xml.open('get',url)
    xml.onreadystatechange = () => {
        if(xml.readyState == 4 && xml.status == 200){
            let dadosXml = xml.responseText
            let dadosJson = JSON.parse(dadosXml)

            
            let container = document.getElementById('container')
            for(let i in dadosJson.results){
                

                let objJson = dadosJson.results[i]

                /* inclusao da imagem */
                let card = document.createElement('div')
                card.className = 'card mb-3 p-3 border border-dark '
                card.setAttribute('style','max-width: 520px;')
                let row = document.createElement('div')
                row.className = 'row g-0'
                let col = document.createElement('div')
                col.className = 'col-md-4'
                let img = document.createElement('img')
                img.className = 'card-img-top border border-dark'
                img.setAttribute('width','100%')
                img.src = objJson.image
                /* inclusao de text */
                let colName = document.createElement('div')
                colName.className ='col-md-8 p-4'
                let cardBody = document.createElement('div')
                cardBody.className ='card-Body'
                let Name = document.createElement('p')
                let gender = document.createElement('p')
                let species = document.createElement('p')
                let status = document.createElement('p')

               
                

                Name.innerHTML = '<strong>Nome: </strong>'+ objJson.name + '<br>'
                gender.className ='card-text'
                gender.innerHTML = '<strong>Genero: </strong>'+ objJson.gender + '<br>'
                species.className ='card-text'
                species.innerHTML = '<strong>Especie: </strong>'+ objJson.species + '<br>'
                status.className ='card-text'

                
                /* adicao da img */
                card.appendChild(row)
                row.appendChild(col)
                col.appendChild(img)
                container.appendChild(card)
                
                /* adicao do text */
                row.appendChild(colName)
                colName.appendChild(cardBody)
                cardBody.appendChild(Name)
                cardBody.appendChild(gender)
                cardBody.appendChild(species)
                cardBody.appendChild(status)
                
                /* status */
                let small = document.createElement('small')
                if(objJson.status == 'Alive'){
                    small.innerHTML = '<strong>Status: </strong> <i class=" fas fa-circle" style="color:green"></i>' 
                }else if(objJson.status == 'Dead'){
                    small.innerHTML = '<strong>Status: </strong> <i class=" fas fa-circle" style="color:red"></i>' 
                }else{
                    small.innerHTML = '<strong>Status: </strong> <i class="fas fa-question-circle" style="color:gray"></i>' 
                }
                status.appendChild(small)
                

            }

        }
    }
    xml.send()
    
}

window.addEventListener('load',api)
