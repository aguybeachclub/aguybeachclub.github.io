
// ========================================
// AGUY BEACH CLUB
// SISTEMA COMPLETO DE TRADUCAO PT / EN
// ========================================

function $(id) {
    return document.getElementById(id);
}

const translations = {

    // MENU PRINCIPAL
    "VINHOS": "WINES",
    "EVENTOS": "EVENTS",
    "LOCALIZAÇÃO": "LOCATION",

    // EVENTOS
    "Descubra o nosso espaço e o ambiente perfeito para jantares, aniversários, celebrações, grupos e eventos privados.":
    "Discover our venue and the perfect atmosphere for dinners, birthdays, celebrations, groups and private events.",

    // DRINKS
    "Em breve": "Coming Soon",
    "Cocktails": "Cocktails",
    "Mocktails": "Mocktails",
    "Gin": "Gin",
    "Whiskies": "Whiskies",
    "Sangrias": "Sangrias",

    // FOOD - CATEGORIAS
    "Entradas": "Starters",
    "Pastas": "Pasta",
    "Tapas": "Tapas",
    "Principais": "Main Courses",
    "Bruschettas": "Bruschettas",
    "Saladas": "Salads",
    "Pizzas": "Pizzas",
    "Gelados": "Ice Cream",
    "Sobremesas": "Desserts",
    "Tostas": "Toasties",

    "ENTRADAS": "STARTERS",
    "PASTAS & RISOTTOS": "PASTA & RISOTTOS",
    "TAPAS / PETISCOS": "TAPAS / SNACKS",
    "PRATOS PRINCIPAIS": "MAIN COURSES",
    "BRUSCHETTAS & TOSTAS": "BRUSCHETTAS & TOASTIES",
    "TOSTAS & TORRADAS": "TOASTIES & TOAST",
    "SALADAS": "SALADS",
    "GELADOS": "ICE CREAM",
    "SOBREMESAS": "DESSERTS",

    // ENTRADAS
    "Manteiga": "Butter",
    "Cesto de Pão": "Bread Basket",
    "Patê de Atum": "Tuna Pâté",
    "Azeitonas": "Olives",
    "Sopa de Legumes": "Vegetable Soup",
    "Couvert": "Couvert",

    // PASTAS
    "Fettuccini Vegetais": "Vegetable Fettuccine",
    "Risotto de Cogumelos": "Mushroom Risotto",
    "Fettuccini Nero c/ Gambas": "Black Fettuccine with Prawns",
    "Risotto de Gambas": "Prawn Risotto",

    // TAPAS
    "Batata Doce": "Sweet Potato",
    "Amendoim": "Peanuts",
    "Tremoços": "Lupin Beans",
    "Wedges (Batatas Fritas)": "Potato Wedges",
    "Camembert Panado c/ Doce de Abóbora": "Breaded Camembert with Pumpkin Jam",
    "Trouxa de Queijo de Cabra": "Goat Cheese Pastry",
    "Vinagrete de Frutos Vermelhos": "Red Berry Vinaigrette",
    "Crocante de Alheira": "Crispy Alheira",
    "Punheta de Bacalhau": "Portuguese Codfish Salad",
    "Pimentos Padrón": "Padrón Peppers",
    "Duplo Prego no Pão": "Double Steak Sandwich",
    "Camembert c/ Nozes e Mel": "Camembert with Walnuts and Honey",
    "Camembert c/ Tomate Cherry": "Camembert with Cherry Tomatoes",
    "Ovos Rotos": "Broken Eggs",
    "1/2 Tábua de Queijos & Enchidos": "Half Cheese & Charcuterie Board",
    "Tábua de Queijos & Enchidos": "Cheese & Charcuterie Board",

    // PRATOS PRINCIPAIS
    "Sugestão de Carne": "Chef's Meat Suggestion",
    "Sugestão de Peixe": "Chef's Fish Suggestion",
    "Filete de Dourada": "Sea Bream Fillet",
    "Filete de Robalo": "Sea Bass Fillet",
    "Bife de Atum": "Tuna Steak",
    "Camarão Tigre": "Tiger Prawns",
    "Bife da Vazia Laminado (2 Pessoas)": "Sliced Sirloin Steak (2 People)",
    "Camarão Tigre + Guarnição": "Tiger Prawns with Side Dish",

    // BRUSCHETTAS
    "Bruschetta Atum": "Tuna Bruschetta",
    "Bruschetta Camarão": "Prawn Bruschetta",
    "Bruschetta Ovos Mexidos": "Scrambled Egg Bruschetta",
    "Bruschetta Salmão & Abacate": "Salmon & Avocado Bruschetta",
    "Bruschetta Frango": "Chicken Bruschetta",
    "Bruschetta Presunto": "Prosciutto Bruschetta",

    // TOSTAS
    "Torrada Simples": "Plain Toast",
    "Torrada Manteiga de Alho & Especiarias": "Garlic & Herb Butter Toast",
    "Tosta Mista": "Ham & Cheese Toastie",
    "Tosta Queijo": "Cheese Toastie",
    "Tosta Fiambre": "Ham Toastie",

    // SALADAS
    "Salada Mista": "Mixed Salad",
    "Salada de Atum c/ Vagens": "Tuna Salad with Green Beans",
    "Salada de Salmão": "Salmon Salad",
    "Salada de Camarão": "Prawn Salad",

    // PIZZAS
    "4 Estações": "Four Seasons",
    "Camarão & Ananás": "Prawn & Pineapple",
    "Portuguesinha": "Portuguese Style",

    // GELADOS
    "Sabores": "Flavours",
    "Baunilha": "Vanilla",
    "Chocolate": "Chocolate",
    "Morango": "Strawberry",
    "Pistáchio": "Pistachio",
    "Frutos Vermelhos": "Red Berries",
    "Menta com Chocolate": "Mint Chocolate",
    "1 Bola": "1 Scoop",
    "2 Bolas": "2 Scoops",

    // SOBREMESAS
    "Travessa de Frutas": "Fresh Fruit Platter",
    "Bolo de Chocolate & Caramelo Salgado": "Chocolate & Salted Caramel Cake",
    "Bolo de Chocolate & Coco": "Chocolate & Coconut Cake",
    "Petit Gâteau c/ Gelado": "Chocolate Fondant with Ice Cream",

    // VINHOS
    "Brancos": "White Wines",
    "VERDES": "VINHO VERDE",
    "Verdes": "Vinho Verde",
    "TINTOS": "RED WINES",
    "Tintos": "Red Wines",
    "Vinho a Copo": "Wine by the Glass",
    "VINHO A COPO": "WINE BY THE GLASS",

    // MOCKTAILS
    "Spritz de Laranja": "Orange Spritz",
    "Mojito Virgem": "Virgin Mojito",
    "Daiquiri Mocka": "Berry Mocktail",
    "Mocka de Manga": "Mango Mocktail",
    "Piña Apaixonada": "Passion Piña",
    "Mango Passion Fruit": "Mango Passion Fruit",
    "Pink Lemonade": "Pink Lemonade",

    // SANGRIAS E EXTRAS
    "Branca": "White",
    "Tinta": "Red",
    "Maracujá": "Passion Fruit",
    "Melão": "Melon",
    "Maçã Verde": "Green Apple",
    "Extras": "Extras",
    "Rodela de Limão +0,50€": "Lemon Slice +0.50€",
    "Gelo +0,50€": "Ice +0.50€"
};


