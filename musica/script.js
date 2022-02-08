function bestRockBand(band){
    return new promisse((resolve, reject) =>{
        if (band == 'Queen'){
            resolve({
                sucess: true,
                bandName: band,
                msg: band + ' is the best rock band ever!'
            });
        }else{
            reject({
                sucess: false,
                msg: 'I\'m not so sureal!'
            });
        
        }
    })
}

function bestRockBand(response){
    return new promisse((resolve, reject) =>{
        if(response.sucess){
            resolve('Bohemian Rhapsdopy by' + response.bandName);
        }else{
            reject('Do you know Queen?');
        }
    });
}

bestRockBand('Queen')
.then(response =>{
    console.log('Checking the answer...');
    return bestRockBand(response)
})

.then(response =>{
    console.log('Finding the best song...');
    console.log(response);
})

.cath(err =>{
    console.log(err.msg);
})