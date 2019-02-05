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
      <md-field md-clearable>
        <label>Cleareable</label>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-field>
        <label>Password toggle</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>

      <md-field :md-toggle-password="false">
        <label>Password field without toggle</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
    </div>



  </div>
</template>

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
