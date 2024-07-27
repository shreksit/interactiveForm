// איסוף כל הבחירות מהטופס
function collectSelections() {
    var selections = {};

    // איסוף שם המשתמש
    selections.name = document.getElementById('name').value;
    console.log("Name:", selections.name);

    // איסוף הבחירה של הלחמניה
    selections.bun = getCheckedRadio(document.getElementsByName('bun'));
    console.log("Bun:", selections.bun);

    // איסוף מידת עשייה
    selections.doneness = getCheckedRadio(document.getElementsByName('doneness'));
    console.log("Doneness:", selections.doneness);

    // איסוף תוספות
    selections.toppings = getCheckedCheckbox(document.getElementsByName('toppings'));
    console.log("Toppings:", selections.toppings);

    // איסוף תוספת בצד
    selections.sideDish = getCheckedRadio(document.getElementsByName('sideDish'));
    console.log("Side Dish:", selections.sideDish);

    // איסוף רטבים
    selections.sauces = getCheckedCheckbox(document.getElementsByName('sauces'));
    console.log("Sauces:", selections.sauces);

    // איסוף שתייה
    selections.drink = getCheckedRadio(document.getElementsByName('drink'));
    console.log("Drink:", selections.drink);

    // איסוף הערות
    selections.comments = document.getElementById('comments').value;
    console.log("Comments:", selections.comments);

    return selections;
}

// פונקציה לאיסוף הערך שנבחר בכפתורי הרדיו 
function getCheckedRadio(elements) {
    for (var i = 0; i < elements.length; i++) { //מעבר בלולאה על כל האלמנטים 
        if (elements[i].checked) { //בדיקה האם קיים סימון
            return elements[i].value; //אם יש סימון, החזרה של הערך
        }
    }
    return ''; //אם אין סימון, יוחזר תוכן ריק
}

// פונקציה לאיסוף הערכים שנבחרו בצ'קבוקס
function getCheckedCheckbox(elements) { //מעבר בלולאה על כל האלמנטים 
    var values = []; //מערך לקליטת הערכים - בשל האופציה לבחירה מרובה
    for (var i = 0; i < elements.length; i++) { //בדיקה האם קיים סימון
        if (elements[i].checked) { //אם יש סימון, החזרה של הערך
            values[values.length] = elements[i].value; //שמירה של הערך במערך
        }
    }
    return values; //אם אין סימון, יוחזר תוכן ריק
}

// הצגת הבחירות
function displaySelections() {
    var selections = collectSelections(); //משתנה המבצע ריצה של הפונקציה של איסוף הבחירות
    var output = ''; // יצירת משתנה חדש אותו נציג בפופ-אפ

    output += '<p><strong>שם:</strong> ' + selections.name + '</p>'; //הוספה למשתנה output את שם המשתמש
    output += '<p><strong>לחמניה:</strong> ' + (selections.bun || '') + '</p>'; //הוספה למשתנה output את הלחמניה שבחר
    output += '<p><strong>מידת עשייה:</strong> ' + (selections.doneness || '') + '</p>'; //הוספה למשתנה output את מידת העשייה
    output += '<p><strong>תוספות על ההמבורגר:</strong> ' + (selections.toppings.length > 0 ? selections.toppings.join(', ') : '') + '</p>'; //הוספה למשתנה output את התוספות להמבורגר שבחר
    output += '<p><strong>תוספת בצד:</strong> ' + (selections.sideDish || '') + '</p>'; //הוספה למשתנה output את התוספת בצד שבחר
    output += '<p><strong>רטבים:</strong> ' + (selections.sauces.length > 0 ? selections.sauces.join(', ') : '') + '</p>'; //הוספה למשתנה output את הרטבים שבחר
    output += '<p><strong>שתייה:</strong> ' + (selections.drink || '') + '</p>'; //הוספה למשתנה output את השתיה שבחר
    output += '<p><strong>הערות:</strong> ' + selections.comments + '</p>'; //הוספה למשתנה output את ההערות של המשתמש

    document.getElementById("popupSelection").innerHTML = output; //קוראת לdiv הרלוונטי ומגדירה שהoutput יוצג בו
}

