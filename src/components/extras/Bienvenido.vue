<template>
    <div>
       
        {{ texto }}
    </div>
</template>
<script>
export default {
    name: "bienvenido",
    data() {
        return {
            texto : ""
        }
    },
    mounted(){
        this.texto = "Bienvenidos a mi pagina web"
    }
}
</script>