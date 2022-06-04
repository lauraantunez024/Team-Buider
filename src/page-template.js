function renderManager(manager) {
    return `
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
          <span class="card-title">${manager.getName()}</span> <i class="fa-solid fa-briefcase"></i>
        <div class="card-content">
          <ul>
          <li class="role"> ${manager.getRole()} </li>
          <li>ID: ${manager.getId()} </li>
          <li>Email: <a href "mailto:${manager.getEmail()}>${manager.getEmail()}</a></li>
          <li>Office Number: ${manager.getNumber()} </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
         `
}
function renderEngineers(engineer) {
    return `
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
          <span class="card-title">${engineer.getName()}</span><i class="fa-solid fa-user-gear"></i>
        <div class="card-content">
          <ul>
          <li class="role"> ${engineer.getRole()} </li>
          <li>ID: ${engineer.getId()} </li>
          <li>Email:<a href "mailto:${engineer.getEmail()}>${engineer.getEmail()}</a></li>
          <li>Github: <a href="github.com/${engineer.getGithub()}"> ${engineer.getGithub()} </a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
         `
}
function renderInterns(intern) {
    return `
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
          <span class="card-title">${intern.getName()}</span> <i class="fa-solid fa-graduation-cap"></i>
        <div class="card-content">
          <ul>
          <li class="role"> ${intern.getRole()} </li>
          <li>ID: ${intern.getId()} </li>
          <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()} </a></li>
          <li>School: ${intern.getSchool()} </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
         `
         return markup.join(",");

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
        <title>My Team </title>
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" width="50px" height="auto">
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>   
        <script src="https://kit.fontawesome.com/7ace23f043.js" crossorigin="anonymous"></script> 
        </head>
    
    <style>
    .role {
        font-weight: bold;
    }

    .card-title {
        margin-left: 25px;
    }

    .card-title{
        margin-right: 10px;
    }

    .nav-wrapper {
        text-align: center;
    }
    </style>

    <body>
        <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">My Team</a>
        </div>
        </nav>

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