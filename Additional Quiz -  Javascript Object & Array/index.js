const obj = [];
obj [1] = {
    name: "Monica",
    gender: "female",
    email: "monica@dingdong.com",
    age: 17,
    favoriteColor: ["Yellow", "Pink", "White", "Purple"],
    isHavePet: "yes",
    education:
    [
        "name: SD 01",
        "city: Jakarta",
        "graduate: 2016"
    ],
    favoriteRestaurant:
    [
        "Bento", "Sushi", "Pancake","Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"
    ]
};

obj [2] = {
    education:
    [
        {
        name: "SMP 02",
        city: "Jakarta",
        graduate: "2019"
        }
    ]   
};

obj [3] = {
    education:
    [
        {
        name: "SMA",
        city: "Tangerang"
        }
    ]
};

obj [4] = {
    name: "Wendy",
    gender: "Male",
    email: "wendy@dingdong.com",
    age: 17,
    favoriteColor: ["Blue", "Black", "White", "Purple"],
    isHavePet: "no",
    education:
    [
    "name: SD 02",
    "city: Jakarta",
    "graduate: 2010"
    ],
    favoriteRestaurant:
    [
        "Tempura", "Bento", "Sushi", "Pancake", "Padang", "katsu", "Geprek", "Pancake", "Eggy"
    ]
};

obj [5] = {
    education:
    [
        "name: SMP 03",
        "city: Bogor",
        "graduate: 2013"
    ]   
};

obj [6] = {
    education:
    [
    {
        name: "SMA 01",
        city: "Surabaya",
        graduate: 2016
    }
    ]   
};

obj [7] = {
    education:
    [
        "name: Universitas Maju",
        "city: Tangerang"
    ]   
};

console.log("Nama : " + obj[4].name);
console.log("SMA : " + obj[6].education[0].name);
console.log("Kota : " + obj[6].education[0].city);
console.log("Makanan Favorit : " + obj[4].favoriteRestaurant[5])