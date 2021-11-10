let n = 5;
let x = "";

for (let index = 0; index <= n; index += 1){
    x += "*";
    if (n > 1) {
        for (let index = 0; index <= n; index += 1) {
            if (x.length == n) {
                console.log(x);
            }
        }
        
    }
    
    
}

/*   
for (let index = 0; index <= n; index += 1) {
    x += "*";
    console.log(x);
}
*/
    
