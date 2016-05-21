function largestPrimeFactor(n){
    var i = 2;
    while ( i<=n ) {
        if (n % i == 0)
            n /= i;    
        else 
            i++;   
    }
    return i;
}

console.log(largestPrimeFactor(600059944));
