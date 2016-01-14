$ = document.getElementById.bind(document);
document.cookie = Math.random()
var nivel = 0;
var old, prev = '';
var oldConsole = console;
var oldAlert = alert;

function html(txt) {
    $('html').textContent = txt;
}

function log(txt) {
    if (prev.toString().search('console.log')>0) {
        $('log').textContent = prev + "\n" + txt;
    } else {
        $('log').textContent = txt;
    }
    prev = txt;
}

function hooks() {
    alert = function(s) {
        if (s == document.cookie) {
            $('code').innerHTML = '<a class="button" onclick="cargarNivel('+(nivel+1)+')">Siguiente nivel</a>';
            oldAlert('Completado');
            };
        oldConsole.log(s);
        };
    console = {
        log: function(s) {
            log(s);
            }
        };
}

function check() {
    var input = $('input').value;
    if (old != input) {
        old = input;
    eval('('+
        'function script(filtro, data) {'+
        'hooks();'+
        'filtrado = eval(\'(\'+escaper[nivel]+\')\')(input);'+
        'html(filtrado);'+
        'sandbox.document.open();'+
        'sandbox.alert = function(s) {'+
            'if (s == document.cookie) {'+
                '$(\'code\').innerHTML = \'<a class="button" onclick="cargarNivel(\'+(nivel+1)+\')">Siguiente nivel</a>\';'+
                'oldAlert(\'Completado\');'+
            '};'+
            'oldConsole.log(s);'+
        '};'+
        'sandbox.console = {'+
           'log: function(s) {'+
            'log(s);'+
            '},'+
        '};'+
        'sandbox.document.write(filtrado);'+
        'sandbox.document.close();'+
        '}'+
        ')')(escaper[nivel], input);
    };
};

function cargarNivel(n) {
    html('');
    log('');
    if (0 <= n && n < escaper.length) {
        $('explicacion').textContent = '';
        $('code').textContent = escaper[n];
        nivel = n;
    } else if (n == escaper.length) {
        $('explicacion').innerHTML = "<h1>Haz terminado todos los niveles.</h1>";
        nivel = 0;
    } else {
        cargarNivel(0);
    };
}

function explicacion() {
    $('explicacion').innerHTML = $(nivel).innerHTML;
}
