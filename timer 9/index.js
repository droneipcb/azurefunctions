module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript esta lento!');
    }
    context.log('Funciona!', timeStamp);   
};