// names of books
const booksNames = ['things_fall_apart',
                    'ola_and_the_ball',
                    'chike_and_river',
                    'julius_ceaser',
                    'markbeth', 
                    'so_long_a_letter',
                    'dark_side_of_life',
                    'on_his_blindness',
                    'jeneba_and_the_road']
console.log(booksNames)
//Q3
function ullifunction() {
    const ul = document.createElement('ul');
    for (let i =0; i<booksNames.length; i++){
        let li = document.createElement('li');
        li.innerHTML = booksNames[i];
        console.log(booksNames[i]);
        ul.appendChild(li);
    };
    document.getElementById("namesOfBooks").appendChild(ul);
};
ullifunction();

//4

const informationForEachBook = {
    ThingsFallApart: {
        title: "things_fall_apart",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    },
    OlaAndTheBll: {
        title: "ola_and_the_ball",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    },
    chike_and_river: {
        title: "chike_and_river",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    },
    julius_ceaser: {
        title: "julius_ceaser",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    },
    markbeth: {
        title: "markbeth",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    },
    so_long_a_letter: {
        title: "so_long_a_letter",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    },
    dark_side_of_life: {
        title: "dark_side_of_life",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    },
    on_his_blindness: {
        title: "on_his_blindness",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    },
    TomorrowIsGood: {
        title: "tomorrow_is_good",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    },
    jeneba_and_the_road: {
        title: "jeneba_and_the_road",
        language: "English",
        author: "Chinor Achabe",
        image: src = "LastSupperLeonardoDaVinci.jpg",
    }
}

//Q5

function dispayBookId() {
    const ul = document.createElement('ul');
    for(var i = 0 ; i<booksNames.length ; i++){
        const li = document.createElement('li');
        const title = document.createElement('h2');
        const language = document.createElement('h2');
        const author = document.createElement('h2');
        const image = document.createElement('img');
        li.id = booksNames[i];
        title.innerHTML = informationForEachBook[booksNames[i]].title;
        language.innerHTML = informationForEachBook[booksNames[i]].language;
        author.innerHTML = informationForEachBook[booksNames[i]].author;
        image.src = informationForEachBook[booksNames[i]].image;
        li.appendChild(title);
        li.appendChild(language);
        li.appendChild(author);
        li.appendChild(image);
        ul.appendChild(li)
    };
    document.getElementById('namesOfBooks').appendChild(ul);
 };
 dispayBookId();