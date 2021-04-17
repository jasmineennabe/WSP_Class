<template>

    <div class="home">
        <h1>This is the home page</h1>
    </div>

</template>

<script>
    import { api } from "../models/myFetch";

    ( async ()=>{
        const actualItem = await api("posts");
        console.log({actualItem});
    })()

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>


</style>
  
