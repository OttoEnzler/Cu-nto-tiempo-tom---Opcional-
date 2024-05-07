function revertir(str) {// recorre el str de izquierda a derecha y almacena en otro str
    let revertido = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revertido += str[i];
    }
    return revertido;
}

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
//original -> const reversed1 = story.split("").reverse().join("");
const reversed1 = revertir(story);
console.log(reversed1);