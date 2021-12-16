const hints = [
  [
      "There are twelve dots (coins) on the screen.",
      "Have you tried interacting with the coins?",
      "Press the twelve coins to beat the level!"
  ],
  [
      "Underlined text is irrelevant to a level's solution.",
      "The coins are there. I wish there was a way to show where...",
      "Notice anything that might help you reveal the coins?",
      "Drag the slider."
  ],
  [
      "Underlined text is irrelevant to a level's solution.",
      "It's the same, but it moves.",
      "They come back with time."
  ],
  [
      "Is something resetting your progress?",
      "What happens when you press red coins?",
      "Only press coins when they are blue."
  ],
  [
      "Does the image look like anything?",
      "Don't you want to let some fresh air in?",
      "It's a window.",
      "Open the window."
  ],
  [
      "It's unfortunate that the blue has obscured the view.",
      "Move around.",
      "Move your finger around the screen."
  ],
  [
      "Notice how the screen gets darker when you press it?",
      "Tap.",
      "Tap the screen multiple times."
  ],
  [
      "Name of the game",
      "+",
      "How could you make 12 from the numbers?",
      "Add two numbers."
  ],
  [
      "There's a certain order you have to press them in.",
      "The arrows pertain to the order.",
      "The number of arrows on each coin pertains to the order.",
      "Each arrow points in the direction of the next coin.",
      "The number of arrows tells you how many coins away the next one is."
  ],
  [
      "If the colors are hard to see, try color blind mode (settings)!",
      "Blue is good. Red is bad.",
      "The coin turns from blue to red back to blue."
  ],
  [
      "Have you tapped the letters?",
      "Can you resolve the equality?",
      "Try spelling some numbers.",
      "2 + 11 = 1 + 12"
  ],
  [
      "Name of the game",
      "Do you see twelve anywhere?",
      "Do you see 12 anywhere?",
      "Welcome to Level 12."
  ],
  [
      "Don't let coins leave the screen.",
      "Start from the bottom.",
      "Always clear the bottom row first."
  ],
  [
      "Remember the colors.",
      "Repeat the colors.",
      "Simon says...",
      "Press the colors in the order you saw them."
  ],
  [
      "The underline is not part of the solution to this level.",
      "The coin moves after each tap.",
      "Just tap the coins."
  ],
  [
      "Name of the game",
      "Add to 12",
      "You want to light up the lines to add to 12.",
      "A number is lit up if there are an odd number of lines connected to it lit up."
  ],
  [
      "Things that don't matter: the underline, the hour hand, and the minute hand.",
      "Thing that matters a lot: the second hand.",
      "Careful not to act when the second hand is around.",
      "You can't press any coins when the second hand is over any coin."
  ],
  [
      "Tap two",
      "Notice the repeated cards.",
      "Match card pairs."
  ],
  [
      "You set the difficulty.",
      "The longer the hold, the longer you'll have.",
      "Try to hold the button as long as you can."
  ],
  [
      "Notice what tapping one of them does?",
      "Get all of them lit up.",
      "Tapping one lights up everything around it, including itself.",
      "Focus on the middle."
  ],
  [
      "This mouse likes cheese.",
      "This mouse wants to eat all the cheese.",
      "You only have 12 moves."
  ],
  [
      "Name of the game",
      "Imagine '12' on a digital clock.",
      "Spin the wires to make '12'."
  ],
  [
      "Each coin has a partner coin.",
      "Name of the game",
      "Times Square",
      "Okay, maybe just times",
      "Each pair multiples to 12"
  ],
  [
      "Is this level grinding your gears?",
      "Update your preferences, perhaps?",
      "Don't click the hints, silly, click the other button!",
      "The settings for this level are quite interesting."
  ],
  [
      "The underline doesn't pertain to the solution of the level.",
      "First word",
      "Scroll",
      "Scroll down."
  ],
  [
      "Spell a word",
      "One syllable",
      "First letter is T",
      "Name of the game"
  ],
  [
      "Zoom",
      "Zoom in",
      "Zoom in with two fingers."
  ],
  [
      "What do 28, 30, and 31 have in common?",
      "Perhaps 29 should be included every four years or so",
      "J F M A M J J A S O N D",
      "Months"
  ],
  [
      "What could be hiding in that can?",
      "Any way to force the can open?",
      "What should you never do to a soda can?",
      "Shake!",
      "...by sliding it"
  ],
  [
      "Do these images make anything?",
      "Jigsaw",
      "Line up the coins with each other"
  ],
  [
      "Name of the game",
      "Stacks",
      "Each box is a stack. The last letter gets removed."
  ],
  [
      "I'm a computer. I'm a computer-y guy.",
      "Do those numbers look familiar?",
      "Binary",
      "110 + 110 = 1100"
  ],
  [
      "Blue good. Red bad.",
      "Beware every third tap.",
      "Tapping changes the axis of rotation. Be careful with every third tap."
  ],
  [
      "Where have you seen this 3x3 configuration before?",
      "Name of the game",
      "Level 22 called. It wants its level back."
  ],
  [
      "Tick tock",
      "Hours",
      "Start at 1 o'clock"
  ],
  [
      "Looks like the conveyor belt's broken.",
      "Where could you find an extra gear?",
      "Have you tried updating your game preferences?"
  ],
  [
      "The underline is unrelated to this level's solution.",
      "Try to remember the positions.",
      "The grid is 4x3."
  ],
  [
      "It's like Level 14, but something's changed...",
      "The black bordered squares don't behave like the other colors.",
      "Simon does not say (black borders)",
      "The black border acts as a 'not'."
  ],
  [
      "Color blind mode doesn't show the pluses for this level. :(",
      "Move the spotlight.",
      "Can you find the hidden coins?"
  ],
  [
      "Blue good. Red bad.",
      "Can't tap the same coin twice.",
      "The level gets more difficult as you progress."
  ],
  [
      "Blue shift",
      "Pulley",
      "Pull the pulley.",
      "Where could the blue coins be?"
  ],
  [
      "Name of the game",
      "The underline is not part of the solution to this level.",
      "Can you find it? (there are two of them)",
      "Find 'twelve' in the word search!",
      "Make sure you also check diagonals and backwards."
  ],
  [
      "Pop!",
      "Balloons pop at high altitudes.",
      "Tap and hold."
  ],
  [
      "Name of the game",
      "You want to fill up the battery (not too high, not too low).",
      "Add to 12.",
      "Start with -2."
  ],
  [
      "Stay close.",
      "Love thy neighbor.",
      "You can't tap non-neighbors.",
      "Start with the top coin."
  ],
  [
      "Volume = length * width * height",
      "Name of the game",
      "Balance the dimensions to get 12 on each."
  ],
  [
      "Name of the game",
      "+7 *2 *(-1)",
      "Try to get to -2 first (and then to 12).",
      "Don't forget you can restart if you're stuck."
  ],
  [
      "Circuit",
      "Complete the circuit.",
      "I wonder if there are any electronics nearby...",
      "A light bulb moment?",
      "No more tapping the hint button."
  ],
  [
      "˙˙˙uʍop ǝpᴉsdn sᴉ ƃuᴉɥʇʎɹǝʌǝ sɹɐǝddɐ ʇI",
      "How would you make it right-side up?",
      "Perhaps physically rotate your device.",
      "If the level doesn't work, it might be a bug (or you're using an emulator)."
  ],
  [
      "Balance",
      "Name of the game",
      "+",
      "Balance both sides to sum to 12."
  ],
  [
      "The underline is not part of the level's solution.",
      "You only need to tap one coin at a time.",
      "A new challenger approaches!",
      "Don't tap the old coins."
  ],
  [
      "This level looks familiar...",
      "A1Z26",
      "Throwback to Level 26",
      "A = 1, B = 2, ..., Z = 26",
      "Name of the game"
  ],
  [
      "Tick tock",
      "They tell you what's next.",
      "Go to the hand position indicated by the clocks."
  ],
  [
      "The underline is not part of the solution.",
      "SMS",
      "Ever texted on an old phone?",
      "2 = ABC, 3 = DEF, ..., 9 = WXYZ"
  ],
  [
      "Stack and queue",
      "The first one removes the last letter. The second one removes the first letter.",
      "Name of the game",
      "When solving the queue, try to keep the next letter you need in the queue."
  ],
  [
      "If only you could see the whole image...",
      "Portrait mode is not doing its job.",
      "Maybe someone should have made this game in landscape."
  ],
  [
      "Each path is crossed only once.",
      "You can repeat coins as long as they're adjacent to the current one.",
      "Start from the middle-left or the bottom-middle."
  ],
  [
      "Do you see the squares?",
      "There are twelve squares.",
      "Resize, rotate, and move the square to fit the squares.",
      "5 at 0 degrees, 5 at 45 degrees, 2 at 26.6 degrees."
  ],
  [
      "Name of the game (both horizontal and vertical)",
      "The middle E should be shared.",
      "It might help to solve for one of them first."
  ],
  [
      "Have you seen these icons somewhere before?",
      "Perhaps you could change some of these preferences.",
      "On and off",
      "You need to satisfy both conditions for the ones on the right."
  ],
  [
      "Clean up the clutter.",
      "Move aside!",
      "Move all the 'twelve' texts away to reveal the coins."
  ],
  [
      "Can you get the balls to the hole in the middle?",
      "Tilt it",
      "Tilt your device"
  ],
  [
      "Blue good. Red bad.",
      "Photo finish across the finish line!",
      "Cars travel at different speeds and at different patterns.",
      "Take a picture of the car as it travels over the finish line."
  ],
  [
      "Name of the game",
      "More binary",
      "011 * 101 - 011 = 001100"
  ],
  [
      "The glass is blocking me from shaking it!",
      "Shake the vending machine itself.",
      "Shake shake shake (but not with the screen)",
      "Shake your physical device."
  ],
  [
      "Try to make the image 12.",
      "You can solve this in twelve moves with perfect play.",
      "The order is of the tiles is given by the number on the tile.",
      "Start by moving Tile 11."
  ],
  [
      "Mary had what?",
      "Mary had a little lamb",
      "You only need the white notes.",
      "E D C D E E E D D D E G G",
      "C is the first white note, D is the second, E the third, F the fourth, G the fifth."
  ],
  [
      "Numbers denote distance.",
      "You can only tap coins that many numbers away from it.",
      "You can travel in either direction.",
      "Start with the top left coin."
  ],
  [
      "i.",
      "Dots.",
      "Do you see the dots?",
      "The i's dot and the period look like something."
  ],
  [
      "I'm glad you're looking for hints.",
      "Did you see that?",
      "Pay close attention to the ad."
  ],
  [
      "What can you press?",
      "There's blue falling from the screen.",
      "Tap the coins as they're falling down."
  ],
  [
      "The hints are all in plain sight.",
      "The clues are contained in the past.",
      "It's a scavenger hunt!",
      "Previous levels contain the components needed for the level.",
      "There's an pattern underlining it all...",
      "Combine the underlined characters in the levels listed."
  ]
];

function getNumHints(levelNum) {
  return hints[levelNum - 1].length;
}

function getHint(levelNum, hintIndex) {
  return hints[levelNum - 1][hintIndex];
}
