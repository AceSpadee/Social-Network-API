// The names are for seeding the data with random names
const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Edward',
    'Fiona',
    'George',
    'Hannah',
    'Isaac',
    'Julia',
    'Kevin',
    'Laura',
    'Michael',
    'Nina',
    'Oliver',
    'Paula',
    'Quincy',
    'Rachel',
    'Steven',
    'Tina',
    'Uma',
    'Victor',
    'Wendy',
    'Xander',
    'Yasmine',
    'Zachary',
    'Amber',
    'Brandon',
    'Cathy',
    'David',
    'Eleanor',
    'Frank',
    'Grace',
    'Harold',
    'Ivy',
    'Jack',
    'Katherine',
    'Leon',
    'Megan',
    'Nathan',
    'Olivia',
    'Peter',
    'Queenie',
    'Ronald',
    'Samantha',
    'Thomas',
    'Ursula',
    'Vincent',
    'William',
    'Xavier',
  ];
  // The thoughtTexts are for seeding the data with random thoughts
  const thoughtTexts = [
    "This is my first thought!",
    "I love coding!",
    "JavaScript is awesome!",
    "MongoDB makes life easier.",
    "React is powerful.",
    "Express.js for the win!",
    "Node.js is great!",
    "Seeding databases is fun!",
    "Random thoughts...",
    "Another day, another code.",
    "Debugging is part of the process.",
    "Learning new things every day.",
    "Code, eat, sleep, repeat.",
    "Hacking away!",
    "Building cool projects.",
    "Testing is important.",
    "Always refactor your code.",
  ];
  // The reactionBodies are for seeding the data with random reactions
  const reactionBodies = [
    'Wow, thats amazing!',
    'I totally agree!',
    'Thats so funny!',
    'Im not sure about that.',
    'Could you explain more?',
    'Interesting point of view!',
    'Im impressed!',
    'I never thought of it that way!',
    'Thats a bold statement!',
    'Absolutely!',
    'This made my day!',
    'Im skeptical, but open-minded.',
    'Can you believe it?',
    'Thats disappointing.',
    'Im inspired!'
  ];
  // This function will return a random item from an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  // This function will return a random name from the names array
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  // This function will return an array of random thoughts
  const getRandomThoughts = (num) => {
    const thoughts = [];
    for (let i = 0; i < num; i++) {
      thoughts.push({
        thoughtText: getRandomArrItem(thoughtTexts),
        username: getRandomName(),
      });
    }
    return thoughts;
  };
  // This function will return an array of random reactions
  const getRandomReactions = (num) => {
    const reactions = [];
    for (let i = 0; i < num; i++) {
      reactions.push({
        reactionBody: getRandomArrItem(reactionBodies),
        username: getRandomName(),
      });
    }
    return reactions;
  };
  // Export the functions
  module.exports = { getRandomName, getRandomThoughts, getRandomReactions };