let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const storyWords = story.split(' ');

const wordCount = storyWords.length;


let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const betterWords = storyWords.filter(word => { return !unnecessaryWords.includes(word); });

const betterWordsCount = betterWords.length;


let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for(const word of betterWords){
    switch (word) {
        case 'really':
        reallyCount ++ ;
        break;
        case 'very':
        veryCount ++ ;
        break;
        case 'basically':
        basicallyCount ++;
        break;
    }
};

let sentences = 0;

storyWords.forEach( word => {if (word[word.length - 1] === '.' || word[word.length - 1] === '!'){sentences ++;}})

const logConsole = (word,sentence,really,very,basically) => {
    console.log(`The number of words in your story are: ${word}`);
    console.log(`The number of sentences in your story are: ${sentence}`);
    console.log(`The amount of times you repeat the word really are ${really}, the word very ${very} and the word basically ${basically}`);
}

logConsole(wordCount,sentences,reallyCount,veryCount,basicallyCount);

console.log(betterWords.join(' '));

let overUsedReallyCount = 0;
let overUsedVeryCount = 0;
let overUsedBasicallyCount = 0;
let newText = [];

for (const word of betterWords){
  switch (word){
    case 'really':
    overUsedReallyCount += 1
    break;
    case 'very':
    overUsedVeryCount += 1
    break;
    case 'basically':
    overUsedBasicallyCount += 1
    break;
  }

  if (overUsedVeryCount === 2){
    overUsedVeryCount = 0;
    newText.push('JAJAJA');
    continue;
  } else if (overUsedReallyCount === 2){
    overUsedReallyCount = 0;
    newText.push('JAJAJA');
    continue;
  } else if (overUsedBasicallyCount === 2){
    overUsedBasicallyCount = 0;
    newText.push('JAJAJA');
    continue;
  } else {
    newText.push(word);
  }
  
};