var qr = require('qr-image');


var anzahl = process.argv[2];

for (var i = 0; i < anzahl; i++) {
    var zufall = Math.random();
    var qr_svg = qr.image('Alpha-Poppo' + zufall, { type: 'png' });
    qr_svg.pipe(require('fs').createWriteStream('./ida_und_moritz_papa_ordner/' + i + '_alpha-poppo_' + zufall + '.png'));
}