const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "First github action to ec2"
    })
})

app.listen(8080, () => {
    console.log('Server running on port 8080')
})
