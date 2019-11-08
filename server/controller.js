module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(houses => res.status(200).send(houses))
    },
    postHouse: (req, res) => {
        const db = req.app.get('db')
        const { name, address, city, state, zip } = req.body
        db.add_item([name, address, city, state, +zip])
            .then(houses => res.status(200).send(houses))
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        let { id } = req.query
        db.delete_houses(+id).then(result => res.status(200).send(result))
    }

}