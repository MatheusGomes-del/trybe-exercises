function encode(str) {
    let newString = str.split('')
    let string = ''
        for(let letter in newString){
            if(newString[letter] == 'a'){
                newString[letter] = 1
                
            }else if(newString[letter] == 'e'){
                newString[letter] = 2
            
            }else if(newString[letter] == 'i'){
                newString[letter] = 3
                
            }else if(newString[letter] == 'o'){
            newString[letter] = 4
            
            }else if(newString[letter] == 'u'){
            newString[letter] = 5
            
            }
        }
        string = newString.join('')
        return string
}

function decode(str) {
    let newString = str.split("")
    let string = ''
    for(let letter in newString){
        if(newString[letter] == '1'){
            newString[letter] = 'a'
            
        }else if(newString[letter] == '2'){
            newString[letter] = 'e'
        
        }else if(newString[letter] == '3'){
            newString[letter] = 'i'
            
        }else if(newString[letter] == '4'){
        newString[letter] = 'o'
        
        }else if(newString[letter] == '5'){
        newString[letter] = 'u'
        
        }
    }
        string = newString.join('')
        return string
}

const encodeDecode = {encode, decode}
module.exports = encodeDecode