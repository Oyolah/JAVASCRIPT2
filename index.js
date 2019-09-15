//Q1
const booksNames = [
                    "things_fall_apart",
                    "ola_and_the_ball",
                    "chike_and_river",
                    "julius_ceaser",
                    "macbeth", 
                    "so_long_a_letter",
                    "long_walk_to_freedom",
                    "no_long_at_ease",
                    "the_joys_of_motherhood",
                    "the_beautiful_ones_are_not_yet_born"
];

console.log(booksNames);

//Q2 in html

//Q3

function ullifunction() {

    const ul = document.createElement('ul');

    for(i = 0 ; i<booksNames.length ; i++){
        var li = document.createElement('li');
        li.innerHTML= booksNames[i];
        console.log(booksNames[i]);
        ul.appendChild(li);
    };
    // This is just the list of the books. if uncomment it will display the list of the book on the top of the pages

    //document.getElementById('namesOfBooks').appendChild(ul);

};
ullifunction();

// Q4
const informationForEachBook = {
    things_fall_apart: {
        title: "Things Fall Apart",
        language: "English",
        author: "Chinua Achebe",
        image: src = "images/thingsfallapart.jpg",
    },
    ola_and_the_ball: {
        title: "Ola And The Ball",
        language: "English",
        author: " Clifford N. Fyle",
        image: src = "images/olaandtheball.jpg",
    },
    chike_and_river: {
        title: "Chike and the River",
        language: "English",
        author: "Chinua Achebe",
        image: src = "images/chikeandtheriver.jpg",
    },
    julius_ceaser: {
        title: "Julius Caesar",
        language: "English",
        author: "William Shakespeare",
        image: src = "images/juliusceaser.jpg",
    },
    macbeth: {
        title: "Macbeth",
        language: "English",
        author: "William Shakespeare",
        image: src = "images/macbeth.jpg",
    },
    so_long_a_letter: {
        title: "So Long A Letter",
        language: "English",
        author: "Mariama Bâ",
        image: src = "images/solongaletter.jpg",
    },
    long_walk_to_freedom: {
        title: "Long Walk to Freedom",
        language: "English",
        author: "Nelson Mandela",
        image: src = "images/longwalktofreedom.jpg",
    },
    no_long_at_ease: {
        title: "No Longer at Ease",
        language: "English",
        author: "Chinua Achebe",
        image: src = "images/nolongatease.jpg",
    },
    the_joys_of_motherhood: {
        title: "The Joys of Motherhood",
        language: "English",
        author: "Buchi Emecheta",
        image: src = "images/thejoysofmotherhood.jpg",
    },
    the_beautiful_ones_are_not_yet_born: {
        title: "The Beautyful Ones Are Not Yet Born",
        language: "English",
        author: "Ayi Kwei Armah",
        image: src = "images/thebeautifulonesarenotyetborn.jpg",
    }
};

//Q5&6
        function listAndImageLi() {

            const ul = document.createElement('ul');

            for(i = 0 ; i<booksNames.length ; i++){

                const li = document.createElement('li');
                const heading = document.createElement('p');
                const language = document.createElement('p');
                const author = document.createElement('p');
                const image = document.createElement('img');

                li.id = booksNames[i];

                heading.innerHTML=informationForEachBook[booksNames[i]].title;
                language.innerHTML=informationForEachBook[booksNames[i]].language;
                author.innerHTML=informationForEachBook[booksNames[i]].author;
                image.src=informationForEachBook[booksNames[i]].image;

                li.appendChild(heading);
                li.appendChild(language);
                li.appendChild(author);
                li.appendChild(image);
                ul.appendChild(li);
        
            
            };
            document.getElementById('namesOfBooks').appendChild(ul);
        
        };
        listAndImageLi();
      