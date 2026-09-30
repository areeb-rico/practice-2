const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/hello/:name', (req, res) => {
    res.json({ message: `Hello ${req.params.name}` })
})

app.post('/add', (req, res) => {
    const { a, b } = req.body
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'a and b must be numbers' })
    }
    res.json({ result: a + b })
})

app.get('/health', (req, res) => {
    res.json({ status: 'ok' })
})

if (require.main === module) {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

module.exports = app