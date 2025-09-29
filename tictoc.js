$(document).ready(function(){
    var arr=[];
    var arr1=[];
    var bt=[];
    var checker=false;
    const win=[
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['1','4','7'],
        ['2','5','8'],
        ['3','6','9'],
        ['1','5','9'],
        ['3','5','7']
    ];
    $(".start").click(function(){
         arr=[];
         arr1=[];
         bt=[];
         checker=false;
         $("button").css("background-image","");
         $("button").css("opacity","");
         $("button").prop("disabled", false);
        });
        function isWinning(playerArray) {
            return win.some((combo) => combo.every((num) => playerArray.includes(num)));
        }
        $("button").click(function(){
            const value= $(this).val();
            $(this).css("opacity","1");
            if(checker) {
                alert("Game Over! Click 'Restart' to restart.");
                return;
            } 
                if(bt.includes(value))
                {
                    alert("Already occupied");
                }
                else 
                {if((bt.length)%2===0)
                    {
                        $(this).css(
                            {"background-image":"url(x.png)",
                            });
                        arr.push(value);
                        if (arr.length >= 3 && isWinning(arr)) {
                            showCelebration("Red Wins!");
                            $(".cell").prop("disabled", true);
                            checker=true; }
                    }

                    else
                    {
                        $(this).css("background-image","url(o.png)").addClass("o");
                        arr1.push(value);
                        if (arr1.length >= 3 && isWinning(arr1)) {
                            showCelebration("Blue wins!");
                            $(".cell").prop("disabled", true); 
                            checker=true;}
                    }
                bt.push(value);
                }
        if(bt.length===9 && !checker){
            alert("It's a draw");
            arr=[];
         arr1=[];
         bt=[];
         $("button").css("background-images","");
         $(".cell").prop("disabled", false);
         checker=false;
        }
    });
    function showCelebration(message) {
        $("#winnerText").text(message);
        $("#celebration").fadeIn();
    
        for (let i = 0; i < 100; i++) {
            const confetti = $('<div class="confetti"></div>').css({
                left: Math.random() * window.innerWidth + 'px',
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                animationDuration: (Math.random() * 2 + 2) + 's',
                top: '-20px'
            });
            $('body').append(confetti);
        }
            for (let i = 0; i < 100; i++) {
                const confett = $('<div class="confett"></div>').css({
                    left: Math.random() * window.innerWidth + 'px',
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    animationDuration: (Math.random() * 2 + 2) + 's',
                    top: '-20px'
                });
            $('body').append(confett);
        }
    }
    $("#closeCelebration").click(function () {
        $("#celebration").fadeOut();
        $(".confetti").remove();
        $(".confett").remove();
    });   
});