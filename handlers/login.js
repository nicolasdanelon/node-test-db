const login = (req, res) => {
  const form = `<h1>Login</h1>

<form action="/login" method="post"> 
    <label for='username'>Username</label> 
    <input type='text' name='username' id='username'>
    <br>
    <label for='password'>Password</label> 
    <input type='password' name='password' id='password'> 
    
    <br>
    
    <input type="submit">
</form>`;

  const script = ``;

  res.send(form + script);
};

export default login;
