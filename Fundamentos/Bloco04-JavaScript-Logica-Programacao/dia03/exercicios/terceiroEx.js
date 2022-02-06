let array = ['java', 'javascript', 'python', 'html', 'css']
let maiorString = ''
let menorString = ''


for(let letter = 0; letter < array.length;  letter++){
   if(array[letter].length > maiorString.length){
      maiorString = array[letter]
   }else{
       menorString = array[letter]
   }
}

console.log(maiorString)
console.log(menorString)


