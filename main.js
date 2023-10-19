Webcam.set({
    width:350,
    height:300,
    imageFormat : 'png',
    pngQuality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot()
{
        Webcam.snap(function(data_uri)  {
            document.getElementById("result").innerHTML = '<img id="captured_Image" src="'+data_uri+'"/>';
        });
}

const url = 'https://teachablemachine.withgoogle.com/models/rES6BmCTL/'

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
    console.error(error);  
    } else {
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = results[0].label;
        document.getElementById("resultEmotionName2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
    }
}

speak();
if(results[0].label == "feliz")
{
    document.getElementById("updateEmoji").innerHTML = "https://images.emojiterra.com/google/android-pie/512px/1f44d.png";
}
if(results[0].label == "triste")
{
    document.getElementById("updateEmoji").innerHTML = "https://images.emojiterra.com/google/android-pie/512px/1f44e.png";
}
if(results[0].label == "tranquilo")
{
    document.getElementById("updateEmoji").innerHTML = "https://cdn.dicionariopopular.com/imagens/emoji-mao-de-me-liga.jpg";
}
if(results[0].label == "perfeito")
{
    document.getElementById("updateEmoji").innerHTML = "https://s2-techtudo.glbimg.com/d0AeMIe2nDcRW1NdCtDOFgUK9xc=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/N/y/VlbFMZTxSvVCG7yMSrmw/emoji-o2.png";
}
if(results[0].label == "paz")
{
    document.getElementById("updateEmoji").innerHTML = "https://img2.gratispng.com/20180710/zp/kisspng-emoji-peace-symbols-text-messaging-iphone-emoji-peace-5b44f12ec9a7d4.160943241531244846826.jpg";
}
if(results[1].label == "feliz")
{
    document.getElementById("updateEmoji2").innerHTML = "https://images.emojiterra.com/google/android-pie/512px/1f44d.png";
}
if(results[1].label == "triste")
{
    document.getElementById("updateEmoji2").innerHTML = "https://images.emojiterra.com/google/android-pie/512px/1f44e.png";
}
if(results[1].label == "tranquilo")
{
    document.getElementById("updateEmoji2").innerHTML = "https://cdn.dicionariopopular.com/imagens/emoji-mao-de-me-liga.jpg";
}
if(results[1].label == "perfeito")
{
    document.getElementById("updateEmoji2").innerHTML = "https://s2-techtudo.glbimg.com/d0AeMIe2nDcRW1NdCtDOFgUK9xc=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/N/y/VlbFMZTxSvVCG7yMSrmw/emoji-o2.png";
}
if(results[1].label == "paz")
{
    document.getElementById("updateEmoji2").innerHTML = "https://img2.gratispng.com/20180710/zp/kisspng-emoji-peace-symbols-text-messaging-iphone-emoji-peace-5b44f12ec9a7d4.160943241531244846826.jpg";
}
