function generateData(teamArr) {
    var pageStart = `
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <title>TEAM PROFILE</title>
        </head>
        <body>
            <div class="container">
                <div class="card text-bg-primary text-center mb-3 mt-7" id="header"><h1>My Team</h1></div>
                <div class="d-flex flex-wrap justify-content-between">`;
  
    var card = "";
  
    var pageEnd = ` 
                </div>
            </div>
        </body>
    </html>`;
    teamArr.forEach((member) => {
      if (member.officeNumber) {
        var office = member.officeNumber;
        var role = "Manager";
        card += `
                    <div class="card" style="width: 18rem;">
                        <div class="card text-bg-info mb-3">
                            <h1 id="name">${member.name}</h1>
                            <h3 id="role">${role}</h3>
                        </div>
                    
                        <div class="card-body">
                            <div class="card">
                                <p id="id">ID:${member.id} </p>
                                <p id="email">Email:<a href = "mailto: ${member.email}">${member.email}</a> </p>
                                <p id="detail">Office number:${office} </p>
                            </div>
                        </div>
                    </div>`;
      }
      if (member.github) {
        var username = member.github;
        var role = "Engineer";
        var githublink = `https://github.com/${username}`
        card += `
                    <div class="card" style="width: 18rem;">
                        <div class="card text-bg-info mb-3">
                            <h1 id="name">${member.name}</h1>
                            <h3 id="role">${role}</h3>
                        </div>
                    
                        <div class="card-body">
                            <div class="card">
                                <p id="id">ID:${member.id} </p>
                                <p id="email">Email:<a href = "mailto: ${member.email}">${member.email}</a> </p>
                                <p id="detail">GitHub Username: <a href = "${githublink}">${username}</a></p>
                            </div>
                        </div>
                    </div>`;
      }
      if (member.school) {
        var school = member.school;
        var role = "Intern";
        card += `
                    <div class="card" style="width: 18rem;">
                        <div class="card text-bg-info mb-3">
                            <h1 id="name">${member.name}</h1>
                            <h3 id="role">${role}</h3>
                        </div>
                    
                        <div class="card-body">
                                <div class="card">
                                <p id="id">ID:${member.id} </p>
                                <p id="email">Email:<a href = "mailto: ${member.email}">${member.email}</a> </p>
                                <p id="detail">School: ${school}</p>
                            </div>
                        </div>
                    </div>`;
      }
  
    });
    return `${pageStart}\n ${card}\n ${pageEnd}`
  }
module.exports = generateData  