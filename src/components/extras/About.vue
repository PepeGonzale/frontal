<template>
    <div>
       
        {{ texto }}
    </div>
</template>
<script>
export default {
    name: "nosotros",
    data() {
        return {
            texto : ""
        }
    },
    mounted(){
        this.texto = "Sobre nosotros"
    }
}
</script>