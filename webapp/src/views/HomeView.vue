<template>
  <div class="homepage">
    <h1 class="begin">Welcome to the Wrestling Express</h1>
    <div class="home">
      <img src="https://i.postimg.cc/26WffpLP/pngfind-com-wwe-roman-reigns-png-6136145.png" alt="Roman Pic" >
      <div class="text mt-5">
        <h1 class="display-6">Wanna Be a Pro?</h1>
        <p>
          Some of us think that being a professional wrestler
          is easy, well... with this card game you put that to
          the test by battling your friends and based on your
          knowledge on any certain wrestler you can ...how do 
          they say, pin your opponent... 1👊 ... 2 👊👊... 3!!! 👊👊👊
        </p>
      </div>
    </div>
  </div>

  <div class="what">
    <div class="main">
      <div class="text">
        <h1>What is Professional Wrestling?</h1>
        <h5>You think you know?</h5>
        <p>Professional wrestling is a form of theater that revolves around mock combat matches that are usually performed in a ring similar to the kind used in boxing. The dramatic aspects of pro wrestling may be performed both in the ring or—as in televised wrestling shows—in backstage areas of the venue, in similar form to reality television.</p>
      </div>
      <img src="https://i.postimg.cc/C5p7LzN9/c93f5fd8462dc2d4b9d424f77cc46d32-removebg-preview.png" alt="aj">
    </div>
  </div>
  <div class="what">
    <div class="main">
      <div class="text">
        <img src="https://i.postimg.cc/DwZjm6m1/adam-cole-removebg-preview.png" alt="adam cole">
        <h1>Do You Wanna Be a Star?</h1>
        <p>We all had that dream to become professional wrestlers at one point, this game not only embarks in the journey of gaming with wrestling, but it also provides the opportunity to meet your favorite pro wrestler and ....WORK WITH THEM ON TV!!!! </p>
      </div>
    </div>
  </div>
  <div class="what">
    <div class="main">
      <div class="texts">
        <h1>Are You The Best In The World?</h1>
        <p>Prove it by getting yourself involved in story lines against strangers, neighbors and even family. Every month is a brand new pay-per-view so make sure you choose your cards wisely. This game is how you prove you are indeed the ...How does CM Punk put it..."Best In The World"</p>
      </div>
      <img src="https://i.postimg.cc/kXXNJ5hH/cm-punk-removebg-preview-1.png" alt="cm punk">
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'home-'
}
</script>
  
  
<style scoped>
.begin{
  font-family: Fredoka One;
}
h1{
  font-family: Pacifico;
  margin: 20px;
}
.home{
  display: flex;
  justify-content: space-around;
  margin: 40px 0px;
  padding: 30px;
 
}
.home img{
  width: 25rem;
 
}
.home .desc {
  border-left: 2px solid;
  border-right: 2px solid;
  border-bottom: 2px solid;
  border-radius: 10px;
}
.home .desc h3{
  font-family: Fredoka One;
  border-bottom: 1px solid;
  border-width: 5px;
}
.home .desc p{
  letter-spacing: 0.4px;
  width: 25vw;
  font-size: 1.6rem;
}
.what{
  width: 100%;
  padding: 78px 0px;
}
.what img{
  height: auto;
  width: 420px;
}
.text{
  width: 550px;
}
.texts{
  width: 550px;
  font-family: Fredoka One;
  font-size: 18px;
}
.text img{
  width: 850px;
  margin-left: -30%;
}
.main{
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.text h1{
  font-size: 40px;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.text h3{
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
}
.text p{
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;
  font-family: Fredoka One;
}

</style>
