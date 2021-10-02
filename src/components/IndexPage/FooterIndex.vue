<template>
    <ldjson />
    <div class="basic-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-container">
                        <h2>Служба поддержки клиентов</h2>
                        <p class="p-large">Мы в вашем распоряжении с любым вопросом, сомнением или предложением, не стесняйтесь писать или звонить нам. <br> Мы работаем для вас</p>
                        <a class="btn-solid-lg" href="https://api.whatsapp.com/send?phone=+79191934593"><i class="fab fa-whatsapp"> 7 919 193 45 93</i></a>
                    </div> 
                </div>
            </div> 
        </div>
    </div> 
    
    <div class="footer bg-gray">
        <img class="decoration-circles" src="/images/decoration-circles.png" alt="Древесный Уголь">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Следите за нами в социальных сетях</h4>
                    <p>Скоро</p>
                    <div class="social-container">
                        <span class="fa-stack">
                            <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                             <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                             <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-google fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                             <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div> 
        </div>
    </div>

    <div class="copyright bg-gray" style="color: grey;">     
        <div class="container">
            <div class="row">
                <div class="col-lg-12" style="text-align: center;">
                        <div v-for="(city, index) in listCitiesAndWorks" v-bind:key="index" v-bind:to="'/buy/' + city.key" class="div_links">
                            <a class="cities_list" v-bind:href="'/buy/' + city.key">{{ deleteEmptySpaces(city.name) }}</a> 
                        </div>
                </div> 
            </div> 
        </div><br>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <ul class="list-unstyled li-space-lg p-small">
                        <li><a target="_blank" href="/user-agreement">Пользовательское соглашение, контакты и реквизиты</a></li>
                        <li><a target="_blank" href="https://play.google.com/store/apps/dev?id=8185819019973346070">Разработка Алексей С</a></li>
                    </ul>
                </div> 
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <p class="p-small statement"><a href="/sitemap.xml" target="_blank">Copyright © Древесный Уголь</a></p>
                </div> 
            </div>
        </div>  
    </div>
</template>
<script>
import ldjson from '@/components/IndexPage/LDJson';
import storageCitiesWorks from '@/storage/cities';
export default{
    data(){
        return{
            listCitiesAndWorks: []
        }
    },
    components: { ldjson },
    created(){
       this.insertScriptGooglePages();

       let arrayPrepare = []; 
       let arrayCitiesEmpty = [];
       if(window.location.pathname == '/') {
          arrayCitiesEmpty = storageCitiesWorks.citiesSort
       } else {
           arrayCitiesEmpty = storageCitiesWorks.cities.reverse();
       };
       for (let city of arrayCitiesEmpty) {
           arrayPrepare.push(city)
       };
       this.listCitiesAndWorks = arrayPrepare; 
    },
    methods: {
       // currentId(){ alert('call map api =>' + this.$route.params.workDetail)
       //   // this.insertScriptGooglePages();
       //   return this.$route.params.workDetail;
       // },
        deleteEmptySpaces(x){
            return x.replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-');
        },
        insertScriptGooglePages(){
            var scriptMap = document.createElement('script');
            scriptMap.onload = function() {
                document.querySelector("[src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBJcJoJrGaUb_Gx1GJ2Swnh2N3gdF926Gw&callback=initMap']").remove()
                var el = document.getElementsByTagName('head')[0]
                let scripts = el.getElementsByTagName( 'script' ); 
          
                for(var i = 0; i < scripts.length; i++) {
                  let sc = scripts[i];
                  if(sc.type == 'application/ld+json') continue;
                  sc.remove();
                }

            };
            scriptMap.type = 'text/javascript';
            scriptMap.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBJcJoJrGaUb_Gx1GJ2Swnh2N3gdF926Gw&callback=initMap";
            
            let cityCurrent = window.location.href;
            let cityCurr = cityCurrent.split('/');
            let tiposDeTrabajos = [ 'buy' ].toString();
            let currentWork = cityCurr[cityCurr.length-2].replace('-', ' ').replace('-', ' ');
            
            if(tiposDeTrabajos.includes(currentWork) ){
                document.getElementsByTagName('head')[0].appendChild(scriptMap);
            } else {
           
            }
            window.scrollTo(0, 0);
        }
    }
}

</script>

<style scoped>
.cities_list:hover{
    cursor: pointer;
}
.cities_list{
    font-size: 14px;
    color: #9d9db7;
}
.div_links{ margin:10px; width:20%; display:inline-block;}

@media only screen and (max-width: 800px) {
  .div_links {
    width: 45%;
  }
}

.image_footer{
    width: 35px; margin-right: 11px;
}
</style>
