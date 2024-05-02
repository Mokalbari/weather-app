import "./index.scss";
import getHourlyInfo from "./modules/getHourlyInfo";

// Stocker la donnée validée sous formulaire
// Utiliser la donnée stockée pour fetch météo ville
// Convertir les données au format Json

// This below is an IIFE to get data from the API and display in console
// IIFE is necessary as the promise needs to be resolve before accessing the data
// risk of undefined without the IIFE

// (async () => {
//   const toulouse = await getHourlyInfo("Toulouse");
//   console.log(`At 12h the temperature will be ${toulouse.weatherTemp12}`);
//   console.log(`At 12h the weather will be ${toulouse.weatherState12}`);
// })();
