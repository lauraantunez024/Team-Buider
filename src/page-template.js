function renderManager(manager) {
    return 'manager'
}
function renderEngineers(engineers) {
    return 'engineer'
}
function renderInterns(interns) {
    return 'intern'
}

function teamGenerator(teamMembers) {
    return `
        ${renderManager(teamMembers.manager)}

    `

}

function render(teamMembers) {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Team </title>
    </head>
    
    <style>
        
    </style>
    <body>

    ${teamGenerator(teamMembers)}
        
    </body>
    </html>
    
    
        
    `
};

module.exports = render;