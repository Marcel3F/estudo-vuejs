new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaClickBotao(){
            alert('Clicou!!!')
        },
        armazenarValor(event){
            console.log(event)
            this.valor = event.target.value
        }
    }
})