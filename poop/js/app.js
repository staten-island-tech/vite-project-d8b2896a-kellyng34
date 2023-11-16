const fruits= [
{
    name: "banana",
    price: "$1",
    pic: "banana.jpeg",
},
{
    name: "apple",
    price: "$2",
    pic: "apple.jpeg",
},
{
    name: "orange",
    price: "$2",
    pic: "orange.jpeg",
},
{
    name: "strawberries",
    price: "$1",
    pic: "strawberries.jpeg",
},
{
    name: "rasberries",
    price: "$1",
    pic: "rasberries.jpeg",
},
{
    name: "mango",
    price: "$1",
    pic: "mango.jpeg",
}
]

const vegetables=[
{
    name: "carrots",
    price: "$2",
    pic: "https://www.capitalagro.com/wp-content/uploads/2023/04/Carrots.jpg",
},
{
    name: "potato",
    price: "$1",
    pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F7081&psig=AOvVaw2Dm68XuYSSTg-Hcta9hU33&ust=1700233416472000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjf3-rkyIIDFQAAAAAdAAAAABAD",
},
{
    name: "cucumber",
    price: "$1",
    pic: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.plantgrower.org%2Fuploads%2F6%2F5%2F5%2F4%2F65545169%2Fpublished%2Fcucumber-slices.jpg%3F1516496438&tbnid=OiczkqXACimnXM&vet=12ahUKEwjIopfR5MiCAxVzMVkFHVwTBWoQMygAegQIARBq..i&imgrefurl=http%3A%2F%2Fwww.plantgrower.org%2Fcucumber.html&docid=4dTf5ZtrIKqE8M&w=525&h=357&q=cucumber&safe=active&ved=2ahUKEwjIopfR5MiCAxVzMVkFHVwTBWoQMygAegQIARBq",
},
{
    name: "sweetpotato",
    price: "$2",
    pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.traderjoes.com%2Fhome%2Fproducts%2Fpdp%2Fsweet-potato-097997&psig=AOvVaw3IHP-P4O_yfcddz7CqiYzV&ust=1700233266862000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPj8kKXkyIIDFQAAAAAdAAAAABAE",
},
{
    name: "avocado",
    price: "$2",
    pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heb.com%2Fproduct-detail%2Ffresh-jumbo-hass-avocado%2F2599549&psig=AOvVaw0-casEd28ssbnTrIkRBG97&ust=1700233269572000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjJl9nkyIIDFQAAAAAdAAAAABAD",
},
{
    name: "lettuce",
    price: "$3",
    pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.brothersproducewholesale.com%2Fcdn%2Fshop%2Fproducts%2FRomaineLettuce_grande.jpg%3Fv%3D1584844186&tbnid=NzE4O1e1TMAVfM&vet=12ahUKEwiSysfS5MiCAxX0DWIAHRLXDKEQMygbegUIARCwAQ..i&imgrefurl=https%3A%2F%2Fwww.brothersproducewholesale.com%2Fproducts%2Flettuce-romaine&docid=mBMCAEFNHfHHrM&w=560&h=440&q=lettuce&safe=active&ved=2ahUKEwiSysfS5MiCAxX0DWIAHRLXDKEQMygbegUIARCwAQ",
}
]

