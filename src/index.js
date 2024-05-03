import "./index.scss";

// Stocker la donnée validée sous formulaire
// Utiliser la donnée stockée pour fetch météo ville
// Convertir les données au format Json

// This below is an IIFE to get data from the API and display in console
// IIFE is necessary as the promise needs to be resolve before accessing the data
// risk of undefined without the IIFE

// (async () => {
//   const toulouse = await getHourlyInfo("Toulouse");
//   const toulouseBis = await getCityInfo("Bordeaux");
//   console.log(toulouseBis.city);
//   console.log(toulouse.weatherTemp14);
// })();
