


const convertString = (str) => {

    

    const array = str.split(" ")
    const ay = 'ay'
    const newArray = []

    const l1 = array[0][0]
    const l2 = array[1][0]

    const w1 = array[0].slice(1) + l1 + ay
    const w2 = array[1].slice(1) + l2 + ay

    newArray.push(w1, w2)    
    

   const newStr = newArray.toString().replace(",", " ")
   console.log(newStr)

   return newStr

}


convertString("hello world")

convertString("Fernando Patricio")

convertString("Espacio Sideral")