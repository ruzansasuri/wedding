var photos = [
    "1gAi9Hm7qJq-Y3wl6PGQ3s9b3Kz4gx3gC",
    "1hpImq0cEvglTxbuyh_t_p3JVWA6DQeqp",
    "1viIm9W5QFqUezFIZSIzgPsHFrybtB92a",
    "1g6IrDL9T7pAFlfNmqaSWevHW1E9SKYnx",
    "1oYXCjolXQ56bMXiKNmpeBW8n_pO3ocdG", 
    "1-8D9xgjkd2ZeOcPx7zTvqVlHz8TgF3yK",
    "1eUWgDEmT5nGzsyaeNmB-v-RuQ-Sr3nQr",
    "18BrgZcwlHvppN6HF6scIq0Yyha-_5uCu",
    "1Htm6u84_6RB7EgrVclkfHUu34Nbg0QgC",
    "1gmg0pcwtBkqMYeiBNpEEvNqDz8hZi7en",
    "1mEkLCw7Lt-_zEJMuZZOVUDyt3JelPWah",
    "1yi7xo5pynjWP4dYR6P2FelLuaCG4EDY7",
    "1rwk7kFVo4vRr2PeqO0vCbeqvvLvXQpH4",
    "16Q1MAtEsYKVox0lhe8aWqn7CVZEKWRW3",
    "1GYxofhAqIfMUz3GchUEEDatBUf9WidnQ",
    "1guFOhx3btk3E4NEIPznqxHClT6SI0XAG",
    "15ZzfeClfOX8qKddY8LCNgkeS-A3KJJuc",
    "1MI6HWG2-Go-IbNJ6mTc7d6G4eT0GsfbI",
    "1POvVYVY0iP53vtAHUyvx_q5YZNMb4xzQ"
]

var linkPrefix = "https://drive.google.com/file/d/"
var linkSuffix = "/preview"
const storageId = "currImage"

/**
 * Builds link to show google drive image in iframe
 * id(string): the shareable id for the google drive image 
*/
const linkBuilder = (id) => {
    return linkPrefix + id + linkSuffix
}

/**
 * Sets currImage to 0(first) and loads it in the iframe.
 */
const onLoad = () => {
    localStorage.setItem(storageId, 0);
    document.getElementById("photo_iframe").src = linkBuilder(photos[0])
}

/**
 * Event handler for when user clicks right arrow.
 * If currImage is null or the last image, sets it to 0, else increments it. 
 * Then loads the corresponding image in iframe and sets the local state.
 */
const onNextImage = () => {
    currImage = localStorage.getItem(storageId);
    if (!currImage || currImage == photos.length - 1) {
        currImage = 0
    } else {
        currImage++
    }
    document.getElementById("photo_iframe").src = linkBuilder(photos[currImage])
    localStorage.setItem(storageId, currImage);
}

/**
 * Event handler for when user clicks left arrow.
 * If currImage is null, sets it to 0. If currImage is the first image, sets it to the last image. 
 * Else decrements it. 
 * Then loads the corresponding image in iframe and sets the local state.
 */
const onPrevImage = () => {
    currImage = localStorage.getItem(storageId);
    if (!currImage) {
        currImage = 0
    } else if (currImage == 0) {
        currImage = photos.length - 1
    }else {
        currImage--
    }
    document.getElementById("photo_iframe").src = linkBuilder(photos[currImage])
    localStorage.setItem(storageId, currImage);
}
