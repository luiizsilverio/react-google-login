import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [picture, setPicture] = useState()
  const [isLogged, setIsLogged] = useState(false)

  const responseGoogle = (response) => {
    const { profileObj: { name, email, imageUrl } } = response

    setName(name)
    setEmail(email)
    setPicture(imageUrl)
    setIsLogged(true)
  }

  const rejectGoogle = (response) => {
    console.log(response)
    alert(response.error)
  }

	return (
		<div className="container">
			<GoogleLogin
				clientId={process.env.REACT_APP_CLIENT_ID}
				buttonText="Continuar com o Google"
        onSuccess={responseGoogle}
        onFailure={rejectGoogle}
			/>
      {
        isLogged &&
          <div className="center">
            <h1>Dados do usuário</h1>
            <img src={picture} alt={name} className="profile" />
            <p>Nome: {name}</p>
            <p>E-mail: {email}</p>
          </div>
      }
		</div>
	);
}

export default App;
