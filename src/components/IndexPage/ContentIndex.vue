<template>
    <div id="services" class="cards-1 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Ознакомьтесь с нашими услугами</h2>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-icon">
                            <span class="fas fa-headphones-alt"></span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Свяжитесь с нами</h5>
                            <p>Свяжитесь с нами и получите индивидуальное предложение без каких-либо обязательств</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-icon red">
                            <span class="far fa-clipboard"></span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Оцените возможности</h5>
                            <p>Мы работаем на очень конкурентном рынке, поэтому наши цены подстраиваются под каждого клиента</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-icon green">
                            <span class="far fa-comments"></span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Поделитесь своим опытом</h5>
                            <p>После завершения работы с нами, вы наверняка, захотите поделиться положительным опытом</p>
                        </div>
                    </div>

                </div> 
            </div>
        </div> 
    </div>

    <div id="details" class="basic-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-7">
                    <div class="image-container">
                        <img class="img-fluid images_details" src="/img/drev3.jpg" alt="Древесный Уголь 3 КГ">
                    </div> 
                </div>
                <div class="col-lg-6 col-xl-5">
                    <div class="text-container">
                        <div class="section-title">Древесный Уголь</div>
                        <h2>ДРЕВЕСНЫЙ УГОЛЬ БЕРЕЗОВЫЙ 3 КГ 130 Р И 5 КГ 350 Р</h2>
                        <p>Компактная упаковка</p>
                        <router-link class="btn-solid-reg" to="/detail/drevesniy-ugol-3kg-5kg">Далее..</router-link>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 

    <div class="basic-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-5">
                    <div class="text-container">
                        <div class="section-title">Древесный Уголь</div>
                        <h2>УГОЛЬ ДРЕВЕСНЫЙ БЕРЕЗОВЫЙ 10 КГ 450 Р</h2>
                        <p>Прост в использовании, очень жаркий. Марка А. Сорт 1</p>
                        <router-link class="btn-outline-reg" to="/detail/drevesniy-ugol-10kg">Далее..</router-link>
                    </div> 
                </div> 
                <div class="col-lg-6 col-xl-7">
                    <div class="image-container">
                        <img class="img-fluid images_details2" src="/img/drev10.jpg" alt="УГОЛЬ ДРЕВЕСНЫЙ БЕРЕЗОВЫЙ 10 КГ">
                    </div> 
                </div>
            </div>
        </div>
    </div>

    <div id="features" class="cards-2" v-if="listNews.length > 0">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Новости</h2>
                </div><br><br><br><br> 
            </div> 
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">

                    <div class="card" v-for="(newsData, index) in listNews" v-bind:key="index"><br><br>
                        <img class="img-fluid" v-bind:src="newsData.itemVal" v-bind:alt="newsData.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ newsData.title }}</h5>
                            <router-link class="blue no-line" v-bind:to="/news/ + newsData.key">Далее..</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import firebase from "firebase/app";
export default{
    data(){
        return{
            listNews: []
        }
    },
    created(){
       let currentContext = this;
       let keys = []; 
       firebase.database().ref('art').orderByChild('time').limitToLast(9).once('value', function(snapshot) {
            snapshot.forEach(function (childSnapshot) {
                
                let itemKey = childSnapshot.key;
                let itemVal = childSnapshot.val().image;
                itemVal = itemVal.replace('http://www.site101.mir915bcf08b.comcb.info/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
                itemVal = itemVal.replace('https://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
                itemVal = itemVal.replace('http://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
                let key = itemKey.replaceAll(' ', '+');
                let currentInfo = {};
                currentInfo.itemKey = itemKey;
                currentInfo.itemVal = itemVal;
                currentInfo.key = key;
                currentInfo.title = childSnapshot.val().title;
                keys.push(currentInfo);
            });
            currentContext.listNews = keys; console.log(keys);
      });
    }
}
</script>

