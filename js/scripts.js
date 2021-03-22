function apareceDescricao(id) {
	// Aparece Descrição
	let nomeDescricao = 'titulo' + id;
	var descricao = document.getElementById(nomeDescricao);
	descricao.style.display = 'block';

	//Desaparece Imagem
	let nomeImagem = 'foto' + id;
	var foto = document.getElementById(nomeImagem);
	foto.style.display = 'none';
	console.log(nomeDescricao);
	console.log(nomeImagem);
}

function desapareceDescricao(id) {
	// Desaparece Descrição
	let nomeDescricao = 'titulo' + id;
	var descricao = document.getElementById(nomeDescricao);
	descricao.style.display = 'none';

	//Aparece Imagem
	let nomeImagem = 'foto' + id;
	var foto = document.getElementById(nomeImagem);
	foto.style.display = 'block';
	console.log(nomeDescricao);
	console.log(nomeImagem);
}
