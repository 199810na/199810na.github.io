const cards = [
    { name: "The Fool", description: "Positive: The Fool generally means a new baby. This baby is open-minded and ready for new experiences and knowladge. If you are making decisions between a tradition and your instinct. Choose your instict, fuck tradition.", image: "/webart/deck/000.jpg" },
    { name: "The Magus", description: "Positive: The Magus brings thoughts in the mataphysical world to physical world. This means to trust your power and abillity to make some thing comes true.This card is also a reminder to stop planning and fabricating your idea, but start doing it.", image: "/webart/deck/001.jpg" },
    { name: "The Priestess", description: "Neutral: The Priestess means to seek for answer in your unconsciousness, did you recently have a bizarre dream?", image: "/webart/deck/002.jpg" },
    { name: "The Empress", description: "Positive: If you are thinking about your relation with others, drawing this card means the best solution is to show some love and use your feminine & motherly mind. In general drawing this card can also means to grow, to enjoy the pleasure, or to connect with nature.", image: "/webart/deck/003.jpg" },
    { name: "The Emperor", description: "Neutral: If you received this card, I dont know what it means to u. It usually means a rich old man. Think if you have daddy issue.", image: "/webart/deck/004.jpg" },
    { name: "The Hierophant", description: "Neutral: Drawing this card means you need to think about what you will usually do. Hierophant means tradition, it can be the external tradition like authority, teacher, parent, it can also be your habit and experience.", image: "/webart/deck/005.jpg" },
    { name: "The Lovers", description: "Positive: There are 2 ppl in this card, which is always in the opposite position. Love and Fear, Yin and Yang...whatever. My point is, it either represent that you will need to make decision between two options, or there are two force you need to balance.If you are simply asking will I be in a relationship with (name) in the future, the answer is yes. ", image: "/webart/deck/006.jpg" },
    { name: "The Chariot", description: "Positive: If you received the chariot, this is probably a good sign. Because it generally means victory. It also means control and mastery of something. Think about reins in the rider's hands.", image: "/webart/deck/007.jpg" }, 
    { name: "Adjustment", description: "Neutral: If you are thinking about some tough questions. Drawing this card means you need to choose the most objective, detached, clear choise. Dont blinded by your emotion or bias.", image: "/webart/deck/008.jpg" }, 
    { name: "The Hermit", description: "Negative: The Hermit means introspection, solitude, and the need for inner reflection.If you draw this card, it usually means you already have a bias for your question. This card reminds you to think twice about that biased option.", image: "/webart/deck/009.jpg" }, 
    { name: "Fortune", description: "Positive: Say no more, go with the flow. There is an external force helping you making the decision, at this stage, you cannot change anything anymore. This force is usually a good one (eventhough you dont think so), so just go with the flow.", image: "/webart/deck/010.jpg" }, 
    { name: "Lust", description: "Positive: Lust represent the most raw, primitive thought of human life.It also represent you might seeking for something ontological. Let the truth guide your heart, and dont be swept up in external appearances or social expectations", image: "/webart/deck/011.jpg" }, 
    { name: "The Hanged Man", description: "Negative: Oh no! Looks like there is a sacrifice you need to make. Unfortunatelly, you have to let go.", image: "/webart/deck/012.jpg" }, 
    { name: "Death", description: "Positive: You are facing a huge change that you are not comfortable with, embrace it beacuse it is good for you.", image: "/webart/deck/013.jpg" }, 
    { name: "Art", description: "Positive: Art in this context simply means experiment. Experiment requires a lot of patience and a lot of try. This can simply means keep doing what you are doing, try things out, dont give up.", image: "/webart/deck/014.jpg" }, 
    { name: "The Devil", description: "Negative: The Devil is the shadow side of your mind, indicating that you may be struggling with addiction, compulsions, or negative thought patterns. R U overly focusing on material possessions, status, or power too much? R U feeling trapped or limited by external circumstances or relationships? My suggestion is to make a decision of your own will. Make the decision that will make you happy, and keep doing it. Make sure to cut off connection with anything that bothers you for a bit. If you must face it, cut it off for some time, and confront it. The biggest challenge is not an external force, not something you cannot change, but your mindset.You have the power to generate any thoughts.", image: "/webart/deck/015.jpg" }, 
    { name: "The Tower", description: "Negative: If you received this card means there's already something bad happened, and you are taking its consequence.In other words, you're fucked.You better not making any decision today.Keep your routine, it will gone.", image: "/webart/deck/016.jpg" }, 
    { name: "The Star", description: "Positive: The star is a good sign in the dark. If you are experiencing something bad, the star means you are recovering from that, and soon will be recovered. If you are not experiencing anything bad, the star means you are on a path way to growth and prosperity. Congrats on that!", image: "/webart/deck/017.jpg" }, 
    { name: "The Moon", description: "Negative:The moon means there will be a big challange ahead of you. This challange is internal and relate to your subconscious. Thinking yourself as a boat on a storming ocean, you can do nothing but just hold your paddle and trust yourself.", image: "/webart/deck/018.jpg" }, 
    { name: "The Sun", description: "Positive: The sun means you are experiencing/ or will experience a huge success. Now is the time to release your full power and passion. Drawing this card also means you should share your inner passion to others.", image: "/webart/deck/019.jpg" }, 
    { name: "Aeon", description: "Positive: Aeon is often seen as a card of redemption and forgiveness, indicating that its time to release old grudges or resentments in order to heal and move forward. It is also a sign to leave behind old thoughts, patterns, traditions.", image: "/webart/deck/020.jpg" }, 
    { name: "The Universe", description: "Positive: The Universe represents the concept of completion and fulfillment. Congrats on accomplished or realized of your goals. The next chapter of your live is by the door.",image: "/webart/deck/021.jpg"  }


];

var  hasDrawnCard = false;
function drawCard(cards) {
    if (hasDrawnCard) {
        alert("Hey you! Don't do more than one reading per day! It will mess with your energy.");
        return;
      }
      
      hasDrawnCard = true;
      const randomIndex = Math.floor(Math.random() * cards.length);
      const card = cards[randomIndex];
      const cardElement = document.getElementById("card");
      cardElement.innerHTML = `
        <strong>${card.name}</strong>: 
        <p class="card-description">${card.description}</p>
        <img src="${card.image}" alt="iona is working on finding ${card.name}'s image" class="card-image">
      `;
  }