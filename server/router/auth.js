const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const User =mongoose.model("User");
const Products=mongoose.model("Products")

const bycrypt=require("bcryptjs");
const crypto=require("crypto");
const nodemailer=require("nodemailer");
const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin=require("../middleware/requireLogin")
const Order=mongoose.model("Order")


router.get("/",requireLogin,()=>{
    console.log("hello World")
})

router.post("/signup",(req,res)=>{
    const {email , password , name}=req.body;
    if(!email || !password || !name){
        res.status(422).json({error:"Please fill all the fields"})
    }
    User.findOne({email})
    .then((savedUser) =>{
        if(savedUser){
            return res.status(422).json({error:"Email already exists"})
            
        }
        const code=Math.floor(Math.random() * 9000);
        
        crypto.randomBytes(40,(err,buffer)=>{
            if(err){
                console.log(err)
            }
            const token=buffer.toString("hex");
            let transport=nodemailer.createTransport ({
                service:'gmail',
                auth:{
                    user:'arhamkhancs99@gmail.com',
                    pass:'03171070016'
                }
            });
            let mailOption={
                from:'arhamkhancs99@gmail.com',
                to:email,
                subject:'Email verification',
                html:`
                <!DOCTYPE html>
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<style type="text/css">    
    /* CLIENT-SPECIFIC STYLES */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }

    /* RESET STYLES */
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width:600px){
        h1 {
            font-size: 32px !important;
            line-height: 32px !important;
        }
    }

    /* ANDROID CENTER FIX */
    div[style*="margin: 16px 0;"] { margin: 0 !important; }
</style>

<style type="text/css">

</style>
</head>
<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">

<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Reset your password
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <!-- LOGO -->
    <tr>
        <td bgcolor="#f4f4f4" align="center">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                <tr>
                    <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                        <a href="http://rightindem.com" target="_blank">
                            <img alt="Logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUTEhMVFhUWGBYYFxcVFhcWFhoXFxUWGxUVFRgaHSggGh0lHRgXITIhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGzUlICUtLS0vLTAtLS04LS8vLS0tLS0vLS8tLS8tLS0tLS0tLy4tLS0tLy0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBBQcDAv/EAEUQAAIBAgIGBwMJBgUEAwAAAAECAAMRBDEFBhIhQVETImFxgZGhBzKxI0JSYnJzssHRFDM0kqLCFlODs/CC0uHiFSRD/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAUGAgMEAQf/xAA2EQABAwICBwcEAgICAwAAAAABAAIDBBEhMQUSQVFhcYETkaGxwdHwFSIy4RTxIzRSYiQzQv/aAAwDAQACEQMRAD8A7jERCJERCJERCJE+WYDOVfTOuNGldaXyrcweoP8Aq4+HnNUs8cQ1nmy3Q08s7tWNtz8z3dVaWM0mkNZsLR3GptN9Gn1j4kbh4mc80pp7EYn36h2foL1U8hn43muJkPNpg5Rt6n2Hup6n0Dtmd0HufbqrpjNfSf3VEd9Q3/pX9Zp8Vrbi3/8A02RyQKPWxPrNHEjpK+ofm49MPJS0WjaWPJg64+d1Mq6Xrt71aqf9RreV5GeuxzZj3kmfETmMjjmT3ldQiYMmjuC+hWYfOPmZJp6Urr7taqO6ow/ORInokeMie9emJhzA7luKGtOMTKsT2MFb1Iv6zb4PXtx+9pKw5oSp8jcH0lQibmVs7Mnnrj5rlk0dSyfkwdMPKy6hgNbcLV3FjTPKoNkfze76zeJUBFwQQciN4nEpN0dpathzelUK9manvU7pJQ6YcMJG9R7KJqNANzhd0PuPZdkiU3Q+u6PZa67B+ktyh7xmvrLZRqq4DKQQRcEG4PcZMQzxzC7DdQNRTS07tWVtvXkdq9oiJuWhIiIRIiIRIiIRIiIRIiIRJrNL6YpYVNqo2fuqN7MeQH55SDrLrEmEXZFmqEbl4AfSfkOzjOb43GPWc1KjFmPE/ADgOyRtbpBsP2sxd5c1LaP0W6p+9+DPPlw4+a2WndZK2KJF9inwRTn9o/O+HZNLMxK3JK+R2s83KtsMLIW6kYsPnikRE1rakREIkREIkREIkREIkREIsTZaH03WwrXRurxQ71PhwPaJrombJHMOs02KwkjZI3VeLjcuq6D0/SxY6p2XHvI2Y7R9Idvwm7nEqNVkYMpKsDcEbiD2GdC1X1oFe1KrYVeByD93Juzy7LFRaREv2SYO37/38CqmkdEugvJFi3dtHuOPfvVriIkqoVIiIRIiIRIiIRJXtZ9PrhUstjVYdUcB9Zuz4+cn6c0omFpGo285KvFmOQH/ADhOUY7FvWdqlQ3Zjc/kByAkbpCt7Fuoz8j4DepbRej/AOS7Xf8AgPE7uW/9ryr1Wdi7kszG5JzJnzESsE3VxAAFgkRE8XqREQiREQiREQiREQiREQiREQiREQiTANt43EbwRnfgRMxPUXRNT9Y+nHRVT8qBuP0wP7hx5585bJxClUKkMpIYEEEZgjIidS1W02MXSud1RbBx8GHYf1lj0dW9oOzf+Qy4j3VR0to7sT2sY+058D7Fb2IiSyhUiIhEnyzWF59Sq696V6Kj0SnrVbg9ifO88vOap5WxRl7ti3QQunkbG3M/L9M1UtatMnF1jY/JpdUHPm/j8LTTTEzKdLI6R5e7Mq+wwthYI2ZBIiJrW1IiIRIiIRIiYhEEtOitSqlVQ9R+iB3hdnaa3aLi02WqGrGxavXXrZop4cmYc+Q4d+Vo0hpOjQF6tRV5A5nuA3nwk5R6Obq9pPluy6n2Vcr9LvL+yps94x6D37t559pvVKrhlLqwqIPeIGywHMrc3HbeV2dkwOPpV1vSdXHG2YvzB3jxlK1u1Y6O9agOpm6D5v1lH0ezh3ZYVmjgG9pDluz6hZ6O0q5zuxqMHbDl0PFVGJiZkMrAkREIkREIkREIknaG0k2FqrVXfbcw+kpzH594EgzEzY8scHNzCwkjbI0tdkcF2rC4haiK6G6sAQewz3lF9n2lfew7Hm1P+9R8fOXqW+mnE0YePh2qhVdMaeZ0Z2ZcRsSIidC51gmci1j0j+04h3+beyfZXcPPefGdC1uxvQ4VyD1m6i97ZnwFz4TlUgtMTYtiHM+ismgaf8pjyHr6eKzERIJWRIiIRIiIRIiIRYEveqGrGxavXHWzRDw5Mw58hw78mqOrAS1asvWzRD83kzDnyHDvy2+tmmP2aj1T8o/VTs5t4D1Ik5R0TYmdvPsxA9Tx3BVzSGkXTvFNT7cCfQcN56DDOBrTrT0N6VGxqfObMJ2drfD0lArV2dizsWY5ljcnxnwTfec+Zlj1c1VbEDpKhKU+FvebuvkO2cckk1bJYd2wfN6744qfR0Os48ztJ3D2WhwmKekwemxVhkR8DzHZOkasawri12WsKqjrDgw+kvZzHCUfWHQb4R7HrI3uPz+q3IiQMHiXoutRDZlNx+h7DlPYJ5KSXVdltHqPQryqpYa+HXZnsPoeGzHEHxtGtuq/R3rUB1M3QfN5sv1ezh3ZVCdi0Vj1xNFai5MN45HJlPcZTNbtWOjvWoDqZug+b9Zfq9nDuy6q6hBHbRZZkeo9R3Lj0ZpMg/x6jAjAE+R47j0KqMREhFYUiIhEiIhEiIhF7YDFNRqJUX3kII7eY8RceM7Fhay1EV13qwDDuIuJxadG9n+O28OaZzpNYfZbePXaHhJnRExEhjO3HqP0oDT1PeNswzGB5H9+atcREsKqyoXtHxW+lS7C58eqvwbzlLm910r7eLfkuyg8FF/UmaOVGuk16hx427sFetGxdnSsHC/fj6pERONdyREQiREQiS6aj6BVwMRVF956NTlcGxc89+XdflKXOmakYxamFVR71MlWHeSQfEH0MktFxsfP92wXHNRGmpZGU32bTYnhj55KyTl+vGN6XEsvCmAg782PmbeE6fOMaRql61Rj853PmxMktMPIiDd58lFaBiDpnPOwef6UrVzRv7TXRD7vvP8AZXPz3Dxlk05p0LiqNFTanRqU9u24XBG7uUet+Uj+zdR0tU8Qg9WF/gJWNIMTVqbWZd79+0byPa8w0rXNzc7HkMhy/alHxtqa1zX5MaAObsz09l1jTGjlxNFqbcRuPJh7rD/nOcirUyrFWFipII5EGxEvurOtVNqYp1nCOosGY2VgMiTwPfnKhrDWSpiar0zdS1wRkdwuR3m5m7Sb4pY2SsOOX98lzaHZNBK+CQYZ8M7Ycx5KwezvHlXegTuYba/aG5h4i38svxF5yTVlyMXQI+mB4MbH0JnXBO3RUpfBY7Db1XBpuEMqdYf/AEL9cj32vzXN9c9ArQIq0hZGNivBWtfd2Gx3cLSsToHtDxiiilK/WZg1uSqDv8yB5zn8h9JRsZOQzn1U7oiV8lKC/iAd4Hy3RIiJwKTSIiESIiESWTUHFbGJ2ODqw8V6w9A3nK3JuhMR0eIpNyqJfuuAfQmdFK/Uma7iFzVkXa072bwe8YjxC7HERLpqr5/dcb01U2q9VudR/wARtIc+67XZjzJPrPiUaQ3eTxK+jRizAOASIiYLNIiIRIiIRJK0XpKphqgembHiODD6LCRYmTXFp1m5rF7GvaWuFwdi67obStPE09tM8mU5qeR/XjOd62aIbD12Nvk3JZDw37yveD6WkDRWkqmGqCpTO/iDkw+i3ZOmYDG0MfR3gMDudGsSrdv5ESdbI2vi1HGzxjz+eCrTo36Lm7Ro1ozhxHDnuO3I4qh6oaTGHrgubI42GPAXIIY+IHmZN1z0K1Oo1dBem5ubb9ljnfsOd+3um3xuotNjelUZOxhtjw3g+pkzRWi8ZhxsdJRqU8tl9oEDkDY7uw3njKOXszBK3C9w4Y2PLOxWUtfCZhUwuxtZzXXFxzxAI+bQuaxOoVtVcLU3tRCNx6N2A/Iekzh9U8Khv0e0frsWHlkfKaPo818x4+y6fr9Pb8XX3Yed/RVfUXQ7PUFdhZEvsk/Oe1t3MDfv527ZbNYtOphE+k7e4nPtbkJ86w6ap4KmAAC5FkQbvE2yUTmOMxT1nL1GLM2+5+A5DsnRLM2hi7GM3cczu+bAuSCnfpKb+RMLMGAG+2zltJ6DhnGYt6zmpUbaZsz8ABwHZPGIkESSblWZrQ0WGSRETFepERCJERCJERCLp3+IInPP2s84k19Qcqt9JcotUWYjtPxmJK0tS2a1VeVRx5MZFkRILOI4lWaM3YDwCRETBZpERCJERCJERCJJeitJVMNUFRDv4g5MOKtIkTJri06zc1i9jXtLXC4K65obS1PFU9tNxyZTmp5H8jxmznG9FaRqYaoHQ7+I4MPotOl6K1hoYhQQ6q3FGIDA+OY7RLPRV7ZxZ2DvPl7Km6R0a6mdrMxYfDgffvxW5ml1i08mETg1RvcT825CeOm9ZqOHU7LK9Tgqm+/mxGQ9ZzXG4t6zmpUbaLZn8hyHZMa6vEI1WYu8v3wWejdGGoOvILM8/wBceg4ZxmKes5qVG2mbM/ADkBynjESslxJuVcGtDRYZJERPF6kREIkREIkREIkRMQgUroDyiXr/AA5El/pxVc+sKqa4UNjGVRzIYf8AUoJ9bzTy3+0XC2qU6nNSp71Nx6N6SoTjrmalQ8cb9+KltHSdpSxu4W7sPRIiJyLtSYmZudUtGjEYlVYXVQXYcwLWB8SPC82RRmR4Y3MrVNK2GN0jsgLrGi9WcTiF2lUKpyZzsg9oFiSO20k43U3E0xtAI9uCMSfJgL+E3et2sj0H6GgQpABZrA2vkqg7srHxE1egdbqwqKtdttGIBJABW+4EEAXHO8lHQ0TH9k4m+V9l/nBQzajSMkfbsDdXMN22+clVyLbjmM/zBm2wGreJroKlNAVa9jtKMiQdxPMGbv2haMVCldQBtHZe3EgXVu+wI8BNtoCs1PRgdfeVKzC/MPUImEdC0TuikOAF8OnNbJtJPNKyaEC7nWsd+PLaO5Vb/B2M/wAsfzp+s1eP0ZWw5Aq02W+RO8HuYbpuTrtiuafyD9ZZ9C4r/wCRwrrWQA3KEjK+yCGW+RF/Sex01LOdWEnWzxyXktXW01nztaW3sbXv5rn+j9G1cQStJdpgu0RcDdcDdfvEjOpBIYEEGxBzBGYIlq9nQ/8AsVPuz+OnNXrgtsZV+0vqikzlfA0UzZdpJHn7LtZVPNY6DYGgjw8MVqaaFiFUEkkAAZknICSdI6PqYdgtVdlioa1wdxJG+3cZsNTBfG0u9vSm82HtBF8SgGfRL+OpDYGmmdLtDrI+peKxsGwtJJ6n2Vf0boyriW2aSFiMzko7yd03p1IxNr3pX5bTX/DaWTGVF0ZhFCKC25R9aoRvZvInwAlPTW3Fhtrpbj6JVdnu3C/rOt1PTU9mzXLjnbYuGOrrarWfT2DBgL5n54bVq8fgKlBtiqhVu3IjmCNxE+8Ho+rWV2pqWFMAtbkeQ45E+EvuOVNIYLpAtmCsy81dL3W/I2t3ESJ7N/crfaT4GeCgb27WB12uFwU+qP8A4z5C2z2EAjZn/Y5qhzAEuOuGrOzetRG7Ooo+bzdRy5jh3Zfep2rN7V6w3Z00PHk7DlyHjNH0+btuy8dlt/6zvgur6rB/H7fw233fvK2KqmM0fUohDUUrtrtLfO3byOW7tEjy8e0kbqP+p/ZKPNVZCIZiwbLLdQVDqiASOGJv5lIiJyrsSSdFUOkrUk+k6DwLC/peRpYNRcL0mKB4U1Z/G2yPxek307NeVrd5Hmueqk7OF79wPfs8V1CIiXS6+fWVe13wPS4ViBvpkOO4bm/pJ8py+dsqICCDvBuCOwzj+mMCcPWekfmnd2qd6nyIkBpiGzmyDl7Kz6AqPtdCdmI8j6KJERINWJJavZz/ABD/AHR/GkqstXs6/iH+6P40nZQf7LOfoVw6T/1JOXqF96V0I+MxmI2HQFOjuGJ33prvFgeXqJ8jUSv/AJlLzf8A7ZC1pxL0sdVamzKw2N6kg/u03d0ijWLF/wCdU8x+k6HvpQ9wlYSdZ2R47rhckUdaYmGJ7Q3VbgR/132Vx9o/8Mn3o/BUnvqoUGj0NS2xs1dra93Z6R737LTw9ov8On3q/gqTx0bVCaIJY2ulZR3tUcAeZkkTq1rz/wBPZRIbr6Ojbvkt4FTMPoPR1Unowj2zCVWNvANukTWDTlLBocPRXZe1gApCoGHvXPvHuvvzlK0VpBsPVWouYzHNTmp7/wBJeNZNGrjqC1qO9wt1tmy/OQ9oPrccZohn7aF5haGvGdhmOHFb6ilEFQwVDy6M5XOR4/PIhaf2dH5d/uj+NJv9Jaw4SjVenUpsXUi5CKcwDmTyIlf9nQ+Xf7o/jSajWbELUxVVlNwWsDz2V2TbxBmmKodBRNcy1y459V0TUjKrSL2yXsGg4b8P2rvozWLCVqqU6dNg7XsSijJSTvB5AzR69fxdH7Cf7lSaXVautPFUmY2G0Rc/WUqPUibrXr+LpfYp/wC5Umbqh89KXPzDhl0WLKRlNXNbHexY44471udesMaqUKYIBersgtlcggXmj/wJX/zKXm//AGzae0f9zT+8P4DKlT0/ilAAr1LDtv6mK50AqHCZpOWR4Jo5lU6laYHgZ3BF9qv+hdGPhsK9NypPyh6t7bx2gTVezb3K32k+Bk7VjF1K2DdqjFm+UFznYLuE1ns3rraql+t1GA5ixBI/5xnWwt7WDVwBBt3BcLw8Q1QebnWbe3M4r50NrKKVapQrn5M1KgVj8y7nqn6vw7smktZOnxNGjRPyQrUgzD55FRcvq/GVPS37+r95U/GZ6aD/AImh97S/3FkX/Nlv2N8Nbra+SmPpsH/vtjq5bL2z5+uOatftK92h31P7JR5c/aPXUmkgPWAdiOQOyBfyPlKZMNKf7Tunktmhh/4bOvmUiIkepRYnQPZ5gdmk9U5u1h9lf/YnylDw9FqjKii7MQo7ybCdh0dhRRpJTGSKB32G8+J3yY0RDrSGTd5n9KC07UasQiGbjfoP3a3JTIiJYlVElM1/0XtKK6jenVa30Sdx8Cf6uyXOeNekrqVYAhgQQeIOYmmohE0ZYdq301Q6nlbI3Z4jcuKTM2On9FNhqzIblc0PNTl4jI9010p0jHMcWuzCv0cjZGh7TgcQklYSlWVTURtgbxfpFpk7NiwUFgWzG4X4SLJ+C0maaMliwba3FjsdZbXKZE8fAcpnDq633Gy1z6+r9gvj4fP6XlWwdYs20rFhtbRY39wDa3nO118xPs6JqBivyd1DFvlaVl2SA20dqy7yBvtPevp6q9PoyFtsot+PUNyb82sl+ewJ6tp+9Rqmw12VlPypyLBuqdnq2t6zo1ae+Lj8vwPBcpfV2wYNu3lbaON+W4rwq4bE1FuzbY2woHTK/XO4ALtG57uG/KR6qVepSL7Qv1VFRXQFjw2WKg3PrPoaQsLKCB0gqDrHaBAItteOc9MTpQvVp1Nn3CDvYsxs211mtv5dkxJjIzN8Nue/ZsWYE17aotjlhbDDac8vVR8JgalUEoAbEDeyr1jeygMRcmx3DlJVKjiUChWZdqxVRVVTvub7G1cDcTcjhPPRulXoKQACCwY3zNlYWB4HrXuN4IE9X0sSKQ2WvS2bEVCMsza24nnPWdiG3LiD/XBeSGoLyA0FuzuOeO/zXkuBrDbKsu4XcitTyJ4kPvBNvEifFXRlZRcpzvYqbbK7RDAHqm2+xsZ6YrSpfbGyBtIEO+56rq+0TxN1A7p7tp4k1L00s7szAAKSHWorKWAudz5nlBbBvPy/D5dea1SMQ0cug23333KHR0bVfJRv2bXZFvt7WyBtEXJ2W3DlPRtHYhtklWJ6oUFgWFzZOrfaUE5EgCSKWnmT3UAX5Oyk36tMPYXzuS5O0LEG1pihp10a+wp3UhvA2vkjTIu9to36Mbst8BtPh9x4rxz6u5s0cPbP9Ly6DE1hZizW2japUAtskhjZ2GVjflIK0zYngCAe83t+Eyc2mHIFwCRTentcSHBBZubdvHjIa1eqV5lT/KGH93pNcnZnFpJ59P2t8PagfcAMRgN18ceXAcsVOp4bFKAqkgMQNlaozZSw2grdW6gnfbcDPNcFXpkFQwN1AZGBHXuEs6m1jYi9+ElHT7bNtgZWN2JF+iandQctzEnO8xT1hqAKAqDZ2bgKArBWqmxQWFj0nmoOc3OEH/I8PniuYGrtcsbj479p8b911DbR1ZhtFSSTxZS5JfZ2it9qxbdtWtefNDB1SboLEFuttKtjT2Sx2iRa11N78ZNOmOqGCgVPdJ3kbAdXXdfO4t3DnFPTWweomyPlCQHN9qoFDMGtu3KLD4zzUgBH3H5071kX1WqRqDb8xOPAjPHBRcThKpDVGIYA2ZulRjtcveJP/iQpKq4y6MgFgzh95uQQrC1+PvGRpzSatxq/D3BdkOvb7unLdmRhwKTEzJGj8G9eotNPeY27AOLHsA3zBrSTYLNzg0FzjYBWb2f6L23OIYdVOqna5G8+AP8AV2ToUh6NwSUKS00G5RbtJ4k9pO+TJb6WDsIgzbt5/MFQ62qNTMZNmzgPmPVIiJ0rlSIiEWk1l0OMXStuDrvRu3ip7D+h4TldWkyMVYEMCQQcwRmJ2+VPXDV3px0tMfKgbx9MDh9ocOeXKRWkaLtR2jPyHj+/6U1onSPYHspD9pyO4+x29+9c7iCLZ+sStK3JERCJERCJERCJERCJERCJERCJERCJERCJETAEIsidJ1O0D+zJtuPlXG/6q8F7+J8OU1mpurWWIrDtpqfR2HwHjyl6lh0ZQ6n+V+ewbuPPyVW0xpESf4IzhtO/gOA270iIkyoBIiIRIiIRIiIRVLWrVYV71aIAqfOXIP8Ao3bx485z2pTKkqwIINiCLEHkRO3zQ6wauUsUNr3KgycDyDjiJE12jhKdePB27f8AtTWjtLGECOXFuw7R7jy2LlsSbpXRVXDNs1FtyYb1b7J/LOQZXnscw6rhYq1xyNkaHNNwdqzERMFmkREIkREIkREIkREIkREIkRJGCwNSu4SmpZuzIDmxyA7TMmtLjYZrFzg0FzjYBRxLtqrqna1XEL2rTPozj+3z5TZ6uaqphrO9nq/0r9kHM9vwlnk/Q6M1LSS57Bu5+yrGkdMdoDHBltO/gOHHasCZiJMqASIiESIiESIiESIiESIiEUfFYZKqlHUMpzDC4lN0zqPm2Hb/AE3PorfkfOXqJonpo5h9467e9dNNVzU5vGbcNh6LiuLwdSi2zURkPJhby4HvE8J2nEYdKi7LqrKeDAEesrmkdSKD76bNTPL3l8jv9ZCz6IeDeM354H2Vgp9PRuwmbY7xiPfzXOoljxepeJX3Nhx2NY+TW+M1GJ0VXp+/RqL2lDbzG6Rz6WZn5NPcpaKsgl/B4PX0OKhxMeEzOddNikRMRde2KzElYfRtap7lKo32UYjztabbB6nYqpmFpj67C/ktzNzKeV/4tJ6Fc0lXDH+bwOo8s1Xp60KDVGCopZjkFBJ8hL3gNRqS76zs55L1F/X1EsuDwNKiLU0VB9UAX7zmfGSUOiJHYyG3ifZRVRp6FuEQ1j3D38lSdD6kO9mxB2F+gti57zkvr4S7aPwFKggSkgUdmZPMnMnvkyJM09JFAPsGO/b85KvVVbNUn/IcN2wfON0iInSuVIiIRIiIRIiIRIiIRIiIRIiIRIiIRIiIRIiJk1eFVrWfjOe4zMxEr9dmVYdE7eS+MHnLxqrmIiYUOa2aUyVyiIliVaCRETxepERCJERCJERCJERCJERCL//Z" width="169" height="40" style="display: block; width: 169px; max-width: 169px; min-width: 169px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">
                        </a>
                    </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <!-- HERO -->
    <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                <tr>
                    <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                      <h1 style="font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 0px;"> Email verification </h1>
                    </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <!-- COPY BLOCK -->
    <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;"> Hi ${name} We're excited to have you get started. First, you need to confirm your account. Just press the button below. Your OTP code is </p>
                </td>
                <tr>
                <td style="padding:10px"><h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 10px;color: #fff;border-radius: 4px;">${code}</h2></td>
                </tr>
              </tr>
             
              <!-- BULLETPROOF BUTTON -->
              <tr>
                <td bgcolor="#ffffff" align="left">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                              <td align="center" style="border-radius: 3px;" bgcolor="#4A35EA"><a href=http://localhost:3000/login/${token}+${code} target="_blank" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #4A35EA; display: inline-block;">Verified your Account</a></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 0px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">If that doesn't work, copy and paste the following link in your browser:</p>
                </td>
              </tr>
              <!-- COPY -->
                <tr>
                  <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                    <p style="margin: 0;"><a href="http://litmus.com" target="_blank" style="color: #4A35EA;">http://localhost:3000/login/${token}+${code}</a></p>
                  </td>
                </tr>
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.</p>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">Cheers,<br>Arham Foods Team</p>
                </td>
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <!-- FOOTER -->
    <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
              <!-- NAVIGATION -->
              <tr>
              
    </tr>
</table>
    
</body>
</html>

                `
            }
            transport.sendMail(mailOption,function(err,data){
                if(err){
                    console.log("Error occurs",err)
                }else{
                    console.log("Email Sent!!!")
                    res.status(200).json({message:"please check your email."})
                }
            })
            
        })
      
     
       
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.post("/verification",(req,res)=>{
    const {a,code , usercode}=req.body
    const user=JSON.parse(a)
    const {email ,name ,password}=user

    
   
    if(code != usercode){
        return res.status(422).json({error:"Invalid code"})
    }
    
    User.findOne({email})
    .then(user =>{
        if(user){
            return res.status(422).json({error:"user already exists"})
        }
        bycrypt.hash(password,16)
        .then((hashedPassword) => {
            const user=new User({
                email,
                password:hashedPassword,
                name,
                verification:true,
                });
            

            user.save()
            .then((user) => {
                res.status(200).json({message:"Account created Successfully"})
            })
            .catch(err =>{
                console.log(err)
            })

        })
        .catch((err) =>{
            console.log(err)
        })
    }).catch(err => console.log(err))
     
  
    
})
router.get("/protected",requireLogin,(req,res)=>{
    res.send("hello user")
})
router.post("/signin",(req,res)=>{
    const {email , password}=req.body;

    if(!email || !password){
        res.status(422).json({error:"Please fill all the fields"})
    }
    User.findOne({email})
    .then((savedUser) =>{
        if(!savedUser){
            return res.status(401).json({error:"Invalid Email & Password"})
        }
        bycrypt.compare(password,savedUser.password)
        .then((ifMatch) =>{
            if(ifMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
                
                res.status(200).json({token:token,user:{name:savedUser.name,id:savedUser._id,email:savedUser.email}})
               
            }
            else{
                return res.status(401).json({error:"Invalid Email & Password"})
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    })
    .catch((err) =>{
        console.log(err)
    })
})

router.post("/reset",(req,res)=>{
    const {email}=req.body;
 


    crypto.randomBytes(80,(err,buffer)=>{
        if(err){
            console.log("Error: ",err)
        }
        const token=buffer.toString("hex");
        User.findOne({email})
        .then(user =>{
            if(!user){
                return res.status(422).json({error:"email doesn't exists"})
            }
            user.resetToken=token;
            user.expireToken=Date.now() + 1800000;
            user.save(result =>{
                let transport=nodemailer.createTransport ({
                    service:'gmail',
                    auth:{
                        user:'arhamkhancs99@gmail.com',
                        pass:'03171070016'
                    }
                });
                let mailOption={
                    from:'arhamkhancs99@gmail.com',
                    to:email,
                    subject:'Pasword Reset',
                    html:`<html lang="en-US">

                    <head>
                        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                        <title>Reset Password Email Template</title>
                        <meta name="description" content="Reset Password Email">
                        <style type="text/css">
                            a:hover {text-decoration: underline !important;}
                        </style>
                    </head>
                    
                    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
                        <!--100% body table-->
                        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                            <tr>
                                <td>
                                    <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                                        align="center" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td style="height:80px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align:center;">
                                              <a href="https://rakeshmandal.com" title="logo" target="_blank">
                                                <img width="60" src="https://i.ibb.co/hL4XZp2/android-chrome-192x192.png" title="logo" alt="logo">
                                              </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="height:20px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                                    style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                                    <tr>
                                                        <td style="height:40px;">&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding:0 35px;">
                                                            <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                                                requested to reset your password</h1>
                                                            <span
                                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                                We cannot simply send you your old password. A unique link to reset your
                                                                password has been generated for you. To reset your password, click the
                                                                following link and follow the instructions . Link will be valid 
                                                                        till half an hour only otherwise you will not allow
                                                                                    to reset your password.
                                                            </p>
                                                            <a href="http://localhost:3000/reset/${token}"
                                                                style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                                                                Password</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="height:40px;">&nbsp;</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        <tr>
                                            <td style="height:20px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align:center;">
                                                <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.rakeshmandal.com</strong></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="height:80px;">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <!--/100% body table-->
                    </body>
                    
                    </html>`
                    // html:`<h3>Hi ${user.name},</h3>  We're sending you this email because you requested <br /> a password reset.Click on this Link to create a new password <br />This Link will be valid till half an hour. 
                    // <br />
                    // <br />
                    // <a href=http://localhost:3000/reset/${token}>http://localhost:3000/reset/${token}</a>
                    // <br />
                    // <br />
                    // If you didn't request a password reset,you can <br />ignore this email.Your password will not be changed.
                    
                    // `
                };
              
            })

        })
    })
    
    
})
router.post('/newpassword',(req,res)=>{
    const newPassword = req.body.password
    const sentToken = req.body.token
    User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Try again session expired"})
        }
        bycrypt.hash(newPassword,12).then(hashedpassword=>{
           user.password = hashedpassword
           user.resetToken = undefined
           user.expireToken = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })
        })
    }).catch(err=>{
        console.log(err)
    })
})

router.post("/product",(req,res)=>{
  const {name , type , image , price , desc}=req.body
  const products=new Products({
      name,
      type,
      image,
      price,
      desc
      
  })
  products.save()
  .then(res => console.log(res))
  .catch(err => console.log(err))
})
 
router.post("/products",(req,res)=>{
let skip=req.body.variables.skip
let limit=req.body.variables.limit

// console.log("skip :",skip,"limit :",limit)
   
   const datas= Products.find().skip(skip).limit(limit)
    .then(data =>{
        
        res.json({data,postSize:data.length})
    } )
    .catch(err => console.log(err))
    
})
router.get("/fastfood",(req,res)=>{
    const data= Products.find({'type':'fastfood'})
     .then(data =>{
         res.json({data})
     } )
     .catch(err => console.log(err))
     
 })
 router.get("/pizza",(req,res)=>{
    const data= Products.find({'type':'pizza'})
     .then(data =>{
         res.json({data})
     } )
     .catch(err => console.log(err))
     
 })
 
 router.get("/extra",(req,res)=>{
    const data= Products.find({'type':'extra'})
     .then(data =>{
         res.json({data})
     } )
     .catch(err => console.log(err))
     
 })
 router.get("/beverage",(req,res)=>{
    const data= Products.find({'type':'beverage'})
     .then(data =>{
         res.json({data})
     } )
     .catch(err => console.log(err))
     
 })
 router.get("/bbq",(req,res)=>{
    const data= Products.find({'type':'BBQ'})
     .then(data =>{
         res.json({data})
     } )
     .catch(err => console.log(err))
     
 })
 
router.post("/placeorder",requireLogin,(req,res)=>{
    const {phone , address , name , notetorider}=req.body
    if(!phone || !address ){
        res.status(401).json({error:"Please Fill all the fields"})
    }
    
    // console.log(req.body)
    const orders=new Order({
        user:req.user,
        items:req.body.items,
        address:address,
        phone:phone,
        note:notetorider

    })
    orders.save()
    .then(data => res.status(200).json({message:data}))
    .catch(err => console.log(err))

})


module.exports=router;