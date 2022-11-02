const params = new URLSearchParams(document.location.search);
switch(params.get('destino')) {
case 'gps':
    window.location.replace('https://ayuda.cdmisiones.net.ar/vistas/reclamos/luminarias/tema10.html#02d')
    break;
case 'foto':
    window.location.replace('https://ayuda.cdmisiones.net.ar/vistas/reclamos/luminarias/tema10.html#01d')
    break;
default:
//window.location.replace('https://ayuda.cdmisiones.net.ar/')
}