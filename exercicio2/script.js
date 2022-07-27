const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const zerandoCaract = minhaString.trim()

console.log(`Quantidade de caracteres com excesso de espaço ${minhaString.length}
e a quantidade de caracteres depois da remoção dos espaços é ${zerandoCaract.length}`)

const newString = minhaString.replaceAll ("________", "sticioso")

console.log(newString);

