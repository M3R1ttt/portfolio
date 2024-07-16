import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

$(document).ready(function () {
    updateTime()
    setInterval(updateTime, 10000);

    updateDate()

    var userAgent = navigator.userAgent;
    var browserInfo = getBrowserInfo(userAgent);
    $(".browserName").text(browserInfo.name);
    $(".browserVersion").text(browserInfo.version);

    var osInfo = navigator.platform;
    $(".osName").text(osInfo);

    $.getJSON('https://ipinfo.io/json', function(data) {
        $(".country").text(data.country);
        $(".city").text(data.city);
        $(".ip").text(data.ip);
    });

    var dots = 1;
    setInterval(() => {
        var dotsText = "";
        for (var i = 0; i < dots; i++) {
            dotsText += ".";
        }
        $(".typing").text(dotsText);
        dots = (dots % 3) + 1; 
    }, 300);
    


    $(".cmdLine").eq(0).find("h4").hide();
    $(".cmdLine").eq(1).hide();
    $(".cmdLine").eq(2).find("h4").hide();
    $(".cmdLine").eq(2).find("span").hide();
    $(".cmdLine").eq(3).hide();
    $(".cmdLine").eq(4).find("h4").hide();
    $(".cmdLine").eq(4).find("span").hide();
    $(".cmdLine").eq(5).hide();
    $(".cmdLine").eq(6).find("h4").hide();
    $(".cmdLine").eq(6).find("span").hide();
    $(".cmdLine").eq(7).hide();

        // LİNE 1
        var text = $(".cmdLine").eq(0).find("h4").text();
        var characters = text.split('');
        $(".cmdLine").eq(0).find("h4").text("");
        $(".cmdLine").eq(0).find("h4").show();
        for (var i = 0; i < characters.length; i++) {
            (function(index) {
                setTimeout(function() {
                    var currentText = $(".cmdLine").eq(0).find("h4").text();
                    $(".cmdLine").eq(0).find("h4").text(currentText + characters[index]);
                }, 50 * (index + 1));
            })(i);
        }
        setTimeout(() => {
            $(".cmdLine").eq(1).show(100);
            text = $(".cmdLine").eq(2).find("h4").text();
            characters = text.split('');
            $(".cmdLine").eq(2).find("span").show(200);
        }, 1000);


    setTimeout(() => {
        // LİNE 2
        text = $(".cmdLine").eq(2).find("h4").text();
        characters = text.split('');
        $(".cmdLine").eq(2).find("h4").text("");
        $(".cmdLine").eq(2).find("h4").show();
        for (var i = 0; i < characters.length; i++) {
            (function(index) {
                setTimeout(function() {
                    var currentText = $(".cmdLine").eq(2).find("h4").text();
                    $(".cmdLine").eq(2).find("h4").text(currentText + characters[index]);
                }, 50 * (index + 1));
            })(i);
        }
        setTimeout(() => {
            $(".cmdLine").eq(3).show(100);
            text = $(".cmdLine").eq(1).find("h4").text();
            characters = text.split('');
            $(".cmdLine").eq(4).find("span").show(200);
        }, 1000);
    }, 2000);


    setTimeout(() => {
        // LİNE 3
        text = $(".cmdLine").eq(4).find("h4").text();
        characters = text.split('');
        $(".cmdLine").eq(4).find("h4").text("");
        $(".cmdLine").eq(4).find("h4").show();
        for (var i = 0; i < characters.length; i++) {
            (function(index) {
                setTimeout(function() {
                    var currentText = $(".cmdLine").eq(4).find("h4").text();
                    $(".cmdLine").eq(4).find("h4").text(currentText + characters[index]);
                }, 50 * (index + 1));
            })(i);
        }
        setTimeout(() => {
            $(".cmdLine").eq(5).show(100);
            text = $(".cmdLine").eq(5).find("h4").text();
            characters = text.split('');
            $(".cmdLine").eq(6).find("span").show(200);
        }, 1000);
    }, 3500);

    setTimeout(() => {
        // LİNE 4
        text = $(".cmdLine").eq(6).find("h4").text();
        characters = text.split('');
        $(".cmdLine").eq(6).find("h4").text("");
        $(".cmdLine").eq(6).find("h4").show();
        for (var i = 0; i < characters.length; i++) {
            (function(index) {
                setTimeout(function() {
                    var currentText = $(".cmdLine").eq(6).find("h4").text();
                    $(".cmdLine").eq(6).find("h4").text(currentText + characters[index]);
                }, 50 * (index + 1));
            })(i);
        }
        setTimeout(() => {
            $(".cmdLine").eq(7).show(100);
            let countdown = 3;
            setInterval(() => {
                countdown--
                if (countdown == 0) {
                    $(".countdown").text("0");  
                    $(".preloader").animate({
                        witdh: "0vw"
                    },500);
                    $(".preloader").hide(400);
                }
                else {
                  $(".countdown").text(countdown);  
                }
            }, 1000);
        }, 1000);
    }, 5000);

    $(".navButton").click(function() {
        var click = false;
        if (!click) {
            $(".mobile").toggleClass("active");
            click = true;
        } else {
            $(".mobile").toggleClass("active");
            click = false;
        }
    });

    
    $(".deneme").load("/main/index.html");
    $("nav ul li").click(function (e) { 
        $("nav ul li").removeClass("active");
        $(this).addClass("active");      
    });

    var currentIndex = 0;
    var $projects = $('.project');
    var totalProjects = $projects.length;

    $('.ileri').click(function() {
        console.log("TIKLANDI");
        currentIndex = (currentIndex + 1) % totalProjects;
        var offset = -currentIndex * 60; // 60vw
        $projects.parent().css('transform', 'translateX(' + offset + 'vw)');
    });

    $('.back').click(function() {
        console.log("TIKLANDI");
        currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
        var offset = -currentIndex * 60; // 60vw
        $projects.parent().css('transform', 'translateX(' + offset + 'vw)');
    });

    $(".about").click(function (e) { 
        $(".deneme").animate({
            bottom: "-250vh"
        }, 300);
        $(".fixedMenu").animate({
            opacity: "0"
        }, 100);
        setTimeout(() => {
          $(".deneme").load("/about/index.html");
          setTimeout(() => {
            $(".fixedMenu").animate({
                opacity: "1"
            }, 100);
            $(".deneme").animate({
                bottom: "0vh"
            }, 100);
          }, 300);
          $(".mobile").removeClass("active");
        }, 300);
    });

    $(".home").click(function (e) { 
        $(".deneme").animate({
            bottom: "-250vh"
        }, 300);
        $(".fixedMenu").animate({
            opacity: "0"
        }, 100);
        setTimeout(() => {
          $(".deneme").load("/main/index.html");
          setTimeout(() => {
            $(".fixedMenu").animate({
                opacity: "1"
            }, 100);
            $(".deneme").animate({
                bottom: "0vh"
            }, 100);
          }, 300);
          $(".mobile").removeClass("active");
        }, 300);
    });

    $(".contact").click(function (e) { 
        $(".deneme").animate({
            bottom: "-250vh"
        }, 300);
        $(".fixedMenu").animate({
            opacity: "0"
        }, 100);
        setTimeout(() => {
          $(".deneme").load("/contact/index.html");
          setTimeout(() => {
            $(".fixedMenu").animate({
                opacity: "1"
            }, 100);
            $(".deneme").animate({
                bottom: "0vh"
            }, 100);
          }, 300);
          $(".mobile").removeClass("active");
        }, 300);
    });

    $(".projects").click(function (e) { 
        $(".deneme").animate({
            bottom: "-250vh"
        }, 300);
        $(".fixedMenu").animate({
            opacity: "0"
        }, 100);
        setTimeout(() => {
          $(".deneme").load("/projects/index.html");
          setTimeout(() => {
            $(".fixedMenu").animate({
                opacity: "1"
            }, 100);
            $(".deneme").animate({
                bottom: "0vh"
            }, 100);
          }, 300);
          $(".mobile").removeClass("active");
        }, 300);
    });
});




