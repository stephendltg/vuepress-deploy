<template>
  <h6>Choisissez l´air que vous respirez</h6>
</template>

<script>

	


export default {
  name: "TextMagic",
  data() {
    return {
    };
  },
  methods: {
    handleScroll(event) {
      
      let scrollUp = (window.lastScrollY < window.scrollY ? true : false);
      var nodes = document.querySelectorAll("h6 > *");
      if(window.scrollY < window.screen.height){
        for(var i=0; i<nodes.length; i++){
          var speed = /*nodes[i].speed;*/window.scrollY/nodes[i].speed;
          if(scrollUp == true){
            nodes[i].y -= speed;
            if(nodes[i].y <= 0)
              nodes[i].y = 0;
          }else{
            nodes[i].y += speed;
            if(nodes[i].y > nodes[i].originY)
              nodes[i].y = nodes[i].originY;
          }
          nodes[i].style.top = nodes[i].y+"px";
        }
      }else{
  
        for(var i=0; i<nodes.length; i++){
          if(scrollUp == true && nodes[i].opacity > 0)
            nodes[i].opacity -= 1/(1+i*1);
          //else if(scrollUp == false && nodes[i].opacity < 1)
          //  nodes[i].opacity += 1/(1+i*1);
  
          nodes[i].style.opacity = nodes[i].opacity;
        }
      }
      window.lastScrollY = window.scrollY;
      
      
    }
  },
  computed: {

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  async mounted() {
    console.log('test')
    window.lastScrollY = 0;
    var parent = document.querySelector("h6");
    var txt = parent.innerText;
    parent.innerText = "";
    for(var i=0; i<txt.length; i++){
      var letter = document.createElement("span");
      letter.speed = Math.floor(Math.random()*10)+2;
      letter.y = Math.floor(Math.random()*400)+2;
      letter.originY = letter.y;
      letter.opacity = 1;
      letter.innerText = txt[i];
      letter.style.top = letter.y+"px";
      parent.appendChild(letter);
	  }
	
	window.addEventListener('scroll', this.handleScroll);
	
  
  }
};
</script>

<style>
.home{
  margin-top: 1100px !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.front h6 {
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-delay: 1s;
  animation-name: fadeIn;
  animation-timing-function: ease-in-out;
}

.front h6{
	position: fixed;
  top: 0;
	text-align: center;
	width: 100%;
	font-size: 4em;
}

.front h6 > *{
  color: rgb(160,185,198);
	position: relative;
	display: inline-block;
	top: 0;
}


</style>
