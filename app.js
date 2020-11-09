const posSeperate = (arr)=>{
    let evenArr = [];
    let oddArr = []
    for(let i = 0; i < arr.length; i++){
        if(((i + 1) % 2 ) === 0){ ///even
            evenArr.push(arr[i]);
        }else{   //odd
            oddArr.push(arr[i]);
        }
    }
    return {evenArr, oddArr};
}

const trackTheRobot = (...args)=>{
    // console.log(args);
    const newObj = posSeperate(args);
    const xArr = newObj.evenArr;
    const yArr = newObj.oddArr;

    const xcord = findCoord(xArr);
    const ycord = findCoord(yArr);

    console.log(xcord,ycord)
}



const findCoord = (arr)=>{
    ///step 2 seperate them in the same way
    const newObj = posSeperate(arr);
    const evenArr = newObj.evenArr;
    const oddArr = newObj.oddArr;

    ///reduce each
    const evenSum = evenArr.reduce((a,c)=>a+c, 0);
    const oddSum = oddArr.reduce((a,c)=>a+c, 0);

    //step 3: subtract the even from the odd numbers to find the final coordinate
    return oddSum - evenSum;
}