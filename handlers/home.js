const home = (req, res) => {
  // define the HTML form
  const form = `
    <h1>Add a new person</h1>
    <form id="person-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <br>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" required>
      <br>
      <button type="submit">Submit</button>
    </form>
    <div id="status"></div>
  `;

  // define the JavaScript to handle form submission
  const script = `
    <script>
      const form = document.getElementById('person-form');
      const status = document.getElementById('status');

      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;

        // send a POST request to the server to store the data
        fetch('/people', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, age })
        })
        .then((response) => {
          if (response.ok) {
            status.textContent = 'Data stored successfully!';
          } else {
            status.textContent = 'Failed to store data. Please try again.';
          }
        })
        .catch((error) => {
          status.textContent = 'An error occurred while storing data. Please try again.';
        });
      });
    </script>
  `;

  res.send(form + script);
};

export default home;
