import React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./utils/refreshToken";

// Här är vårt clienId, som vi fick ifrån google.cloud.platform.
// Fungerar som en API-key, för att kunna använda googles tjänster, i vårt fall react-google-login.
const clientId =
  "12342795773-amov5bovsjivmcilbbkaj45ihc25qf33.apps.googleusercontent.com";

function Login() {
  //När man kommer in här, så kommer man få en unik token, som används för att kommunicera med våra controllers i vårt API.
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    refreshTokenSetup(res); //Här sätter vi en "livslängd" på vår token, tills man har loggat ut.
    localStorage.setItem("myToken", res.tokenId); //Här sparar vi lokalt token i vår web-läsare, för att kunna använda den på separata vyer.
  };
  //Här kommer vi ifall vi inte lyckas validera vår email inloggning.
  const onFailure = (res) => {
    console.log("[Login faild] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
