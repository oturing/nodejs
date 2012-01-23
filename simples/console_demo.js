function fat(n) {
  if (n < 2) {return 1; }
  else {return n * fat(n - 1); }
}

function eco() {
  console.log('eco...\n');
}

function agora() {
  var dt = Date().slice(16, 24);
  console.log(dt);
}