// עדכון תמונות לפי הבחירות
function updateImages() { 
    var images = document.getElementsByClassName('image'); //בודק את האלמנטים שיש להם את הclass images
    for (var i = 0; i < images.length; i++) { //מעבר בלולאה על כל אחת מהתמונות
        images[i].classList.remove('selected'); //הסרת הבחירה מכל התמונות על ידי הסרת המאפיין העיצובי selected
    }

    var bunElements = document.getElementsByName('bun'); //מקבל את התמונות שיש להם name bun
    for (var i = 0; i < bunElements.length; i++) { //מעבר בלולאה על כל התמונות
        if (bunElements[i].checked) { //במידה ויש סימון על אחת מהסוגי הלחמניות
            document.getElementById('img-' + bunElements[i].id).classList.add('selected'); //קורא לתמונה ומכיל לה הגדרת עיצוב מסוג selected
        }
    }

    // פעולה זו מתבצעת מס' פעמים על כל אחד משורות הקוד. הפירוט קיים על הלחמניות בלבד לשם הקלה על משקל הקובץ

    var donenessElements = document.getElementsByName('doneness');
    for (var i = 0; i < donenessElements.length; i++) {
        if (donenessElements[i].checked) {
            document.getElementById('img-' + donenessElements[i].id).classList.add('selected');
        }
    }

    var toppingsElements = document.getElementsByName('toppings');
    for (var i = 0; i < toppingsElements.length; i++) {
        if (toppingsElements[i].checked) {
            document.getElementById('img-' + toppingsElements[i].id).classList.add('selected');
        }
    }

    var sideDishElements = document.getElementsByName('sideDish');
    for (var i = 0; i < sideDishElements.length; i++) {
        if (sideDishElements[i].checked) {
            document.getElementById('img-' + sideDishElements[i].id).classList.add('selected');
        }
    }

    var saucesElements = document.getElementsByName('sauces');
    for (var i = 0; i < saucesElements.length; i++) {
        if (saucesElements[i].checked) {
            document.getElementById('img-' + saucesElements[i].id).classList.add('selected');
        }
    }

    var drinkElements = document.getElementsByName('drink');
    for (var i = 0; i < drinkElements.length; i++) {
        if (drinkElements[i].checked) {
            document.getElementById('img-' + drinkElements[i].id).classList.add('selected');
        }
    }
}

// פונקציה לבדוק אם הטופס תקין לשליחה
function validateForm() {
    var name = document.getElementById('name').value; //משתנה המקבל את הערך של השם
    var bun = getCheckedRadio(document.getElementsByName('bun')); //קורא לפונקיה הבודקת את האלמנטים שיש להם בname bun
    var doneness = getCheckedRadio(document.getElementsByName('doneness')); //קורא לפונקיה הבודקת את האלמנטים שיש להם בname doneness
    var toppings = getCheckedCheckbox(document.getElementsByName('toppings')); //קורא לפונקיה הבודקת את האלמנטים שיש להם בname toppings
    var sideDish = getCheckedRadio(document.getElementsByName('sideDish')); //קורא לפונקיה הבודקת את האלמנטים שיש להם בname sideDish
    var sauces = getCheckedCheckbox(document.getElementsByName('sauces')); //קורא לפונקיה הבודקת את האלמנטים שיש להם בname sauces
    var drink = getCheckedRadio(document.getElementsByName('drink')); //קורא לפונקיה הבודקת את האלמנטים שיש להם בname drink

    var isValid = name !== '' && bun !== '' && doneness !== '' && toppings.length > 0 && sideDish !== '' && sauces.length > 0 && drink !== '';
    document.querySelector('.submit-button').disabled = !isValid; //משתנה בוליאני הבודק אם קיים ערך בכל אחד מהאופציות. אם הן ריקות הוא מוגדר כלא תקין ומתקיימת שינוי הגדרת עיצוב לכפתור והפיכתו ללא לחיץ
}

