const servicios = {
  railway: "https://lisrailway-production.up.railway.app",
  vercel: "https://tu-app.vercel.app",
  heroku: "https://tu-app.herokuapp.com",
  digitalocean: "https://tu-app.digitalocean.app",
};

function abrirServicio(nombre) {
  const url = servicios[nombre];
  window.open(url, "_blank"); 
}