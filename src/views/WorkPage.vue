<template> 
    <HeaderIndex /> 
    <HeaderBottom v-bind:cityPage="cityPage()" />            
    <div class="ex-basic-1 pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="text-box mb-5" v-if="photo_referenceArray.length > 0">
                        <h3>Фотографии {{ cityPage() }} </h3>
                </div>
                <div class="col-lg-12" v-if="photo_referenceArray.length > 0">
                    <img class="image_galery mt-5 mb-3" v-on:load="onImgLoad" v-bind:src="'https://drevesniy-ugol.000webhostapp.com/image.php?ref='+photo_referenceArray[0]" v-bind:alt="cityPage()">
                </div>
            </div> 
        </div> 
    </div>
    <div class="ex-basic-1 pt-3 pb-5" v-if="showMoreImages">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1"> 
                    <span v-for="(refer, index) in photo_referenceArray"  v-bind:key="index">
                        <img v-if="photo_referenceArray[index+1]" class="image_galery mb-5" v-bind:src="'https://drevesniy-ugol.000webhostapp.com/image.php?ref='+photo_referenceArray[index+1]" v-bind:alt="cityPage()">
                    </span>
                    
                </div> 
            </div> 
        </div> 
    </div>
    <FooterIndex />
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import HeaderBottom from '@/components/WorkPage/HeaderBottom';
import FooterIndex from '@/components/IndexPage/FooterIndex';
import listCityes from '@/storage/cities';

export default{
    components: { HeaderIndex, HeaderBottom, FooterIndex },
    data (){
        return {
            photo_referenceArray: [], showMoreImages: false,   
        }
    },
    created (){ 
        this.isLoading = true;
    },
    methods: { 
       cityPage(){ 
            let pagekey = this.$route.params.city;
            for(let cityObj of listCityes.cities){
                if(cityObj.key == pagekey){
                    let nameCity = cityObj.name.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
                    return nameCity;
                }
                
            }
            return this.$route.params.city.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
       },
      getListReferencesFotosFromPlaceId(place_id){
          let emptyPhotoArray = []; 
          fetch('https://drevesniy-ugol.000webhostapp.com/get_ref.php?place_id=' + place_id).then(res => res.json()).then(response => {
              
              let referencesFotosArray = response.result.photos;
             
              if(referencesFotosArray){
                  referencesFotosArray.forEach(function(item, index){
                    emptyPhotoArray.push(item.photo_reference)
                  });
                  this.photo_referenceArray = emptyPhotoArray;
                  this.isLoading = false;
              } else {
                  this.photo_referenceArray = [];
              }
          })
      },
      onImgLoad(){
         this.showMoreImages = true;
      }
    }, 
    mounted: function () {
        window.test = this;
    },
}
</script>
<style scoped>
.image_galery{
    width: 100%;
    height: auto;
    border: 4px solid #6a6565;
    border-radius: 22px;
}
.image_galery{
    max-height: 90vh;
}
</style>
