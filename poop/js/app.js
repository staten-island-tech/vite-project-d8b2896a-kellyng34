

const foods = [
    {
        name: "banana",
        price: "$1",
        pic: "/banana.jpeg",
        thing: "fruit",
    },
    {
        name: "apple",
        price: "$2",
        pic: "/apple.jpeg",
        thing: "fruit",
    },
    {
        name: "orange",
        price: "$2",
        pic: "/orange.jpeg",
        thing: "fruit",
    },
    {
        name: "strawberries",
        price: "$1",
        pic: "/strawberry.jpeg",
        thing: "fruit",
    },
    {
        name: "rasberries",
        price: "$1",
        pic: "/rasberries.jpeg",
        thing: "fruit",
    },
    {
        name: "mango",
        price: "$1",
        pic: "/mango.jpeg",
        thing: "fruit",
    },
    {
        name: "carrots",
        price: "$2",
        thing: "vegetable",
        pic: "https://www.capitalagro.com/wp-content/uploads/2023/04/Carrots.jpg",
        
    },
    {
        name: "potato",
        price: "$1",
        thing: "vegetable",
        pic: "https://th.bing.com/th/id/R.1746905e79820c611a75f362be285401?rik=Om5Rt8artWAu4A&riu=http%3a%2f%2fwww.valleyspuds.com%2fwp-content%2fuploads%2fRusset-Potatoes-cut.jpg&ehk=%2f9WbC1j%2fDMKQkwnb8Q9l7NfVGeVMrHuQmCWM%2fR9kpg8%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        name: "cucumber",
        price: "$1",
        thing: "vegetable",
        pic: "https://www.homeremediesweb.com/images/product_cucumber.jpg",
    },
    {
        name: "sweetpotato",
        price: "$2",
        thing: "vegetable",
        pic: "https://th.bing.com/th/id/OIP.pNUP1zWnJkYVtJv4e5QNygHaHa?rs=1&pid=ImgDetMain",
    },
    {
        name: "avocado",
        price: "$2",
        thing: "vegetable",
        pic: "data:image/jpeg;base64,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",
    },
    {
        name: "lettuce",
        price: "$3",
        thing: "vegetable",
        pic: "https://www.brothersproducewholesale.com/cdn/shop/products/RomaineLettuce_grande.jpg?v=1584844186",
    },
    {
        name: "t-bone-steak",
        price: "$13",
        thing: "meat",
        pic: "https://embed.widencdn.net/img/beef/ct62lm01nw/320x240px/T-Bone%20Steak.psd?keep=c&u=7fueml",
    },
    {
        name: "ribeye-steak",
        price: "$20",
        thing: "meat",
        pic: "https://embed.widencdn.net/img/beef/ng96sbyljl/800x600px/Ribeye%20Steak_Lip-on.psd?keep=c&u=7fueml",
    },
    {
        name: "sirlon-steak",
        price: "$10",
        thing: "meat",
        pic: "https://embed.widencdn.net/img/beef/melpznnl7q/320x240px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml",
    },
    {
        name: "lamb",
        price: "$12",
        thing: "meat",
        pic: "https://www.threebrothersmeats.com/static/sitefiles/ecomm/products/202104071815168_lamb-rack.jpg",
    },
    {
        name: "pork",
        price: "$6",
        thing: "meat",
        pic: "https://images.yummy.ph/yummy/uploads/2021/02/porkcutlet.jpg",
    },
    {
        name: "chicken",
        price: "$12",
        thing: "meat",
        pic: "https://i0.wp.com/williamcofoods.com/wp-content/uploads/2020/07/chicken-breast.jpg?fit=5472%2C3648&ssl=1",
    },
    {
        name: "orange-juice",
        price: "$3",
        thing: "juice",
        pic: "https://th.bing.com/th/id/OIP.iAbOhVq3_YFjjko_z-qYzAHaHa?rs=1&pid=ImgDetMain",
    },
    {
        name: "apple-juice",
        price: "$2",
        thing: "juice",
        pic: "https://m.media-amazon.com/images/I/41x8cBVXbGS._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
        name: "canberry-juice",
        price: " $4",
        thing: "juice",
        pic: "https://i5.peapod.com/c/Q8/Q8J2H.png",
    },
    {
        name: "grape-juice",
        price: "$2",
        thing: "juice",
        pic: "https://th.bing.com/th/id/OIP.aAOw_aS-3B2VyWP9WeAPDgHaHa?rs=1&pid=ImgDetMain",
    },
    {
        name: "mango-juice",
        price: "$7",
        thing: "juice",
        pic: "https://image.influenster.com/eyJrZXkiOiAibWVkaWEvcHJvZHVjdC9pbWFnZS9wcm9kdWN0L2ltYWdlLzFfTWVwc3R1MS5KUEciLCAiZWRpdHMiOiB7InJlc2l6ZSI6IHsid2lkdGgiOiA3NTAsICJ3aXRob3V0RW5sYXJnZW1lbnQiOiB0cnVlLCAiaGVpZ2h0IjogNzUwLCAiZml0IjogImluc2lkZSIsICJiYWNrZ3JvdW5kIjogeyJyIjogMSwgImIiOiAxLCAiZyI6IDEsICJhbHBoYSI6IDB9fX0sICJidWNrZXQiOiAiaW5mbHVlbnN0ZXJfcHJvZHVjdGlvbiIsICJleHRlbmQiOiB7fX0=",
    },
    {
        name: "pineapple-juice",
        price: "$3",
        thing: "juice",
        pic: "https://starfishmarket.com/wp-content/uploads/2013/10/k2-_8a20596d-e9c7-4f22-932d-4eaf397b857e.v4.jpg",
    }
]
export {foods}