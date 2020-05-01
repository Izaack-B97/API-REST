import '@babel/polyfill'; // Con esto el codigo podra ejecutarse en diferentes entornos
import app from './server';

async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port ',  app.get('port'));
}

main();