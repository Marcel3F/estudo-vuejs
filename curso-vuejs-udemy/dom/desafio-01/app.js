new Vue({
    el: '#desafio',
    data: {
        nome: 'Marcel',
        idade: 30,
        srcImagem: 'https://blog.mapadamaconha.com.br/wp-content/uploads/sites/2/2019/04/image21.png'
    },
    methods: {
        multiplicarIdadePor3: function(){
            return this.idade * 3
        },
        numeroRandomEntre0e1: function(){
            return Math.random();
        }
    }
})