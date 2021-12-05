import {Router} from 'express';
import dotenv from 'dotenv';

dotenv.config();

let api = Router();

api.get('/', (req, res) => {
    console.log('array');
})


//La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

// multiplie les chiffres passé par 2

api.post('/map', (req, res) => {

    let numbers = req.body.map
    let arrayNumbers = numbers.split(',')
    const map = arrayNumbers.map(x => x * 2);

    res.status(200).json({
        map
    });

})

// La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.

api.post('/filter', (req, res) => {

    let words = req.body.filter
    let arrayStrings = words.split(',');
    const filter = arrayStrings.filter(word => word.length > 6);

    res.status(200).json({
        filter
    });
})

// La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.

api.post('/every', (req, res) => {

    let numbers = req.body.every
    let arrayNumbers = numbers.split(',');

    const every = arrayNumbers.every(elem => elem >= 11); // false

    res.status(200).json({
        every
    });
})

// La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.

// recherche 'ok'

api.post('/includes', (req, res) => {

    let words = req.body.includes
    let arrayEntries = words.split(',');

    const includes = arrayEntries.includes('ok')

    res.status(200).json({
        includes
    });
})

// La méthode pop() supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.

api.post('/pop', (req, res) => {

    let words = req.body.pop
    let arrayStrings = words.split(',');

    const pop = arrayStrings.pop()

    res.status(200).json({
        pop
    });
})

// La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.

api.post('/find', (req, res) => {

    let numbers = req.body.find
    let arrayNumbers = numbers.split(',');

    const find = arrayNumbers.find(element => element > 10);

    res.status(200).json({
        find
    });
})

// La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.

api.post('/reduce', (req, res) => {

    let numbers = req.body.reduce
    let arrayNumbers = numbers.split(',');
    let arrayMap = arrayNumbers.map(x => parseInt(x));

    const reduce = arrayMap.reduce((a, b)=> a + b);

    res.status(200).json({
        reduce
    });
})

export default api