const meat=[
{
    name: "t-bone-steak",
    price: "$13",
    pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.beefitswhatsfordinner.com%2Frecipes%2Frecipe%2F741%2Fgrilled-t-bone-steaks-with-bbq-rub&psig=AOvVaw0edRFf8tJguzhRJtu3q33L&ust=1700233527577000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMiJnp7lyIIDFQAAAAAdAAAAABAD",
},
{
    name: "ribeye-steak",
    price: "$20",
    pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fembed.widencdn.net%2Fimg%2Fbeef%2Fng96sbyljl%2F800x600px%2FRibeye%2520Steak_Lip-on.psd%3Fkeep%3Dc%26u%3D7fueml&tbnid=v394pVIxfiLqyM&vet=12ahUKEwid0svx5ciCAxXwN1kFHREuCQgQMygBegQIARBt..i&imgrefurl=https%3A%2F%2Fwww.beefitswhatsfordinner.com%2Frecipes%2Frecipe%2F1336%2Fribeye-steaks-with-balsamic-mushroom-sauce&docid=cAPNFZQIn7S3qM&w=800&h=600&q=ribeye%20steak&safe=active&ved=2ahUKEwid0svx5ciCAxXwN1kFHREuCQgQMygBegQIARBt",
},
{
    name: "sirlon-steak",
    price: "$10",
    pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.beefitswhatsfordinner.com%2Frecipes%2Frecipe%2F55884%2Fgrilled-sirloin-steak-kabobs-with-garlic-rosemary-butter&psig=AOvVaw34hPbuDPiVJTozNUwdC2RK&ust=1700233498505000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi2pa_lyIIDFQAAAAAdAAAAABAD",
},
{
    name: "lamb",
    price: "$12",
    pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.threebrothersmeats.com%2Fstatic%2Fsitefiles%2Fecomm%2Fproducts%2F202104071815168_lamb-rack.jpg&tbnid=wfdeHXrRTuKq2M&vet=12ahUKEwjf1uWB5siCAxVcEVkFHcceDEkQMyhEegUIARCgAg..i&imgrefurl=https%3A%2F%2Fwww.threebrothersmeats.com%2Fecomm%2Fproduct%2Fdomestic-frenched-rack-of-lamb&docid=MUOq1fzZso7UwM&w=612&h=408&q=lamb%20meat&safe=active&ved=2ahUKEwjf1uWB5siCAxVcEVkFHcceDEkQMyhEegUIARCgAg",
},
{
    name: "pork", 
    price: "$6",
    pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.yummy.ph%2Fyummy%2Fuploads%2F2021%2F02%2Fporkcutlet.jpg&tbnid=kI6Y35GAnmAGsM&vet=12ahUKEwiFvJ-T5siCAxX2NlkFHel9ARUQMygSegUIARCPAQ..i&imgrefurl=https%3A%2F%2Fwww.yummy.ph%2Flessons%2Fcooking%2Fwhat-is-pork-cutlet-and-how-to-cook-it-a00249-20210909-lfrm&docid=fOoxZJAJzb4ROM&w=640&h=360&q=pork%20meat&safe=active&ved=2ahUKEwiFvJ-T5siCAxX2NlkFHel9ARUQMygSegUIARCPAQ",
},
{   name: "chicken",
    price: "$12",
    pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fwilliamcofoods.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fchicken-breast.jpg%3Ffit%3D5472%252C3648%26ssl%3D1&tbnid=QMrZ2Efo6Os3EM&vet=12ahUKEwiipsm25siCAxXZGGIAHfLsC3MQMygCegQIARBv..i&imgrefurl=https%3A%2F%2Fwilliamcofoods.com%2Fproduct%2Fchicken-breast-boneless-skinless%2F&docid=h_aebWeJVrQppM&w=5472&h=3648&q=chicken%20breast%20raw&safe=active&ved=2ahUKEwiipsm25siCAxXZGGIAHfLsC3MQMygCegQIARBv",
}
]

const juices=[
{
    name: "orange-juice",
    price: "$3",
    pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heb.com%2Fproduct-detail%2Ftropicana-pure-premium-no-pulp-100-orange-juice%2F145080&psig=AOvVaw33GxZqGJbvtUNYXArwTJpU&ust=1700233825598000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKjmgLPmyIIDFQAAAAAdAAAAABAD",
},
{
    name: "apple-juice",
    price: "$2",
    pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71zPRqJWbGS.jpg&tbnid=IZrT7cGCg3-xiM&vet=12ahUKEwibkvzM5siCAxVJGmIAHbPXBgwQ94IIKAZ6BAgBEHs..i&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FMotts-100-Juice-Original-Apple%2Fdp%2FB00N4QEK4Y&docid=oNsSKuj5McRqzM&w=2560&h=2560&q=apple%20juice&safe=active&ved=2ahUKEwibkvzM5siCAxVJGmIAHbPXBgwQ94IIKAZ6BAgBEHs",
},
{
    name: "canberry-juice",
    price:" $4",
    pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiantfood.com%2Fgroceries%2Fbeverages%2Fjuice%2Fcranberry-juice%2Fnon-refrigerated-cranberry-juice%2Focean-spray-cranberry-juice-cocktail-64-oz-btl.html&psig=AOvVaw3DwSfodC-z3NayA_mBvymv&ust=1700233828197000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNi5p8XmyIIDFQAAAAAdAAAAABAD",
},
{
    name: "grape-juice",
    price: "$2",
    pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdydza6t6xitx6.cloudfront.net%2Fci-welchs-grape-juice-0810ac035d7bf88c.jpeg&tbnid=UZkKMUyR6jP8CM&vet=12ahUKEwjh2OuS58iCAxXFJGIAHRKNBtgQMygHegQIARB_..i&imgrefurl=https%3A%2F%2Fdrizly.com%2Fextras%2Fbeverages%2Fjuice%2Fwelchs-grape-juice%2Fp20690&docid=frxAV58IMD6Q3M&w=400&h=600&q=grape%20juice&safe=active&ved=2ahUKEwjh2OuS58iCAxXFJGIAHRKNBtgQMygHegQIARB_",
},
{
    name: "mango-juice",
    price: "$7",
    pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heb.com%2Fproduct-detail%2Fnaked-juice-mighty-mango%2F2180507&psig=AOvVaw1TOMBUStXtUmRiOq6Lz1Lq&ust=1700233804617000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDv-fHmyIIDFQAAAAAdAAAAABAD",
},
{
    name: "pineapple-juice",
    price: "$3",
    pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstarfishmarket.com%2Fproduct%2Fdole-pineapple-juice-46-oz%2F&psig=AOvVaw0tRh-64omXb692UDTBYf91&ust=1700234008679000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODujITnyIIDFQAAAAAdAAAAABAD",
}
]