// Tradução dos ingredientes
function translateIngredients(text) {

    const words = {
        "Água com Gás": "Sparkling Water",
        "Água com gás": "Sparkling Water",
        "Sumo de Maracujá": "Passion Fruit Juice",
        "Sumo de Manga": "Mango Juice",
        "Sumo de Laranja": "Orange Juice",
        "Sumo de laranja": "Orange Juice",
        "Sumo de Lima": "Lime Juice",
        "Espumante": "Sparkling Wine",
        "Hortelã": "Mint",
        "Frutos Vermelhos": "Red Berries",
        "Ananás": "Pineapple",
        "Abacaxi": "Pineapple",
        "Coco": "Coconut",
        "Açúcar": "Sugar",
        "Lima": "Lime",
        "Manga": "Mango",
        "Tomate": "Tomato",
        "Mozzarella": "Mozzarella",
        "Manjericão": "Basil",
        "Fiambre": "Ham",
        "Cogumelos": "Mushrooms",
        "Azeitonas": "Olives",
        "Alcachofra": "Artichoke",
        "Salame Picante": "Spicy Salami",
        "Bacon": "Bacon",
        "Camarão": "Prawns",
        "Chouriço": "Chorizo",
        "Cebola": "Onion",
        "Ovo": "Egg",
        "Salmão": "Salmon",
        "Grenadine": "Grenadine",
        "Soda": "Soda",
        "Rum": "Rum",
        "Vodka": "Vodka",
        "Cachaça": "Cachaça",
        "Ginger Beer": "Ginger Beer",
        "Licor de Café": "Coffee Liqueur",
        "Espresso": "Espresso",
        "Curaçao Azul": "Blue Curaçao",
        "Aperol": "Aperol"
    };

    let result = text;

    Object.keys(words)
        .sort((a, b) => b.length - a.length)
        .forEach(function(word) {
            result = result.replaceAll(word, words[word]);
        });

    return result;
}


// Guardar os textos originais da página
const originalTexts = [];

function collectOriginalTexts() {

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    let node;

    while (node = walker.nextNode()) {

        if (node.nodeValue.trim() !== "") {

            originalTexts.push({
                node: node,
                original: node.nodeValue
            });

        }
    }
}


// Aplicar idioma
function setLanguage(lang) {

    const isEnglish = lang === "en";

    originalTexts.forEach(function(item) {

        const original = item.original;
        const trimmed = original.trim();

        let translated = original;

        if (isEnglish) {

            if (translations[trimmed]) {

                translated = original.replace(
                    trimmed,
                    translations[trimmed]
                );

            } else if (
                item.node.parentElement &&
                item.node.parentElement.tagName === "SMALL"
            ) {

                translated = translateIngredients(original);

            }

        }

        item.node.nodeValue = translated;

    });

    document.documentElement.lang = isEnglish ? "en" : "pt";

    localStorage.setItem("language", lang);
}


// Botões PT / EN
if ($("ptBtn")) {
    $("ptBtn").addEventListener("click", function() {
        setLanguage("pt");
    });
}

if ($("enBtn")) {
    $("enBtn").addEventListener("click", function() {
        setLanguage("en");
    });
}


// Inicialização
collectOriginalTexts();

setLanguage(localStorage.getItem("language") || "pt");


// Abrir fotografias
function openImage(src) {

    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";

    const img = document.createElement("img");

    img.src = src;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "12px";
    img.style.border = "2px solid #c9a64b";

    overlay.appendChild(img);

    overlay.onclick = function() {
        overlay.remove();
    };

    document.body.appendChild(overlay);
}
