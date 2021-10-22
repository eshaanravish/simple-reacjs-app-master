import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '904066725876-immqu4c1bm72vm9vlv127l9emr40mhch.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;