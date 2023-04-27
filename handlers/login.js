const login = (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  const form = `<h1>Login</h1>

<form action="/login" method="post"> 
    <label for='username'>Username</label> 
    <input type='text' name='username' id='username' maxlength="10">
    <br>
    <label for='password'>Password</label> 
    <input type='password' name='password' id='password'  maxlength="30">

    <br>

    <input type="submit">
</form>`;

  const script = ``;

  res.send(form + script);
};

export default login;
