// This is used to get the user city location.
// The form input id must be "city".

const getDataFromUser = form => {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const city = document.querySelector("#city").value;

    return city;
  });
};

export default getDataFromUser;
