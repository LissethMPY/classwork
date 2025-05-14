const servicios = {
  railway: "https://gregarious-luck-production.up.railway.app",
  vercel: "https://vercel-ejemplo.vercel.app",
  heroku: "https://tu-app.herokuapp.com",
  digitalocean: "http://206.189.181.103/api/home",
};

function abrirServicio(nombre) {
  const url = servicios[nombre];
  window.open(url, "_blank"); 
}