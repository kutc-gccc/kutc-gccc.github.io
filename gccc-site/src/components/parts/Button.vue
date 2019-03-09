<template>
  <a class="btn btn-icon btn-twitter" href="https://twitter.com/gcccinfo" target="_blank">
    <i class="fab fa-twitter"></i>
    <span>Twitter</span>
  </a>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
}
</script>

<style scoped>
.btn {
  clear: both;
  white-space: nowrap;
  font-size: 1em;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.35);
  margin: 2px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  overflow: hidden;
}

.btn:hover {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.45);
}

.btn:focus {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.4);
}

.btn > span,
.btn-icon > i {
  float: left;
  padding: 13px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  line-height: 1em;
}

.btn > span {
  padding: 14px 18px 16px;
  white-space: nowrap;
  color: #fff;
  background: #b8b8b8;
}

.btn:focus > span {
  background: #9a9a9a;
}

.btn-icon > i {
  border-radius: 5px 0 0 5px;
  position: relative;
  width: 13px;
  text-align: center;
  font-size: 1.25em;
  color: #fff;
  background: #212121;
}

.btn-icon > i:after {
  content: "";
  border: 8px solid;
  border-color: transparent transparent transparent #222;
  position: absolute;
  top: 13px;
  right: -15px;
}

.btn-icon:hover > i,
.btn-icon:focus > i {
  color: #fff;
}

.btn-icon > span {
  border-radius: 0 5px 5px 0;
}

/*Twitter*/
.btn-twitter:hover > i,
.btn-twitter:focus > i {
  color: #55acee;
}

.btn-twitter > span {
  background: #55acee;
}
</style>