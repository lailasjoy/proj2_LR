
const books = [
  {
    title: " Velvet Scraps",
    author: "Parsons W 13th",
    summary:
      "The stories are about men who have lost women in their lives, usually to other men or death.",
    genre: "Anology",
    bookCover:
      "https://i.ebayimg.com/images/g/FL8AAOSwYXVYzQOY/s-l1200.webp",
    publishData: {
      name: "Crushed velvet scraps from proj; assorted colors",
      year: 2014,
    },
    rating: "UC",
    readingDate: {
      start: "02-08-2024",
      end: "02-28-24",
    },
  },
  {
    title: "Yarn",
    author: "65 W 11th Lang",
    summary: "in their lives, The s lost women  usually to other men or death.",
    genre: "sportsMemoir",
    bookCover:
      "https://i.etsystatic.com/6405836/r/il/d89393/2682142161/il_570xN.2682142161_rvwl.jpg",
    publishData: {
      name: "Leftover yarn from knitting project, perfect condition",
      year: 2004,
    },
    rating: "Parsons W 13th",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "Dyed Canvas",
    author: "scrap canvas bits; used natural dye",
    summary:
      "The stories are about men who have lost women in their lives, usually to other men or death.",
    genre: "Anthology",
    bookCover:
      "https://static.wixstatic.com/media/a2e172_f6efac8213054bd39c1f11cc7aceafd8~mv2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a2e172_f6efac8213054bd39c1f11cc7aceafd8~mv2.jpg",
    publishData: {
      name: "Bungeishunjū",
      year: 2014,
    },
    rating: "Parsons W 13th",
    readingDate: {
      start: "02-08-2024",
      end: "02-28-24",
    },
  },
  {
    title: "Denim",
    author: "Scrap denim, good for upcycling",
    summary: "in their lives, The s lost women  usually to other men or death.",
    genre: "sportsMemoir",
    bookCover:
      "https://www.lapetitestitcherie.ca/wp-content/uploads/2023/08/il_570xN.3578159281_mwgh.webp",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "UC",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "acrylic paints",
    author: "some dried, most good",
    bookCover: "https://i.ebayimg.com/thumbs/images/g/LjgAAOSw0m9lt2Dx/s-l640.jpg",
    publishData: {
      name: "Bungeishunjū",
      year: 2014,
    },
    rating: "Parsons W 13th",
    readingDate: {
      start: "02-08-2024",
      end: "02-28-24",
    },
  },
  {
    title: "cardboard box scraps",
    author: "old project; good condition",
    bookCover:
      "https://c.stocksy.com/a/zCKA00/z9/2460965.jpg",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "65 W 11th Lang",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "old watercolor set",
    author: "messy but in good condition, dont need this set anymore",
    summary:
      "The stories are about men who have lost women in their lives, usually to other men or death.",
    genre: "Anthology",
    bookCover:
      "https://i.ebayimg.com/images/g/F58AAOSwMipk2274/s-l1200.webp",
    publishData: {
      name: "Bungeishunjū",
      year: 2014,
    },
    rating: "16th St",
    readingDate: {
      start: "02-08-2024",
      end: "02-28-24",
    },
  },
  {
    title: "Used paint brushes",
    author: "need a wash but otherwise in good condition",
    bookCover:
      "data:image/jpeg;base64,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",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "Parsons W 13th",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "Silk Ribbon Scraps",
    author: "assorted colors; leftovers from project",
    bookCover:
      "https://i.etsystatic.com/6325707/r/il/9c0b30/5024916676/il_570xN.5024916676_ja3m.jpg",
    publishData: {
      name: "Bungeishunjū",
      year: 2014,
    },
    rating: "UC",
    readingDate: {
      start: "02-08-2024",
      end: "02-28-24",
    },
  },
  {
    title: "lace trimmings",
    author: "good conditon white and off white lace trimmings",
    bookCover:
      "https://i.etsystatic.com/21354415/r/il/2b0671/3785168252/il_fullxfull.3785168252_5wi0.jpg",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "UC",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "chipboard",
    author: "25 sheets of chipboard - brand new",
    bookCover:
      "https://2.bp.blogspot.com/-V5lcSiMMSMg/UYlhBqHIXTI/AAAAAAAAFxY/313g-0-NVaA/s1600/silhouette+chipboard+promotion.jpg",
    publishData: {
      name: "Bungeishunjū",
      year: 2014,
    },
    rating: "Lang",
    readingDate: {
      start: "02-08-2024",
      end: "02-28-24",
    },
  },
  {
    title: "embroidery hoops",
    author: "old embroidery hoop; some chipped but still good",
    bookCover:
      "https://i.ebayimg.com/images/g/vTQAAOSwei9kPFAd/s-l1200.webp",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "UC",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "copic market set",
    author: "well loved copic market set; pastels",
    bookCover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqSd4boPEeAbuZzdTFBziVibRTP4LMgyzmYMyqsmlEq1HyM7W4nBa7USgrEJCKWR028E&usqp=CAU",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "Parsons W 13th",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "assorted washi tape",
    author: "old embroidery hoop; some chipped but still good",
    bookCover:
      "https://i.ebayimg.com/images/g/8-0AAOSwFAFkNNIg/s-l1200.webp",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "65 W 11th Lang",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "singer leather needles",
    author: "brand new sewing needles",
    bookCover:
      "https://i.ebayimg.com/images/g/vZkAAOSwOMVh5uKj/s-l1200.webp",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "UC",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "sketchbooks",
    author: "used sketchbooks",
    bookCover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJoDOP-dclDl2INsIzAk1LBvbSNFoqbeCqH7uef1YgOehIA4n6G5qK7yMiCIcnQnTpOg&usqp=CAU",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "Parsons W 13th",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "copper craft wire",
    author: "copper craft wire; 16 gauge",
    bookCover:
      "https://u-mercari-images.mercdn.net/photos/m50217756914_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1702918249",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "Parsons W 13th",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "colored pencils",
    author: "used colored pencils",
    bookCover:
      "https://i.ebayimg.com/images/g/1FQAAOSwNwBlMxZ1/s-l1200.webp",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "16th Street",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "charcoal pencils",
    author: "good condition; used",
    bookCover:
      "https://c8.alamy.com/comp/2H6Y439/white-charcoal-pencil-used-in-art-sketching-and-colouring-art-tools-objects-wooden-pencil-with-white-colored-charcoal-pencil-2H6Y439.jpg",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "Parsons W 13th",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
  {
    title: "old brushes",
    author: "old paint brushes; well loved",
    bookCover:
      "https://i.pinimg.com/originals/35/6b/9a/356b9af5073a7ce22fd1e40d899247d1.jpg",
    publishData: {
      name: "Random House",
      year: 2004,
    },
    rating: "Parsons W 13th",
    readingDate: {
      start: "01-03-2024",
      end: "03-06-24",
    },
  },
];

window.addEventListener("load", () => {
  init();
});

const init = function () {
  const bookShelf = document.getElementById("bookshelf");
  

  const sortedBooks = books.sort((a,b)=>{

    if(a.title > b.title ){
        return 1;
    }else if (a.title < b.title){
        return -1;
    }else{
        return 0;
    }

  })



  books.map(function (book, i) {
    const bookItem = buildBookItem(book, i);
    bookShelf.innerHTML = bookShelf.innerHTML + bookItem;
  });

  let bookDivs = [...document.getElementsByClassName("book-item")];

  bookDivs.map((bookDiv, i) => {
    bookDiv.addEventListener(
      "click",

      () => {
        activatePopUp(books[i]);
      }
    );
  });
};

const activatePopUp = function (book) {
  document.body.style.overflow = "hidden";
  var popUp = document.getElementById("pop-up-wrapper");
  popUp.style.display = "block";
  var popUpDisplay = document.getElementById("pop-up-data");

  const newDetailView = buildDetailBookItem(book);

  popUpDisplay.innerHTML = newDetailView;
};
const buildBookItem = function (book, i) {
  return `<div class="book-item" id=${i}>
        <img src=${book.bookCover}>
        <div class="text-content">
        <div>
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p class="rating">${book.rating} <img class="rating-star" src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/pin-location-icon.png"></p>
            <div class="reading-date">
                Posted: <p>${book.readingDate.end}</p>
            </div>
            </div>
          
        </div>
    </div>`;
const buildDetailBookItem = function (book, i) {
  return `<div class="book-detail" id=${i}>
    <h2>${book.title}</h2>
        <img src=${book.bookCover}>
    </div>`;
};


};
