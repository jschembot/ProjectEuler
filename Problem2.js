var evenFibSum = function(maxAmount) {
    var fibSeq = [];
    fibSeq[0] = 0;
    fibSeq[1] = 1;
    for(var i = 2; i < maxAmount+1; i++) {
        var newNum = fibSeq[i-1] + fibSeq[i-2];
        if( newNum > 4000000 )
            break;
        fibSeq.push(newNum);
    }
    
    var evenNumsTotal = 0;
    
    for ( var i = 0; i < fibSeq.length; i++) {
        if( fibSeq[i] % 2 === 0 )
            evenNumsTotal += fibSeq[i];
    }
    return evenNumsTotal;
};

console.log(evenFibSum(100));
