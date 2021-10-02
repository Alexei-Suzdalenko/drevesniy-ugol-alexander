<template>
<header class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <h1 class="h1-large">Список городов</h1>
                </div>
            </div> 
        </div> 
</header>
 <div id="services" class="cards-1 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Древесный Уголь в вашем городе:</h2>
                </div> 
            </div> <br><br><br>
            <div class="row">
                <div class="col-lg-12">

                    <router-link class="card list_map_site" v-for="(city, index) in listCitiesAndWorks" v-bind:key="index" v-bind:to="'/buy/' + city.key">
                        <div class="card-body">
                            <h6 class="card-title">{{ deleteEmptySpaces(city.name) }}</h6> 
                        </div>
                    </router-link>
                   
                </div> 
            </div> 
        </div> 
    </div>
</template>
<script>
import urls from '@/storage/urls';
import listCityes from '@/storage/cities';
export default{
    data(){
        return{
            listCitiesAndWorks: []
        }
    },
    created(){ 
      this.listCitiesAndWorks = listCityes.cities; 
    },
    methods: {
        deleteEmptySpaces(x){
            return x.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
        }
    }
}
</script>