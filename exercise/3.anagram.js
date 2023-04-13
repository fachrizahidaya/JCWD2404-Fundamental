function areAnagram(str1,str2) {
    let n1 = str1.length
    let n2 = str2.length
    if (n1 != n2) 
    return false
    str1.split()
    str2.split()
    str1.sort() 
    str2.sort() 
    for (let i = 0; i < n1; i++)
    if (str1[i] != str2[i])
    return false
    return true 
}
let str1 = ['h','i','n','a']
let str2 = ['a','i','n','h']
console.log(areAnagram(str1,str2))
//cara 2
function compare (kalimat1,kalimat2) {
    if(kalimat1.length !== kalimat2.length) {
        return false
    } else {
        return kalimat1.toLowerCase().split('').sort().join('') ===
        kalimat2.toLowerCase().split('').sort().join('')
    }
}
console.log(compare('mati','itam'))