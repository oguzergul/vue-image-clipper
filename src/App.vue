<template>


  <div class="container">
    <clipper-upload class="container-upload" v-if="!src" v-model="src">
      <h3 class="container-upload-text">Upload Image</h3>
    </clipper-upload>

    <clipper-fixed
        v-else
        class="container-upload"
        ref="clipper"
        :src="src"
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
      <img :src="result">
    </div>

  </div>

</template>

<script>

import {clipperFixed clipperUpload} from 'vuejs-clipper';

export default {
  name: 'App',
  components: {
    clipperUpload,
   /* clipperBasic,*/
    clipperFixed

  },
  data() {
    return {
      src: "",
      result: "",
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
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
