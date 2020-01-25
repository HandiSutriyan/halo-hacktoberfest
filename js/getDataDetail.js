function getParam(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
 
 $.getJSON("../data/data.json", function(result){
    let id = getParam('id');
    console.log(result[id]);
    let card = document.getElementById('card');

    console.log(result[id].Tim);
      let gridImg = document.createElement('div');
        gridImg.setAttribute('class','l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2');

      let gridTxt = document.createElement('div');
        gridTxt.setAttribute('class','l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2');

      let container1 = document.createElement('div');
        container1.setAttribute('class','card');
    
      let container2 = document.createElement('div');
        container2.setAttribute('class','card2');

      let img_container= document.createElement('div');
        img_container.setAttribute('class','card-img-container');

      let img = document.createElement('img');
        img.setAttribute('src','/img/no-thumbnail.jpg');
        img.setAttribute('class','image');

      let middle = document.createElement('div');
        middle.setAttribute('class','middle');

      let text = document.createElement('div');
        text.setAttribute('class','text');
   
      let link = document.createElement('a');
        link.setAttribute('href','#');
        link.textContent = "Lihat";

        let cardContainer = document.createElement('div');
        cardContainer.setAttribute('class','card-container');
        cardContainer.setAttribute('title','Klik untuk vote');
   
        let h4 = document.createElement('h4');
        h4.textContent = 'Tim: '+result[id].Tim;
   
        let p = document.createElement('p');
        p.textContent = 'Kelas: '+result[id].Kelas;

        let ul = document.createElement('ul');

        let li1 = document.createElement('li');
        li1.textContent = 'Ketua: '+result[id].Ketua;

        let li2 = document.createElement('li');
        li2.textContent = 'Anggota 1: '+result[id].Anggota1;
        
        let li3 = document.createElement('li');
        li3.textContent = 'Anggota 2: '+result[id].Anggota2;

        let iconV = document.createElement('i');
        iconV.setAttribute('class','fa fa-heart');

        let linkV = document.createElement('a');
        linkV.setAttribute('href','#');
        linkV.setAttribute('class','button-xsmall pure-button pure-button-ok');
        linkV.onclick = alert('halo');
        linkV.textContent = "Vote ";

        let iconP = document.createElement('i');
        iconP.setAttribute('class','fa fa-eye');

        let linkP = document.createElement('a');
        linkP.setAttribute('href','#');
        linkP.setAttribute('class','button-xsmall pure-button');
        linkP.appendChild(iconV);
        linkP.textContent = " Kunjungi Laman ";

        let iconB = document.createElement('i');
        iconB.setAttribute('class','fa fa-arrow-left');

        let linkB = document.createElement('a');
        linkB.setAttribute('href','vote.html');
        linkB.setAttribute('class','button-xsmall pure-button');
        linkB.appendChild(iconV);
        linkB.textContent = " Kembali ";

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
      
        img_container.appendChild(img);
        text.appendChild(link);
        middle.appendChild(text);
        img_container.appendChild(middle);

        cardContainer.appendChild(h4);
        cardContainer.appendChild(ul);
        cardContainer.appendChild(p);
        linkV.appendChild(iconV);
        cardContainer.appendChild(linkV);
        linkP.appendChild(iconP);
        cardContainer.appendChild(linkP);
        linkB.appendChild(iconB);
        cardContainer.appendChild(linkB);

        container1.appendChild(img_container);
        container2.appendChild(cardContainer);
        gridImg.appendChild(container1);
        gridTxt.appendChild(container2);
        card.appendChild(gridImg);
        card.appendChild(gridTxt);


   });