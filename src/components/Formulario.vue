<template>
  <form class="container rounded-full" ref="cleanForm">
    <div
      class="shadow-2xl shadow-blue-500/50 rounded-lg p-6 w-100 mt-20 bg-blue-500"
    >
      <label
        class="m-2 p-1.5 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="file_input"
        >Upload file</label
      >      <input
      @change="handleImage"
        class="hover:file:cursor-pointer block w-full text-sm text-black-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-300 ease-in-out"
        type="file"
        accept="image/*"
        name="archivo"
        id="archivo"
      />
      
      <button
        id="enviar"
        type="submit"
        :disabled = "disable"
        
        class="hover:translate-x-1 mx-auto w-100 mt-3 text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  transition duration-300 ease-in-out dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">    
        Submit
      </button>
    </div>
    <button class="p-3 m-auto rounded-full bg-blue-500  hover:bg-blue-400" @click = "nodePost">Send Data to Node</button>
  </form>
  <div class="m-auto w-1/2 p-9 rounded-sm bg-gray">
      <li v-for = "(data, index) in msg" :key="index">
        {{data}}
      </li> 
      
  </div>

</template>
<script>
import axios from "axios";

export default {
    name: "formulario",
    data() {
        return {
            image: "",
            remoteURl: "",
            disable: false,
            texto : "",
            msg: {}
        };
    },
    methods: {
      nodePost() {
        const url = 'http://localhost:3000/file'
        axios.post(url, this.msg)

      },
        handleImage(e) {
            const selectedImage = e.target.files[0];
            this.createBase64Image(selectedImage);

        
        },
        createBase64Image(fileObject) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.image = e.target.result;
                this.uploadImage();
            };
            reader.readAsDataURL(fileObject);
        },
        
        uploadImage() {
            this.active = true;
            const { image } = this;
            const archivo = document.querySelector("#archivo").files[0].name;
            const url = "http://localhost:5000/file";
            console.log(archivo);
            axios.post(url, { image: image, archivo: archivo })
                .then((response) => {
                this.remoteURl = response.data.url;
                this.msg = response.data
                console.log("Esta es la respuesta", response);
            })
                .catch((err) => {
                return new Error(err.message);
            });
            
            
            
        },
    },
}
</script>
<!-- <style scoped>
  form{
    width:300px;
	padding:16px;
	border-radius:10px;
	margin:auto;
	background-color:#ccc; 
  }
  form input[type = "submit"] {
    margin-top: 5px;
    margin-left: 70px
  }
  .container{
display: block;
}
</style> -->
