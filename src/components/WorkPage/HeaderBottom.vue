<template>
     <header class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <h1>Купить Древесный Уголь {{ cityPage }}</h1>
                </div> 
            </div> 
        </div> 
    </header>
    <div class="ex-basic-1 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                     <p class="mb-5 description_text">
                       Как вы уже знаете, мы  работаем в городе {{cityPage}}, поэтому вы всегда можете обратиться с предложением без каких-либо обязательств. Мы всегда к вашим услугам: звоните по телефону или пишите сообщения в WhatsApp
                     </p>
                </div> 
            </div> 
        </div> 
    </div>   
</template>
<script>
export default {
    props: ['cityPage'],
    data(){
        return {

        }
    },

}
</script>