function getBrowserInfo(userAgent) {
    var browserInfo = { name: "Bilinmiyor" };

    if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
        var match = /Chrome\/(\d+\.\d+\.\d+\.\d+)/.exec(userAgent);
        if (match) {
            browserInfo.name = "Chrome";
            browserInfo.version = match[1];
        }
    } else if (userAgent.includes("Edg") || userAgent.includes("Edge")) {
        var match = /Edg\/(\d+\.\d+\.\d+\.\d+)|Edge\/(\d+\.\d+)/.exec(userAgent);
        if (match) {
            browserInfo.name = "Edge";
            browserInfo.version = match[1] || match[2];
        }
    } else if (userAgent.includes("Firefox")) {
        var match = /Firefox\/(\d+\.\d+)/.exec(userAgent);
        if (match) {
            browserInfo.name = "Firefox";
            browserInfo.version = match[1];
        }
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        var match = /Version\/(\d+\.\d+)/.exec(userAgent);
        if (match) {
            browserInfo.name = "Safari";
            browserInfo.version = match[1];
        }
    } else if (userAgent.includes("OPR")) {
        var match = /OPR\/(\d+\.\d+\.\d+\.\d+)/.exec(userAgent);
        if (match) {
            browserInfo.name = "Opera";
            browserInfo.version = match[1];
        }
    }

    return browserInfo;
}



function updateDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    $(".date").text(day + "/" + month + "/" + year);
}


function updateTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    $(".localTime").text(hours + "." + minutes);
}