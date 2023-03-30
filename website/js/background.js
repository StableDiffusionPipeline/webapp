const background = document.getElementById('background');
const background_text = document.getElementById('bg-text');

let strReplace = "$&"

function random_str(length) {
    let result = '';
    const characters = 'A B C D E F G H I J K L  M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

const prompts = [
    "high detailed interior design of a room where Jesus and his followers having last supper, architecture photography, architecture digest, natural lighting, comfortable lighting, photo realistic render, unreal engine, vray",
    "bonnie and clyde standing back to back on miami beach street with art deco buildings classic car and palm trees in misty nightime 80s vaporwave style",
    "design an antihero with inspiration from marvel spongebob rick and morty game of thrones, ultrarealistic, details, very detailed, colorful, bombed city background",
    "disney and pixar crossover but its good",
    "brrrrt",
    "centipede of horror",
    "half life 2 in chernobyl",
    "Milky Way, and an exploding star",
    "Picture a cool monkey dressed in retro clothing, with a leather jacket, sunglasses, and a bandana wrapped around its head. The monkey is sitting on a vintage motorcycle, a classic chopper, with an extended front fork and a low-slung seat. The motorcycle is painted in bright colors and has intricate designs, reminiscent of the psychedelic art from the 1960s and 1970s.",
    "fire dragon with huge wings",
    "the largest maze in the world",
    "panda fixing PC in the cloud",
    "panda-technician is repairing the server sitting on the cloud",
    "telegram logo",
    "The dragon sleeps, covered by its wings",
    "a focused photorealistic yellow lotus flower in a tropical background",
    "happy colorful owl wearing glasses, vibrant colors, kawaii",
    '{"prompt": "mountains", "height": 800, "width": 800}',
    '{"prompt": "((oil painting)), a highly detailed portrait of a fox mom and son hugging in a comfy home, bright orange eyes, sharp, DeviantArt, professional, masterpiece, octane render, trending on artstation, high resolution, uhd, 4 k, 8k", "no": "((long neck)) ((duplicate)) ((ugly)) ((fused heads)) ((fused bodies)) ((disfigured)) ((error)) ((extra digits)) ((signature)) watermark url blurry haze", "seed": 3280361093, "height": 1280, "width": 768}',
    'delicate features,pop mart style, lotus flower , purple color ,clean background, blue sky,clay material, sunlight,soft focus,IP,urtra-detail,urtra detail,3d render,blender,c4d,8k',
    'Epic fight style super hero HQs - giant panoramic scene 10 meters high, against Templar knight',
    'steve de minecraft volando sobre islas flotantes con una bolsa de dolares en la mano, debe ser en estilo cartoon',
    'Y shape zipper, minimalistic, graphic, 2D, logo, premium, 4k',
    'realistic, donald trump on a giraffe, mountains, everest, snow',
    'v5, set of 10 graphical elements, discovery and connection, space exploration, black background, vibrant colors, graphic style',
    'dragon, dragon face, blowing fire, crystal, neon style, neon colors, very detailed, hyperrealism, blended background',
    "The designer's fantasy-inspired creation was a breathtaking work of art that seemed to transport the viewer to a magical world filled with wonder and enchantment.",
    'wallpaper determined woman leading uphill, showing clear skies',
    'tiger, tiger face, tiger face watching at top, crystal, neon style, neon colors, very detailed, hyperrealism, blender color matching background',
    'A tech-futuristic bedroom with a bed inside the wall and a bathroom',
    'Person sitting on Ramadan crescent moon on calculator in clear blue sky',
    'cute tiny panda with short arms and short legs, red fantasy kingdom background :: animation, ghibli style, minimal',
    'ugly sponge bob',
    'cargo ship on the dark sea, detail, high quality',
    '"openjourney" text on wall',
    'Shu itsuki',
    'fire dragon with huge wings',
    'fiery dragon with huge wings flies over the forest',
    'fire dragon with good stretch',
    'the dragon is furious',
    'school 1',
    'dragon, furry, looks like a human',
    'apple logo',
    'school 63',
    'the dragon sleeps',
    'the dragon sleeps, covered by his wings',
    'ice and fire',
    'half-life 3',
    'brawl stars',
    'DragonWolf',
    'trash',
    'keyboard',
    'computer of the future',
    'samsung logo'
]

function editBg() {
    background_text.innerHTML = "";
    prompts.forEach(function (arrayItem) {
        // arrayItem = '/imagine ' + arrayItem;
        background_text.innerHTML = background_text.innerHTML + `<p>${arrayItem.shuffle()}</p>`;
        strReplace = strReplace + " $&";
    });
}

prompts.forEach(function (arrayItem) {
    background_text.innerHTML = background_text.innerHTML + `<p>${arrayItem}</p>`;
});

background.classList.add('full-size')

setInterval(function() { editBg() }, 500);
setTimeout(function() { background.classList.add('background-less') }, 1000)