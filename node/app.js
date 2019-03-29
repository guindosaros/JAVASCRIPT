require('babel-register')
const {success, error} = require('./functions')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const config = require('./config')
const cors = require('cors')

const db = mysql.createConnection({
    host: 'localhost',
    database: 'alimentation',
    user: 'root',
    password: ''
})

db.connect((err) => {

    if (err)
        console.log(err.message)
    else {

        console.log('Connected.')

        const app = express()

        let chemin = express.Router()

        app.use(morgan('dev'))
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        chemin.route('/:id')

            // Récupère les Recette
            .get((req, res) => {

                db.query('SELECT * FROM recette WHERE categorie = ?', [req.params.id], (err, result) => {
                    if (err) {
                        res.json(error(err.message))
                    } else {
                        res.json(success(result))
                    }
                })

            })

            chemin.route('/details/:id')

            // recuperer le detail d'un menu 
            .get((req, res) => {

                db.query('SELECT*FROM recette WHERE id_recette= ?', [req.params.id], (err, result) => {
                    if (err) {
                        res.json(error(err.message))
                    } else {
                        res.json(success(result))
    
                    }
                })
    
            })

        chemin.route('/:categorie')

            // Récupère tous les categories d'une recette
            .get((req, res) => {

                db.query('SELECT*FROM recette WHERE categorie = ?', [req.params.categorie], (err, result) => {
                    if (err) {
                        res.json(error(err.message))
                    } else {
                        res.json(success(result))
    
                    }
                })
    
            })
            //  // Récupère la seul categorie
            chemin.route('/seul/:categorie')

            .get((req, res) => {

                db.query('SELECT*FROM categorie WHERE categorie = ?', [req.params.categorie], (err, result) => {
                    if (err) {
                        res.json(error(err.message))
                    } else {
                        res.json(success(result))
    
    
                    }
                })
    
            })

            chemin.route('/')

            // Récupère tous les categories d'une recette
            .get((req, res) => {

                db.query('SELECT*FROM categorie', (err, result) => {
                    if (err) {
                        res.json(error(err.message))
                    } else {
                        res.json(success(result))
    
                    }
                })
    
            })

        // cors permet d'utilisation de mon app node avec mon application ionique
        app.use(cors())
        // le chemin principal de mon application 
        app.use('/categorie', chemin)
        // creation de Mon serveur node  
        app.listen(config.port, () => console.log('Started on port '+config.port))

    }

})