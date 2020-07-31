new Vue({
	el: '#desafio',
	data: {
		classEfeito: 'destaque',
		classUsuario: '',
		classUsuario2: '',
		corUsuario: '',
		estiloQuadrado: {
			width: '50px',
			height: '50px'
		},
		roxo: false,
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classEfeito = this.classEfeito == 'destaque' ? 'encolher' : 'destaque'
			}, 2000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500);
		},
		pintarRoxo(event){
			if (event.target.value == "true"){
				this.roxo = true
			}else if (event.target.value == "false"){
				this.roxo = false
			}
		}
	},
})
