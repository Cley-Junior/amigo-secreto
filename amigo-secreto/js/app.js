let aux = 0;
let listaAmigos = [];

function adicionar()
{
    let nomeEscrito = document.getElementById("nome-amigo").value.trim();
    if (nomeEscrito != "")
    {
        for (let i = 0; i < listaAmigos.length; i++)
        {
            if (listaAmigos[i].toLowerCase == nomeEscrito.toLowerCase)
            {
                alert("Esse nome já foi adicionado, troque o nome ou adicione um sobrenome.");
                return;
            }            
        }
        let stringAmigos = document.getElementById("lista-amigos");
        if (aux == 0)
        {
            stringAmigos.innerHTML += `${nomeEscrito}`;
        } else {
            stringAmigos.innerHTML += `, ${nomeEscrito}`;
        }

        listaAmigos.push(nomeEscrito);
        document.getElementById("nome-amigo").value = "";
        
        aux++;
    } else {
        alert("Digite um nome no campo 'Nome do amigo'.");
    }
}

function sortear()
{
    if (listaAmigos.length <= 3)
    {
        alert("Digite ao menos 4 nomes de amigos por favor!");
        return;
    }
    shuffle(listaAmigos);
    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        if (i + 1 == listaAmigos.length)
        {
            listaSorteio.innerHTML += `${listaAmigos[i]} --> ${listaAmigos[0]}`;
        } else {
            listaSorteio.innerHTML += `${listaAmigos[i]} --> ${listaAmigos[i+1]} <p></p>`;
        }
    }
}

function reiniciar()
{
    let stringAmigos = document.getElementById("lista-amigos");
    stringAmigos.innerHTML = "";
    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = "";
    listaAmigos = [];
    aux = 0;


}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }