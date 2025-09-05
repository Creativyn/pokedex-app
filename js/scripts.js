let pokemonList = [
  { name: "Ninetales", height: "1.1", types: ["fire"] },
  { name: "Fearow", height: "1.2", types: ["flying", "normal"] },
  { name: "Arbok", height: "3.5", types: ["poison"] },
  { name: "Scyther", height: "1.5", types: ["bug", "flying"] },
  { name: "Umbreon", height: "1", types: ["dark"] },
  { name: "Lugia", height: "5.2", types: ["psychic", "flying"] },
];

let repository = [
  "Ninetales (height: 1.1)",
  "Fearow (height: 1.2)",
  "Arbok (height: 3.5)",
  "Scyther (height: 1.5)",
  "Umbreon (height: 1)",
  "Lugia (height: 5.2)",
];
let text1 = "";
let a = 0;

for (; repository[a]; ) {
  text1 = text1 + " " + repository[a];
  a++; //this prints the pokemon names and heights
  if (pokemonList.height > 4) {
    document.write("Wow, that's big!");
  } //this is suppose to check the height, but it's not working
}
document.write(text1);

// let height = [1.1, 1.2, 3.5, 1.5, 1, 5.2];
// let result;
// if (height > 4) {
//   result = "Wow, that's big!";
// } //this was also suppose to check the height, but it didn't work
