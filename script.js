
    document.getElementById("registerForm").addEventListener("submit", function(e){
      e.preventDefault();

      let name = document.getElementById("name").value;
      let dob = document.getElementById("dob").value;
      let outstation = document.getElementById("outstation").value;
      let contact = document.getElementById("contact").value;
      let photoFile = document.getElementById("photo").files[0];

      let reader = new FileReader();
      reader.onload = function(event){
        let photoData = event.target.result;

        let members = JSON.parse(localStorage.getItem("members")) || [];
        members.push({name, dob, outstation, contact, photo: photoData, status: "Active"});
        localStorage.setItem("members", JSON.stringify(members));

        alert("Registration successful! You can now login.");
        window.location.href = "login.html";
      };
      reader.readAsDataURL(photoFile);
    });