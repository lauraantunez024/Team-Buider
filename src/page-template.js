function renderManager(manager) {
    return `
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="https://www.shareicon.net/data/128x128/2016/04/10/747396_people_512x512.png">
          <span class="card-title">${manager.getName()}</span>
        </div>
        <div class="card-content">
          <ul>
          <li class="role"> ${manager.getRole()} </li>
          <li>ID: ${manager.getId()} </li>
          <li>Email: ${manager.getEmail()} </li>
          <li>Office Number: ${manager.getNumber()} </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
         `
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
        ${renderEngineers(teamMembers.engineer)}
        ${renderInterns(teamMembers.intern)}

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
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>    
        </head>
    
    <style>

    .role {
        font-weight: bold;
    }

    img {
        width: 25px;
        height: auto;
      }
        
    </style>
    <body>

    <div class = "container">
   

    ${teamGenerator(teamMembers)}
    </div>
        
    </body>
    </html>
    
    
        
    `
};

module.exports = render;





//     <div class="card">
//     <div class="card-content">
//     <span class="card-title activator grey-text text-darken-4">${manager.getName()}<i class="material-icons right">more_vert</i></span>

//       <p>${manager.getRole()}</p>
//     </div>
//     <div class="card-tabs">
//       <ul class="tabs tabs-fixed-width">
//         <li class="tab"><a href="#test4">ID</a></li>
//         <li class="tab"><a class="active" href="#test5">EMAIL</a></li>
//         <li class="tab"><a href="#test6">OFFICE NUMBER</a></li>
//       </ul>
//     </div>
//     <div class="card-content grey lighten-4">
//       <div id="test4">${manager.getId()}</div>
//       <div id="test5">${manager.getEmail()}</div>
//       <div id="test6">${manager.getNumber()}</div>
//     </div>
//   </div>