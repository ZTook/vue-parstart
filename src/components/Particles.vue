 <template>
   <div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      >
    </vue-particles>
    <div id="front">
      <h2>心兮藏柚</h2>
    </div>
   </div>
 </template>

 <script>
 export default {
   name: 'Particles',
   data () {
     return {
       msg: 'Welcome to Your new Particles'
     }
   }
 }
 </script>

 <style>
 #front {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   -webkit-transform: translate(-50%, -50%);
   -moz-transform: translate(-50%, -50%);
   text-align: center;
   transition: 1s;
   x-index: 999;
 }
 </style>