// הוספת מאזין אירועים לכל האלמנטים בטופס
var formElements = document.getElementsByTagName('input'); //אוספת את כל האלמנטים שהם מסוג input
for (var i = 0; i < formElements.length; i++) { //מבצעת מעבר על כל אחת מהאלמנטים שנאספו
    formElements[i].onchange = function () { //מפעילה את הפונקציות שתחתיה ודואגת לשינויים דינאמיים חזותיים במהלך שינויי הבחירה של המשתמש - כך מנענו שימוש בeventListener ויצרנו מאזין מסוג אחר
        updateImages();
        validateForm();
    };
}

var textAreas = document.getElementsByTagName('textarea'); //אוספת את כל האלמנטים שהם מסוג textarea
for (var i = 0; i < textAreas.length; i++) { //מבצעת מעבר על כל אחד מהאלמנטים שנאספו
    textAreas[i].oninput = function () { //מפעילה את הפונקציה של הולידציה ודואגת שתבדוק בכל פעם מחדש בעת שינוי בשדות אלו
        validateForm();
    };
}

// הוספת תמונות לכל קטגוריה
function addImages(images, containerId) {
    var container = document.getElementById(containerId); //משתנה האוסף את כל האלמנטים שמוגדרים containerId
    for (var i = 0; i < images.length; i++) { //מעבר בלולאה על כל האלמנטים שנאספו
        var img = document.createElement('img');//משתנה חדש שיוצר אלמנט תמונה
        img.id = 'img-' + images[i].id; //נותנת ID חדש המורכב מהמילה img והID הרלוונטי
        img.src = images[i].src; //משתנה המקבל את מקור התמונה 
        img.classList.add('image'); //החלת ההגדרה העיצובית על התמונה
        container.appendChild(img); //מוסיפה את אלמנט התמונה שנוצר כילד של אלמנט container לוודא שתוצג בcontainer המתאים 
    }
}

// קריאה לפונקציות להוספת תמונות בהתאם לשדה הרלוונטי
addImages([
    { id: 'regular', src: 'images/normalbun.png' },
    { id: 'wholeWheat', src: 'images/wholewheat.png' },
    { id: 'brioche', src: 'images/brioche.png' }
    ], 'bunImages');

addImages([
    { id: 'rare', src: 'images/r.png' },
    { id: 'mediumRare', src: 'images/mr.png' },
    { id: 'medium', src: 'images/m.png' },
    { id: 'mediumWell', src: 'images/mw.png' },
    { id: 'wellDone', src: 'images/wd.png' }
], 'donenessImages');

addImages([
    { id: 'lettuce', src: 'images/lettuce.png' },
    { id: 'tomato', src: 'images/tomato.png' },
    { id: 'onion', src: 'images/onion.png' },
    { id: 'pickles', src: 'images/pickles.png' },
    { id: 'friedEgg', src: 'images/egg.png' },
    { id: 'bacon', src: 'images/bacon.png' }
], 'toppingsImages');

addImages([
    { id: 'ketchup', src: 'images/ketchup.png' },
    { id: 'mayonnaise', src: 'images/mayo.png' },
    { id: 'mustard', src: 'images/mustard.png' },
    { id: 'garlicAioli', src: 'images/garlic.png' },
    { id: 'sweetChili', src: 'images/sweetchili.png' },
    { id: 'barbecue', src: 'images/bbq.png' }
], 'saucesImages');

addImages([
    { id: 'fries', src: 'images/fries.png' },
    { id: 'homefries', src: 'images/homefries.png' },
    { id: 'onionRings', src: 'images/onionrings.png' }
], 'sideDishImages');

addImages([
    { id: 'lemonade', src: 'images/lemonade.png' },
    { id: 'blueberrysoda', src: 'images/blueberrysoda.png' },
    { id: 'watermelonsoda', src: 'images/watermelonsoda.png' },
    { id: 'strawberrysoda', src: 'images/strawberrysoda.png' },
    { id: 'orangesoda', src: 'images/orangesoda.png' }
], 'drinkImages');

// טיפול באירוע שליחת הטופס
function submitForm() {
    displaySelections(); //קריאה לפונקצית הצגת השינויים
    document.getElementById("popup").style.display = "block"; //שינוי תצוגתי לpopup כדי שיוצג על המסך
}

// פונקציה לסגירת הפופאפ
function closePopup() {  
    document.getElementById("popup").style.display = "none"; //שינוי הגדרת עיצוב לשם העלמת הפופאפ
}
