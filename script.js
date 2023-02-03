window.onload = function () {

    var snake = document.getElementById("snake");
    var context = snake.getContext("2d");
    document.addEventListener("keydown", keyPush);

    setInterval(gameBG, 100);

    const vel = 1; //define a quant de bloco que a cobrinha vai ter que passar
    var vx = vy = 0;
    var px = 10;
    var py = 15;
    var box = 30;//tamanho do quadrado
    var quantbox = 20; // quantidade de peças
    var ax = ay = 10;//posição da maçã

    var cobra = [];
    c = 4;


    function gameBG() {
        //movimentos da cobra
        px += vx;
        py += vy;

        if (px < 0) {
            px = quantbox - 1;
        }
        if (px > quantbox - 1) {
            px = 0;
        }
        if (py < 0) {
            py = quantbox - 1;
        }
        if (py > quantbox - 1) {
            py = 0;
        }


        context.fillStyle = "lightblue";
        context.fillRect(0, 0, snake.width, snake.height);

        context.fillStyle = "red";
        context.fillRect(ax * box, ay * box, box, box);

        context.fillStyle = "black";
        for (var i = 0; i < cobra.length; i++) {
            context.fillRect(cobra[i].x * box, cobra[i].y * box, box - 1, box - 1);
            if (cobra[i].x == px && cobra[i].y == py) {
                vx = vy = 0;
                c = 5;

            }

        }
        cobra.push({ x: px, y: py })
        while (cobra.length > c) {
            cobra.shift();
        }
        if (ax == px && ay == py) {
            c++;
            ax = Math.floor(Math.random() * quantbox);
            ay = Math.floor(Math.random() * quantbox);
        }

    }
    function keyPush(event) {
        switch (event.keyCode) {
            case 37://esquerda
                vx = -vel;
                vy = 0;
                break;
            case 38://cima
                vx = 0;
                vy = -vel;
                break;
            case 39://direita
                vx = vel;
                vy = 0;
                break;
            case 40://baixo
                vx = 0;
                vy = vel;
                break;

            default:
                break;

        }
    }

}




