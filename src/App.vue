<template>
  <b-container class="container">
    <b-form-select :options="options" v-model.number="ratio"></b-form-select>


    <div class="d-flex flex-row mt-4">
      <b-form-checkbox v-model="grid">Grid</b-form-checkbox>
      <b-form-checkbox class="ml-2" v-model="round">Rounded</b-form-checkbox>
    </div>

    <button @click="rotater" class="container-rotate">Rotate</button>

    <clipper-upload class="container-upload" v-if="!src" v-model="src">
      <h3 class="container-upload-text">Upload Image</h3>
    </clipper-upload>

    <clipper-fixed
        v-else
        class="container-upload"
        ref="clipper"
        :src="src"
        :ratio="ratio"
        :layout="round"
        :grid="grid"
        :round="round"
        :rotate="rotate"

    />

    <button
        @click="getResult "
        class="container-set">Set Image
    </button>

    <button
        @click="clip"
        class="container-set">Download
    </button>

    <button
        @click="resetCanvas"
        class="container-set">Delete
    </button>

    <div class="container-result">
      <img :src="result" alt="result image">
    </div>

  </b-container>

</template>

<script>

import {clipperFixed, clipperUpload} from 'vuejs-clipper';

export default {
  name: 'App',
  components: {
    clipperUpload,
    clipperFixed,
  },
  data() {
    return {
      layout: [
        {value: "grid", text: "Grid"},
        {value: "round", text: "Rounded"}
      ],
      grid: false,
      round: false,

      options: [
        {value: null, text: "Choose..."},
        {value: 1, text: "Kare"},
        {value: 1, text: "Kare"},
        {value: 2, text: "Dikdörtgen"},
        {value: 3, text: "Dikdörtgen Slim"},
        {value: 4, text: "Slim Vertical"},
        {value: 2 / 4, text: "Dikey Geniş"},
        {value: 1 / 2, text: "Dikey Dar"},
      ],
      ratio: null,
      src: "",
      result: "",
      rotate: 0,
    }
  },
  methods: {
    getResult() {
      const canvas = this.$refs.clipper.clip({maxWPixel: 500}) /// size can change dynamically for project requirement
      /*this.pixel = `${canvas.width} x ${canvas.height}`*/    /// can set dynamic canvas sizes
      this.result = canvas.toDataURL('image/jpeg')     /// download image type

    },
    clip() {
      this.getResult()
      const a = document.createElement('a')
      a.download = 'result.jpg'
      a.href = this.result
      a.target = '_blank'
      a.click()
    },
    resetCanvas() {
      this.src = ""
      this.result = ""
    },
    rotater() {
      this.rotate = this.rotate + 45
    },


  },
  created() {
    console.log(this.ratio)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;

  &-rotate {
    height: 50px;
    width: 100px;
    border: none;
    margin-top: 20px;
    background-color: lightsteelblue;
  }

  &-upload {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 400px;
    background-color: white;
    border-radius: 5px;
    margin-top: 50px;
    border: 2px dashed gray;
    cursor: pointer;

    &-text {
      color: darkgray;
    }
  }

  &-result {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &-set {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    width: 400px;
    height: 60px;
    border-radius: 6px;
    border: none;
    margin-top: 20px;
    background-color: rebeccapurple;
    color: white;
    cursor: pointer;
  }
}
</style>
