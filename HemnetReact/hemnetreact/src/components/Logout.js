import React from "react";
import { GoogleLogout } from "react-google-login";

// Här är vårt clienId, som vi fick ifrån google.cloud.platform.
// Fungerar som en API-key, för att kunna använda googles tjänster, i vårt fall react-google-login.
const clientId =
  "12342795773-amov5bovsjivmcilbbkaj45ihc25qf33.apps.googleusercontent.com";

function Logout() {
  const onSuccess = (res) => {
    console.log("Logout made successfully");
    alert("Du är utloggad");
    localStorage.clear(); //Om man loggar ut raderar vi Token ifrån web-läsaren.
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
