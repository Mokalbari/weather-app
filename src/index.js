import "./index.scss";
import getHourlyInfo from "./modules/getHourlyInfo";

// Stocker la donnée validée sous formulaire
// Utiliser la donnée stockée pour fetch météo ville
// Convertir les données au format Json

(async () => {
  const toulouse = await getHourlyInfo("Toulouse");
  console.log(toulouse.weatherState00);
})();
