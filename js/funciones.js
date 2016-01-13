$ = document.getElementById.bind(document);
nivel = 0;

function html(txt) {
    $('html').textContent = txt;
}

function log(txt) {
    $('log').textContent = txt;
}

function check() {
    var input = $('input').value;
    filter = eval('('+escaper[nivel]+')');
    html(filter(input));
    sandbox.document.open();
    sandbox.alert = function(s) {
        if (s == document.cookie) {
            alert('Completado');
            };
        };
    sandbox.console = {
        log: function(s) {
            log(s)
            }
        };
    sandbox.document.write(filter(input));
    sandbox.document.close();

};

function cargarNivel(n) {
    $('code').textContent = escaper[n];
    nivel = n;
}
