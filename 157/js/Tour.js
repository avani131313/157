AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id)
      
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
      // Title Text Element
      const titleEl = this.createTitleEl(position,item)
      borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl);

    }
  },
  createBorder: function(position,id){
    const entity_el = document.createElement("a-entity")
    entity_el.setAttribute("id",id)
    entity_el.setAttribute("visible",true)
    entity_el.setAttribute("geometry",{
      primitive:"ring",radiusInner:9, radiusOuter:10

    })
    entity_el.setAttribute("position",position)
    entity_el.setAttribute("material",{
      color:"red",
      opacity:0.4

    })
    return entity_el
  },

  createThumbnail: function(item){
    const entity_el = document.createElement("a-entity")
    
    entity_el.setAttribute("visible",true)
    entity_el.setAttribute("geometry",{
      primitive:"circle",radius:9

    })
    
    entity_el.setAttribute("material",{
      src:item.url

    })
    return entity_el
  },

  createTitleEl: function(position,item){
    const entity_el = document.createElement("a-entity")
    entity_el.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width: 60,
      color:"blue",
      value:item.title
      
    })
    entity_el.setAttribute("visible",true)
    
    entity_el.setAttribute("position",position-20)
    
    return entity_el
  }
  
});
