const clock = document.getElementById('clock');

    function updateTime () {
        const now = moment();
        const humanReadable = now.format('LLL');

          clock.textContent = humanReadable;
    }

      setInterval(updateTime, 100);
      
      var nine = document.querySelector("#nine");
      var ten = document.querySelector("#ten");
      var eleven = document.querySelector("#eleven");
      var noon = document.querySelector("#noon");
      var one = document.querySelector("#one");
      var two = document.querySelector("#two");
      var three = document.querySelector("#three");
      var four = document.querySelector("#four");
      var five = document.querySelector("#five");
      var six = document.querySelector("#six");
      var seven = document.querySelector("#seven");
      var eight = document.querySelector("#eight");
      var nineNight = document.querySelector("#nineNight");
      var tenNight = document.querySelector("#tenNight");
      var lookUpButton = document.querySelector("#look-up");
      
      function displayMessage(type, message) {
        msgDiv.textContent = message;
        msgDiv.setAttribute("class", type);
      }
      
      lookUpButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        // create user object from submission
        var user = {
          nine: nine.value.trim(),
          ten: ten.value.trim(),
          eleven: eleven.value.trim(),
          noon: noon.value.trim(),
          one: one.value.trim(),
          two: two.value.trim(),
          three: three.value.trim(),
          four: four.value.trim(),
          five: five.value.trim(),
          six: six.value.trim(),
          seven: seven.value.trim(),
          eight: eight.value.trim(),
          nineNight: nineNight.value.trim(),
          tenNight: tenNight.value.trim()
        };
      
        // console.log(user);
        
        // validate the fields
        // if (user.firstName === "") {
        //   displayMessage("error", "First name cannot be blank");
        // } else if (user.lastName === "") {
        //   displayMessage("error", "Last name cannot be blank");
        // } else if (user.email === "") {
        //   displayMessage("error", "Email cannot be blank");
        // } else if (user.password === "") {
        //   displayMessage("error", "Password cannot be blank");
        // } else {
        //   displayMessage("success", "Registered successfully");
      
          // set new submission
          localStorage.setItem("user", JSON.stringify(user));
          
          // get most recent submission
          var lastUser = JSON.parse(localStorage.getItem("user"));
          userNine.textContent = lastUser.nine;
          userLastNameSpan.textContent = lastUser.lastName;
          userEmailSpan.textContent = lastUser.email;
          userPasswordSpan.textContent = lastUser.password;
          userFirstNameSpan.textContent = lastUser.firstName;
          userLastNameSpan.textContent = lastUser.lastName;
          userEmailSpan.textContent = lastUser.email;
          userPasswordSpan.textContent = lastUser.password;
          userFirstNameSpan.textContent = lastUser.firstName;
          userLastNameSpan.textContent = lastUser.lastName;
          userEmailSpan.textContent = lastUser.email;
          userPasswordSpan.textContent = lastUser.password;
          userFirstNameSpan.textContent = lastUser.firstName;
          userLastNameSpan.textContent = lastUser.lastName;
        // }
      });