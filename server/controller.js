module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all().then(response => {
            res.status(200).send(response)
        })
    },
    createOne: (req,res) => {
        const db = req.app.get('db')
        let {name, address, city, state, zip} = req.body
        db.create_one().the(response => {
            res.status(200).send(response)
        })
    }
}