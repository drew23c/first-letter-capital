module.exports = (str) =>{
    let spl = str.split(" ")
    let newStr = []
    for(let i = 0; i < spl.length; i++){
          let firstLetter = spl[i].slice(0,1)
          let str2 = spl[i].slice(1)
          let word = firstLetter.toUpperCase() + str2
          newStr.push(word)
    }
    return newStr.join(" ");
}