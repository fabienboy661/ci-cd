const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hello World from ec2 from Fabien Boy 1212"
    })
})

app.listen(8080, () => {
    console.log('Server running on port 8080')
})
