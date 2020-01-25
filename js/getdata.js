function vote(x){
   y = x+=1;
   console.log(y);
}

$.getJSON("../data/data.json", function(result){
    console.log(result);
    let card = document.getElementById('card');

    $.each(result, function(i){
      let grid = document.createElement('div');
      grid.setAttribute('class','l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3');

      let container = document.createElement('div');
      container.setAttribute('class','card');

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
     link.setAttribute('href','page-detail.html?id='+i);
     link.textContent = "Lihat";

     let cardContainer = document.createElement('div');
     cardContainer.setAttribute('class','card-container');
     cardContainer.setAttribute('title','Klik untuk vote');

     let h4 = document.createElement('h4');
     h4.textContent = result[i].Tim;

     let p = document.createElement('p');
     p.textContent = result[i].Kelas;

     let spant = document.createElement('span');
     spant.textContent = "Vote "+result[i].vote+" ";
     spant.setAttribute('id','vote');
     spant.setAttribute('value',result[i].vote);
     spant.setAttribute('onClick', vote(result[i].vote))

     let icon = document.createElement('i');
     icon.setAttribute('class','fa fa-heart');

     img_container.appendChild(img);
     text.appendChild(link);
     middle.appendChild(text);
     img_container.appendChild(middle);

     container.appendChild(img_container);
     cardContainer.appendChild(h4);
     cardContainer.appendChild(p);
     spant.appendChild(icon);
     cardContainer.appendChild(spant);
     container.appendChild(cardContainer);
     grid.appendChild(container);
     card.appendChild(grid);
    });
  });