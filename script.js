const servicios = {
  railway: "https://gregarious-luck-production.up.railway.app/",
  vercel: "https://vercel-ejemplo.vercel.app/",
  heroku: "https://flask-test-app-keylet-7cd2db8c273a.herokuapp.com/",
  digitalocean: "http://142.93.248.101/api/home",
  openai: "https://platform.openai.com/",
  gmail: "https://mail.google.com/"
};

function abrirServicio(nombre) {
  const url = servicios[nombre];
  window.open(url, "_blank"); 
}