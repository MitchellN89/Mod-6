import SingleCat from "./SingleCat";
import Controls from "./Controls";
import { useState } from "react";
import AddCatForm from "./AddCatForm";

// I've moved the cats 'cache' here  as it seems appropriate to have it inside the BigCats component rather than App.jsx. This is where I would do the API call for the data
let allCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiSZ9ygEI39KQCwxJpRjG13jM0W7QlZEQsVHFddvP9K63yqCv",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    imgUrl:
      "https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2023/01/DD8A1E46-EFA9-4DC1-98AF-9A908C4BF8A6-e1677260627243-1280x640.jpeg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    imgUrl:
      "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/istock-492959784-83413583e8eefd0e79abfccd0e99b478.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    imgUrl:
      "https://www.treehugger.com/thmb/glS7N05QF96T56QwiNHa1fY65d0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-160869327-57f871694a4a4d69b2503f311cf31fbc.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    imgUrl: "https://a-z-animals.com/media/2022/09/iStock-492611032.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    imgUrl:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/Snow-Leopard.jpg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    imgUrl:
      "https://img.freepik.com/free-photo/view-tiger-animal-wild_23-2150374850.jpg",
  },
];

function BigCats() {
  const [cats, setCats] = useState([...allCats]); // Here, 'cats' will be the "found set" from the static allCats array.

  // In this function, I've allowed the option of typing in the name. The list will filter down those options.
  // The buttons text will change depending on if the search field has any text in it. If it's empty, it's a reset button, if it's got text, it's a filter button. Although both the reset and filter functionality are the same.
  // This handle refers to the static allCats array.
  function handleFilter(searchString) {
    // I've expanded this a little to allow a proper search function. It'll search both the name and latin name
    console.log(typeof searchString);
    const filteredArr = allCats.filter((cat) => {
      // const upperCaseSearchString = searchString.toUpperCase();
      return (
        cat.latinName.toUpperCase().includes(searchString.toUpperCase()) ||
        cat.name.toUpperCase().includes(searchString.toUpperCase())
      );
    });
    setCats(filteredArr);
  }

  // This sort makes a copy of the cats state. The reason I've done this compared to sorting the allCats array is I only want to sort the visible cats on screen.
  function handleSort() {
    const sortedArr = [...cats];
    sortedArr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setCats(sortedArr);
  }

  // Same as above
  function handleReverse() {
    const reversedArr = [...cats];
    reversedArr.reverse();
    setCats(reversedArr);
  }

  function handleAddNewCat(name, latinName, imgUrl) {
    if (name && latinName && imgUrl) {
      const newCat = { id: allCats.length + 1, name, latinName, imgUrl };
      // due to my search bar possibly refining the cats on the screen, I'll have to do 2 updates here. First one on the static allCats array.
      allCats.unshift(newCat);
      const updatedCats = [newCat, ...cats];
      // second on on the state. This is important as, if the user is in the middle of a search and adds a new cat, i don't want the full list of cats to render again.
      setCats(updatedCats);
    }
  }

  function handleDelete(catId) {
    allCats = allCats.filter((cat) => cat.id != catId);
    const newCats = cats.filter((cat) => cat.id != catId);
    setCats(newCats);
    // here, i need to do 2 updates for the same reason as handleAddNewCat.
    // I've opted to adjust the allCats array as well as if i only 'delete' from the cats array, it's only being hidden until a filter or reset is used.
  }

  return (
    <>
      <h2>Big Cats!!</h2>
      <Controls
        searchCriteria="Search by Names"
        onFilter={handleFilter}
        onSort={handleSort}
        onReverse={handleReverse}
      ></Controls>
      <AddCatForm onAdd={handleAddNewCat}></AddCatForm>
      <span className="results-count">{cats.length} Results Found</span>
      {/* I've implemented a returned results counter here */}
      <div>
        <ul>
          {cats.map((cat) => (
            <SingleCat
              name={cat.name}
              latinName={cat.latinName}
              id={cat.id}
              key={cat.id}
              imgUrl={cat.imgUrl}
              onDelete={handleDelete}
            ></SingleCat>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BigCats;
