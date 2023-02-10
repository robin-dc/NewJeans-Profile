// ARRAY
const array = [
    // OBJECT
    {
        name: "Hanni Pham",
        age: 18,
        mbti: "infp",
        photo: "hanni.jpg"
    },
    {
        name: "Kang Haerin",
        age: 16,
        mbti: "istp",
        photo: "haerin.jpg"
    },
    {
        name: "Kim Minji",
        age: 18,
        mbti: "estj",
        photo: "minji.jpg"
    },
    {
        name: "Danielle Marsh",
        age: 17,
        mbti: "enfp",
        photo: "danielle.jpg"
    },
    {
        name: "Lee Hyein",
        age: 14,
        mbti: "enfp",
        photo: "hyein.jpg"
    }
]

// VARIABLES
let next = document.getElementById("plus");
let back = document.getElementById("minus");
let i = 0

// FUNCTION
function list(){
    let wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = `
                                <img src="${array[i].photo}" alt="" class="photo">
                                <p>Name: ${array[i].name}</p>
                                <p>Age: ${array[i].age}</p>
                                <p>Mbti: ${array[i].mbti}</p>
                            `;
}



next.addEventListener('click', function(){
    // ARITHMETIC OPERATOR
    i += 1
    if(i >= array.length){
        i = 0;
    }
    list();
})
back.addEventListener('click', function(){
    // ARITHMETIC OPERATOR
    i -= 1
    if(i < 0){
        i = array.length;
    }
    list();
})

// VARIABLES
let music = document.createElement('audio')
let btnMusic = document.getElementById('btn-music')
music.src = "omg.mp3"

btnMusic.addEventListener('click', function(){
    music.play()
    btnMusic.classList.add('active')
})
