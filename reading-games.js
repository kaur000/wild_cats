// ========================================
// ADVANCED PHONICS GAME - MODERN ES6+ VERSION
// ========================================

'use strict';

// ========================================
// EDUCATIONAL STANDARDS & LEARNING OBJECTIVES
// ========================================

/**
 * Educational standards categories
 * @type {Object}
 */
const EDUCATIONAL_STANDARDS = {
    PA: {
        code: 'PA',
        name: 'Phonological Awareness',
        description: 'Early Reading & Language',
        color: '#667eea',
        icon: '🎵'
    },
    LS: {
        code: 'LS',
        name: 'Listening Skills',
        description: 'Communication & Comprehension',
        color: '#f093fb',
        icon: '👂'
    },
    BL: {
        code: 'BL',
        name: 'Basic Literacy',
        description: 'Reading & Writing Foundations',
        color: '#4facfe',
        icon: '📖'
    },
    RW: {
        code: 'RW',
        name: 'Reading & Writing',
        description: 'Language Arts',
        color: '#43e97b',
        icon: '✍️'
    },
    IW: {
        code: 'IW',
        name: 'Interactive Writing',
        description: 'Literacy & Engagement',
        color: '#fa709a',
        icon: '✏️'
    },
    LC: {
        code: 'LC',
        name: 'Language Comprehension',
        description: 'Understanding & Interpretation',
        color: '#30cfd0',
        icon: '🧠'
    },
    AP: {
        code: 'AP',
        name: 'Applied Practice',
        description: 'Application of Concepts',
        color: '#a8edea',
        icon: '🎯'
    },
    FLU: {
        code: 'FLU',
        name: 'Fluency',
        description: 'Reading or Math Speed/Accuracy',
        color: '#ffd89b',
        icon: '⚡'
    },
    COMP: {
        code: 'COMP',
        name: 'Comprehension',
        description: 'Understanding Concepts, Reading, or Problem Solving',
        color: '#a6c1ee',
        icon: '💡'
    }
};

/**
 * Game learning objectives mapping
 * @type {Object}
 */
const GAME_LEARNING_OBJECTIVES = {
    'blends': {
        name: 'Blend Masters',
        standards: ['PA', 'LS', 'BL'],
        objectives: [
            'Identify and recognize consonant blends',
            'Distinguish blend sounds in words',
            'Build phonological awareness through blending'
        ]
    },
    'digraphs': {
        name: 'Digraph Detective',
        standards: ['PA', 'LS', 'BL'],
        objectives: [
            'Recognize digraph patterns (sh, ch, th, etc.)',
            'Identify digraph positions in words',
            'Understand two letters making one sound'
        ]
    },
    'vowel-teams': {
        name: 'Vowel Teams',
        standards: ['PA', 'BL', 'RW'],
        objectives: [
            'Recognize vowel team patterns',
            'Apply vowel team rules in reading',
            'Build decoding skills with complex vowels'
        ]
    },
    'sound-out': {
        name: 'Sound It Out',
        standards: ['PA', 'BL', 'AP'],
        objectives: [
            'Segment words into individual phonemes',
            'Count sounds in spoken words',
            'Apply phoneme awareness to decoding'
        ]
    },
    'fluency': {
        name: 'Speed Reader',
        standards: ['FLU', 'RW', 'COMP', 'IW'],
        objectives: [
            'Build reading fluency and speed',
            'Improve reading accuracy',
            'Develop sentence comprehension',
            'Practice typing and spelling skills'
        ]
    },
    'syllables': {
        name: 'Syllable Clap',
        standards: ['PA', 'LS', 'AP'],
        objectives: [
            'Identify syllable breaks in words',
            'Count syllables through clapping',
            'Understand word structure and rhythm'
        ]
    },
    'sight-words': {
        name: 'Sight Words',
        standards: ['BL', 'RW', 'FLU', 'LC'],
        objectives: [
            'Recognize high-frequency sight words',
            'Build automatic word recognition',
            'Improve reading fluency',
            'Develop visual memory for words'
        ]
    },
    'rhyming': {
        name: 'Rhyme Time',
        standards: ['PA', 'LS', 'LC'],
        objectives: [
            'Identify rhyming word patterns',
            'Recognize word families',
            'Develop phonemic awareness through rhyme'
        ]
    },
    'word-builder': {
        name: 'Word Builder',
        standards: ['BL', 'RW', 'AP'],
        objectives: [
            'Build words from individual letters',
            'Practice letter-sound correspondence',
            'Develop spelling and word construction skills'
        ]
    },
    'beginning-sounds': {
        name: 'Beginning Sounds',
        standards: ['PA', 'LS', 'BL'],
        objectives: [
            'Identify initial sounds in words',
            'Match sounds to letters',
            'Build phonemic awareness of beginning sounds'
        ]
    },
    'magic-e': {
        name: 'Magic E',
        standards: ['PA', 'BL', 'RW'],
        objectives: [
            'Understand silent E rule',
            'Recognize vowel sound changes with magic E',
            'Apply magic E pattern to reading and spelling'
        ]
    },
    'word-families': {
        name: 'Word Families',
        standards: ['PA', 'BL', 'AP'],
        objectives: [
            'Recognize word family patterns',
            'Sort words by ending patterns',
            'Build decoding skills through word families'
        ]
    },
    'story-sequencer': {
        name: 'Story Sequencer',
        standards: ['COMP', 'LC', 'RW'],
        objectives: [
            'Understand story sequence and order',
            'Identify beginning, middle, and end',
            'Develop narrative comprehension skills'
        ]
    },
    'word-detective': {
        name: 'Word Detective',
        standards: ['BL', 'RW', 'FLU'],
        objectives: [
            'Unscramble letters to form words',
            'Practice spelling and word recognition',
            'Develop problem-solving with letters'
        ]
    }
};

// ========================================
// GAME DATA WITH DIFFICULTY LEVELS
// ========================================

/**
 * @typedef {Object} BlendWord
 * @property {string} word - The complete word
 * @property {string} blend - The blend pattern
 * @property {string} position - Position of blend (start/end)
 * @property {number} difficulty - Difficulty level (1-3)
 */

const BLEND_WORDS = [
    { word: 'STOP', blend: 'ST', position: 'start', difficulty: 1 },
    { word: 'SKIP', blend: 'SK', position: 'start', difficulty: 1 },
    { word: 'FROG', blend: 'FR', position: 'start', difficulty: 1 },
    { word: 'DRUM', blend: 'DR', position: 'start', difficulty: 1 },
    { word: 'SLIP', blend: 'SL', position: 'start', difficulty: 1 },
    { word: 'GLAD', blend: 'GL', position: 'start', difficulty: 2 },
    { word: 'TRAP', blend: 'TR', position: 'start', difficulty: 1 },
    { word: 'CRAB', blend: 'CR', position: 'start', difficulty: 2 },
    { word: 'SWIM', blend: 'SW', position: 'start', difficulty: 2 },
    { word: 'SPIN', blend: 'SP', position: 'start', difficulty: 1 },
    { word: 'SNAP', blend: 'SN', position: 'start', difficulty: 1 },
    { word: 'FLAG', blend: 'FL', position: 'start', difficulty: 1 },
    { word: 'SLED', blend: 'SL', position: 'start', difficulty: 1 },
    { word: 'BRUSH', blend: 'BR', position: 'start', difficulty: 2 },
    { word: 'SPLIT', blend: 'SPL', position: 'start', difficulty: 3 },
    { word: 'SPRING', blend: 'SPR', position: 'start', difficulty: 3 },
    { word: 'STRAP', blend: 'STR', position: 'start', difficulty: 3 },
    { word: 'SCRAP', blend: 'SCR', position: 'start', difficulty: 3 }
];

const DIGRAPH_WORDS = [
    { word: 'SHIP', digraph: 'SH', position: 'start', difficulty: 1 },
    { word: 'CHIP', digraph: 'CH', position: 'start', difficulty: 1 },
    { word: 'THEN', digraph: 'TH', position: 'start', difficulty: 1 },
    { word: 'WHEN', digraph: 'WH', position: 'start', difficulty: 2 },
    { word: 'PHONE', digraph: 'PH', position: 'start', difficulty: 3 },
    { word: 'FISH', digraph: 'SH', position: 'end', difficulty: 1 },
    { word: 'MUCH', digraph: 'CH', position: 'end', difficulty: 1 },
    { word: 'BATH', digraph: 'TH', position: 'end', difficulty: 1 },
    { word: 'DUCK', digraph: 'CK', position: 'end', difficulty: 1 },
    { word: 'WING', digraph: 'NG', position: 'end', difficulty: 2 },
    { word: 'SING', digraph: 'NG', position: 'end', difficulty: 1 },
    { word: 'THICK', digraph: 'TH', position: 'start', difficulty: 2 },
    { word: 'WHEEL', digraph: 'WH', position: 'start', difficulty: 2 },
    { word: 'RUSH', digraph: 'SH', position: 'end', difficulty: 1 }
];

const VOWEL_TEAM_WORDS = [
    { word: 'RAIN', vowelTeam: 'AI', before: 'R', after: 'N', difficulty: 1 },
    { word: 'BOAT', vowelTeam: 'OA', before: 'B', after: 'T', difficulty: 1 },
    { word: 'BEAN', vowelTeam: 'EA', before: 'B', after: 'N', difficulty: 1 },
    { word: 'FEET', vowelTeam: 'EE', before: 'F', after: 'T', difficulty: 1 },
    { word: 'COAT', vowelTeam: 'OA', before: 'C', after: 'T', difficulty: 1 },
    { word: 'TAIL', vowelTeam: 'AI', before: 'T', after: 'L', difficulty: 1 },
    { word: 'SOAP', vowelTeam: 'OA', before: 'S', after: 'P', difficulty: 2 },
    { word: 'SEAT', vowelTeam: 'EA', before: 'S', after: 'T', difficulty: 1 },
    { word: 'TREE', vowelTeam: 'EE', before: 'TR', after: '', difficulty: 1 },
    { word: 'SNAIL', vowelTeam: 'AI', before: 'SN', after: 'L', difficulty: 2 },
    { word: 'ROAD', vowelTeam: 'OA', before: 'R', after: 'D', difficulty: 1 },
    { word: 'BEACH', vowelTeam: 'EA', before: 'B', after: 'CH', difficulty: 2 },
    { word: 'MOON', vowelTeam: 'OO', before: 'M', after: 'N', difficulty: 2 },
    { word: 'BLUE', vowelTeam: 'UE', before: 'BL', after: '', difficulty: 3 }
];

const SOUND_OUT_WORDS = [
    { word: 'CAT', sounds: ['C', 'A', 'T'], count: 3, difficulty: 1 },
    { word: 'FROG', sounds: ['F', 'R', 'O', 'G'], count: 4, difficulty: 2 },
    { word: 'SHOP', sounds: ['SH', 'O', 'P'], count: 3, difficulty: 2 },
    { word: 'STOP', sounds: ['S', 'T', 'O', 'P'], count: 4, difficulty: 2 },
    { word: 'CHIP', sounds: ['CH', 'I', 'P'], count: 3, difficulty: 2 },
    { word: 'TRAIN', sounds: ['T', 'R', 'AI', 'N'], count: 4, difficulty: 3 },
    { word: 'DUCK', sounds: ['D', 'U', 'CK'], count: 3, difficulty: 2 },
    { word: 'SKIP', sounds: ['S', 'K', 'I', 'P'], count: 4, difficulty: 2 },
    { word: 'BATH', sounds: ['B', 'A', 'TH'], count: 3, difficulty: 2 },
    { word: 'SNACK', sounds: ['S', 'N', 'A', 'CK'], count: 4, difficulty: 3 }
];

const FLUENCY_SENTENCES = [
    { text: 'The cat sat on the mat.', words: 6, level: 1, difficulty: 1 },
    { text: 'I can see a big red bus.', words: 7, level: 1, difficulty: 1 },
    { text: 'The dog runs fast in the park.', words: 7, level: 1, difficulty: 1 },
    { text: 'She likes to play with her friends.', words: 7, level: 2, difficulty: 2 },
    { text: 'The sun shines bright in the blue sky.', words: 8, level: 2, difficulty: 2 },
    { text: 'They went to the store to buy snacks.', words: 8, level: 2, difficulty: 2 },
    { text: 'My teacher reads us a fun story every day.', words: 9, level: 2, difficulty: 2 },
    { text: 'The children are playing on the swings and slides.', words: 9, level: 3, difficulty: 3 },
    { text: 'We can hear the birds singing in the trees.', words: 9, level: 3, difficulty: 3 },
    { text: 'The frog jumped into the pond with a big splash.', words: 10, level: 3, difficulty: 3 }
];

const SYLLABLE_WORDS = [
    { word: 'CAT', syllables: 1, divided: 'CAT', difficulty: 1 },
    { word: 'DOG', syllables: 1, divided: 'DOG', difficulty: 1 },
    { word: 'RAINBOW', syllables: 2, divided: 'RAIN-BOW', difficulty: 1 },
    { word: 'MONKEY', syllables: 2, divided: 'MON-KEY', difficulty: 1 },
    { word: 'HAPPY', syllables: 2, divided: 'HAP-PY', difficulty: 1 },
    { word: 'APPLE', syllables: 2, divided: 'AP-PLE', difficulty: 1 },
    { word: 'BANANA', syllables: 3, divided: 'BA-NA-NA', difficulty: 2 },
    { word: 'ELEPHANT', syllables: 3, divided: 'EL-E-PHANT', difficulty: 2 },
    { word: 'BUTTERFLY', syllables: 3, divided: 'BUT-TER-FLY', difficulty: 2 },
    { word: 'WATERMELON', syllables: 4, divided: 'WA-TER-MEL-ON', difficulty: 3 }
];

const SIGHT_WORDS = [
    { word: 'SAID', difficulty: 1 },
    { word: 'WAS', difficulty: 1 },
    { word: 'ARE', difficulty: 1 },
    { word: 'THEY', difficulty: 1 },
    { word: 'COULD', difficulty: 2 },
    { word: 'WOULD', difficulty: 2 },
    { word: 'SHOULD', difficulty: 2 },
    { word: 'HAVE', difficulty: 1 },
    { word: 'DOES', difficulty: 2 },
    { word: 'WERE', difficulty: 1 },
    { word: 'COME', difficulty: 1 },
    { word: 'SOME', difficulty: 1 },
    { word: 'ONE', difficulty: 1 },
    { word: 'TWO', difficulty: 1 },
    { word: 'WHO', difficulty: 2 },
    { word: 'WHAT', difficulty: 1 },
    { word: 'WHEN', difficulty: 1 },
    { word: 'WHERE', difficulty: 2 },
    { word: 'THERE', difficulty: 2 },
    { word: 'THEIR', difficulty: 3 }
];

const RHYMING_WORDS = [
    { target: 'CAT', rhymes: ['HAT', 'BAT', 'MAT'], notRhyme: ['DOG', 'PIG', 'SUN'], difficulty: 1 },
    { target: 'BELL', rhymes: ['WELL', 'FELL', 'TELL'], notRhyme: ['BALL', 'DOLL', 'WALL'], difficulty: 1 },
    { target: 'BIG', rhymes: ['PIG', 'DIG', 'WIG'], notRhyme: ['DOG', 'HOG', 'LOG'], difficulty: 1 },
    { target: 'CAKE', rhymes: ['MAKE', 'LAKE', 'TAKE'], notRhyme: ['BAKE', 'BOOK', 'LOOK'], difficulty: 2 },
    { target: 'BLUE', rhymes: ['NEW', 'FLEW', 'GREW'], notRhyme: ['GLUE', 'RED', 'BED'], difficulty: 2 },
    { target: 'NIGHT', rhymes: ['LIGHT', 'BRIGHT', 'FIGHT'], notRhyme: ['SIGHT', 'DARK', 'PARK'], difficulty: 3 },
    { target: 'FROG', rhymes: ['DOG', 'HOG', 'LOG'], notRhyme: ['BIG', 'PIG', 'DIG'], difficulty: 1 },
    { target: 'RAIN', rhymes: ['TRAIN', 'CHAIN', 'PLAIN'], notRhyme: ['MAIN', 'SUN', 'FUN'], difficulty: 2 }
];

// Word Builder Game Data
const WORD_BUILDER_WORDS = [
    { word: 'CAT', hint: 'A furry pet that meows', difficulty: 1 },
    { word: 'DOG', hint: 'A pet that barks', difficulty: 1 },
    { word: 'SUN', hint: 'It shines in the sky', difficulty: 1 },
    { word: 'BED', hint: 'Where you sleep', difficulty: 1 },
    { word: 'FROG', hint: 'A green hopping animal', difficulty: 2 },
    { word: 'FISH', hint: 'Swims in water', difficulty: 2 },
    { word: 'TREE', hint: 'Tall plant with leaves', difficulty: 2 },
    { word: 'STAR', hint: 'Twinkles in the night', difficulty: 2 },
    { word: 'APPLE', hint: 'A red fruit', difficulty: 3 },
    { word: 'TRAIN', hint: 'Runs on tracks', difficulty: 3 }
];

// Beginning Sounds Game Data
const BEGINNING_SOUNDS = [
    { emoji: '🐱', word: 'CAT', letter: 'C', wrong: ['D', 'B', 'P'], difficulty: 1 },
    { emoji: '🐶', word: 'DOG', letter: 'D', wrong: ['B', 'C', 'G'], difficulty: 1 },
    { emoji: '☀️', word: 'SUN', letter: 'S', wrong: ['F', 'R', 'M'], difficulty: 1 },
    { emoji: '🐸', word: 'FROG', letter: 'F', wrong: ['B', 'P', 'T'], difficulty: 1 },
    { emoji: '🍎', word: 'APPLE', letter: 'A', wrong: ['E', 'O', 'U'], difficulty: 1 },
    { emoji: '🐝', word: 'BEE', letter: 'B', wrong: ['P', 'D', 'C'], difficulty: 1 },
    { emoji: '🦁', word: 'LION', letter: 'L', wrong: ['R', 'N', 'M'], difficulty: 2 },
    { emoji: '🐘', word: 'ELEPHANT', letter: 'E', wrong: ['A', 'I', 'O'], difficulty: 2 },
    { emoji: '🦋', word: 'BUTTERFLY', letter: 'B', wrong: ['P', 'F', 'D'], difficulty: 2 },
    { emoji: '🌈', word: 'RAINBOW', letter: 'R', wrong: ['W', 'L', 'N'], difficulty: 2 }
];

// Magic E Game Data
const MAGIC_E_WORDS = [
    { before: 'CAN', after: 'CANE', choices: ['CANE', 'CONE', 'LANE'], difficulty: 1 },
    { before: 'CAP', after: 'CAPE', choices: ['CAPE', 'TAPE', 'CAMP'], difficulty: 1 },
    { before: 'MAD', after: 'MADE', choices: ['MADE', 'MAKE', 'MARE'], difficulty: 1 },
    { before: 'KIT', after: 'KITE', choices: ['KITE', 'BITE', 'KITS'], difficulty: 2 },
    { before: 'CUB', after: 'CUBE', choices: ['CUBE', 'CUTE', 'TUBE'], difficulty: 2 },
    { before: 'HOP', after: 'HOPE', choices: ['HOPE', 'ROPE', 'HOPS'], difficulty: 2 },
    { before: 'PIN', after: 'PINE', choices: ['PINE', 'FINE', 'PINS'], difficulty: 2 },
    { before: 'TUB', after: 'TUBE', choices: ['TUBE', 'TUNE', 'TUBS'], difficulty: 3 }
];

// Word Families Data
const WORD_FAMILIES = [
    {
        pattern: '-at',
        words: ['CAT', 'BAT', 'HAT', 'MAT', 'RAT', 'SAT'],
        wrong: ['DOG', 'BED', 'CUP'],
        difficulty: 1
    },
    {
        pattern: '-an',
        words: ['CAN', 'MAN', 'PAN', 'RAN', 'VAN', 'FAN'],
        wrong: ['CAR', 'BUS', 'BIG'],
        difficulty: 1
    },
    {
        pattern: '-ig',
        words: ['BIG', 'DIG', 'FIG', 'PIG', 'WIG'],
        wrong: ['DOG', 'CAT', 'BED'],
        difficulty: 1
    },
    {
        pattern: '-ake',
        words: ['BAKE', 'CAKE', 'LAKE', 'MAKE', 'RAKE', 'TAKE'],
        wrong: ['BIKE', 'HIKE', 'LIKE'],
        difficulty: 2
    },
    {
        pattern: '-ight',
        words: ['BRIGHT', 'FIGHT', 'LIGHT', 'MIGHT', 'NIGHT', 'RIGHT'],
        wrong: ['SITE', 'BITE', 'KITE'],
        difficulty: 3
    }
];

// Story Sequencer Data
const STORY_SEQUENCES = [
    {
        title: 'A Day at School',
        sentences: [
            'I wake up and get ready for school.',
            'I eat breakfast with my family.',
            'The bus takes me to school.',
            'I learn new things in class.',
            'I go home and do my homework.'
        ],
        difficulty: 1
    },
    {
        title: 'Making a Sandwich',
        sentences: [
            'Get two slices of bread.',
            'Spread peanut butter on one slice.',
            'Spread jelly on the other slice.',
            'Put the slices together.',
            'Enjoy your sandwich!'
        ],
        difficulty: 1
    },
    {
        title: 'Planting a Seed',
        sentences: [
            'Dig a small hole in the dirt.',
            'Place the seed in the hole.',
            'Cover it with soil.',
            'Water the seed every day.',
            'Watch it grow into a plant!'
        ],
        difficulty: 2
    },
    {
        title: 'The Lost Puppy',
        sentences: [
            'A small puppy got lost in the park.',
            'A kind girl found the puppy crying.',
            'She looked at the puppy\'s collar for a name.',
            'She called the number on the tag.',
            'The puppy\'s owner came and was so happy!'
        ],
        difficulty: 2
    }
];

// Word Detective Data (Scrambled Words)
const WORD_DETECTIVE_WORDS = [
    { scrambled: 'TAC', answer: 'CAT', hint: 'A furry pet that meows', difficulty: 1 },
    { scrambled: 'OGD', answer: 'DOG', hint: 'A pet that barks', difficulty: 1 },
    { scrambled: 'NUS', answer: 'SUN', hint: 'Shines bright in the sky', difficulty: 1 },
    { scrambled: 'GORF', answer: 'FROG', hint: 'Green animal that hops', difficulty: 2 },
    { scrambled: 'ISHF', answer: 'FISH', hint: 'Swims in the water', difficulty: 2 },
    { scrambled: 'RETE', answer: 'TREE', hint: 'Tall with leaves and branches', difficulty: 2 },
    { scrambled: 'LPAPE', answer: 'APPLE', hint: 'A crunchy red fruit', difficulty: 3 },
    { scrambled: 'RINBWAO', answer: 'RAINBOW', hint: 'Colors in the sky after rain', difficulty: 3 }
];

// ========================================
// UTILITY CLASSES
// ========================================

/**
 * Utility class for array and data manipulation
 */
class Utils {
    /**
     * Fisher-Yates shuffle algorithm
     * @param {Array} array - Array to shuffle
     * @returns {Array} Shuffled array
     */
    static shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    /**
     * Calculate Levenshtein distance between two strings
     * @param {string} str1 - First string
     * @param {string} str2 - Second string
     * @returns {number} Edit distance
     */
    static editDistance(str1, str2) {
        const matrix = [];
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[str2.length][str1.length];
    }

    /**
     * Calculate similarity percentage between two strings
     * @param {string} str1 - First string
     * @param {string} str2 - Second string
     * @returns {number} Similarity (0-1)
     */
    static calculateSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        if (longer.length === 0) return 1.0;
        return (longer.length - this.editDistance(longer, shorter)) / longer.length;
    }

    /**
     * Get random success emoji
     * @returns {string} Random emoji
     */
    static getCorrectEmoji() {
        const emojis = ['🎉', '⭐', '🌟', '🎊', '🏆', '👏', '🎯', '✨'];
        return emojis[Math.floor(Math.random() * emojis.length)];
    }

    /**
     * Get random success message
     * @returns {string} Random message
     */
    static getCorrectMessage() {
        const messages = ['Awesome!', 'Perfect!', 'Great job!', 'Fantastic!',
            'You got it!', 'Amazing!', 'Brilliant!', 'Excellent!'];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    /**
     * Filter items by difficulty level
     * @param {Array} items - Items to filter
     * @param {number} difficulty - Difficulty level (1-3)
     * @returns {Array} Filtered items
     */
    static filterByDifficulty(items, difficulty) {
        if (!difficulty || difficulty === 0) return items;
        return items.filter(item => (item.difficulty || 1) <= difficulty);
    }
}

// ========================================
// STORAGE MANAGER
// ========================================

/**
 * Manages local storage for game progress and achievements
 */
class GameStorageManager {
    static KEYS = {
        PROGRESS: 'readingGames_progress',
        ACHIEVEMENTS: 'readingGames_achievements',
        HIGH_SCORES: 'readingGames_highScores',
        SETTINGS: 'readingGames_settings'
    };

    /**
     * Save data to localStorage
     * @param {string} key - Storage key
     * @param {*} data - Data to save
     */
    static save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.warn('Failed to save to localStorage:', error);
        }
    }

    /**
     * Load data from localStorage
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default value if not found
     * @returns {*} Loaded data or default
     */
    static load(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.warn('Failed to load from localStorage:', error);
            return defaultValue;
        }
    }

    /**
     * Save game progress
     * @param {string} gameName - Name of the game
     * @param {Object} stats - Game statistics
     */
    static saveProgress(gameName, stats) {
        const progress = this.load(this.KEYS.PROGRESS, {});
        progress[gameName] = {
            ...progress[gameName],
            ...stats,
            lastPlayed: Date.now()
        };
        this.save(this.KEYS.PROGRESS, progress);
    }

    /**
     * Get game progress
     * @param {string} gameName - Name of the game
     * @returns {Object} Game progress
     */
    static getProgress(gameName) {
        const progress = this.load(this.KEYS.PROGRESS, {});
        return progress[gameName] || { gamesPlayed: 0, totalScore: 0, bestStreak: 0 };
    }

    /**
     * Unlock achievement
     * @param {string} achievementId - Achievement ID
     * @param {Object} achievementData - Achievement data
     */
    static unlockAchievement(achievementId, achievementData) {
        const achievements = this.load(this.KEYS.ACHIEVEMENTS, {});
        if (!achievements[achievementId]) {
            achievements[achievementId] = {
                ...achievementData,
                unlockedAt: Date.now()
            };
            this.save(this.KEYS.ACHIEVEMENTS, achievements);
            return true;
        }
        return false;
    }

    /**
     * Get all achievements
     * @returns {Object} All achievements
     */
    static getAchievements() {
        return this.load(this.KEYS.ACHIEVEMENTS, {});
    }

    /**
     * Save high score
     * @param {string} gameName - Name of the game
     * @param {number} score - Score achieved
     */
    static saveHighScore(gameName, score) {
        const highScores = this.load(this.KEYS.HIGH_SCORES, {});
        if (!highScores[gameName] || score > highScores[gameName]) {
            highScores[gameName] = score;
            this.save(this.KEYS.HIGH_SCORES, highScores);
            return true;
        }
        return false;
    }

    /**
     * Get high score
     * @param {string} gameName - Name of the game
     * @returns {number} High score
     */
    static getHighScore(gameName) {
        const highScores = this.load(this.KEYS.HIGH_SCORES, {});
        return highScores[gameName] || 0;
    }

    /**
     * Track educational standard progress
     * @param {string} standardCode - Standard code (PA, LS, BL, etc.)
     * @param {string} gameName - Game name
     * @param {Object} performance - Performance metrics
     */
    static trackStandardProgress(standardCode, gameName, performance) {
        const key = 'readingGames_standardsProgress';
        const progress = this.load(key, {});

        if (!progress[standardCode]) {
            progress[standardCode] = {
                totalAttempts: 0,
                totalCorrect: 0,
                gamesPlayed: {},
                lastPracticed: null
            };
        }

        progress[standardCode].totalAttempts += performance.totalQuestions || 0;
        progress[standardCode].totalCorrect += performance.correctAnswers || 0;
        progress[standardCode].lastPracticed = Date.now();

        if (!progress[standardCode].gamesPlayed[gameName]) {
            progress[standardCode].gamesPlayed[gameName] = 0;
        }
        progress[standardCode].gamesPlayed[gameName]++;

        this.save(key, progress);
    }

    /**
     * Get educational standards progress
     * @returns {Object} Standards progress data
     */
    static getStandardsProgress() {
        return this.load('readingGames_standardsProgress', {});
    }

    /**
     * Get mastery level for a standard
     * @param {string} standardCode - Standard code
     * @returns {Object} Mastery information
     */
    static getStandardMastery(standardCode) {
        const progress = this.getStandardsProgress();
        const standardProgress = progress[standardCode];

        if (!standardProgress || standardProgress.totalAttempts === 0) {
            return { level: 'Not Started', percentage: 0, badge: '🔒' };
        }

        const percentage = Math.round((standardProgress.totalCorrect / standardProgress.totalAttempts) * 100);

        let level, badge;
        if (percentage >= 90) {
            level = 'Master';
            badge = '🏆';
        } else if (percentage >= 75) {
            level = 'Proficient';
            badge = '⭐';
        } else if (percentage >= 60) {
            level = 'Developing';
            badge = '📈';
        } else {
            level = 'Beginning';
            badge = '🌱';
        }

        return {
            level,
            badge,
            percentage,
            attempts: standardProgress.totalAttempts,
            correct: standardProgress.totalCorrect,
            gamesPlayed: Object.keys(standardProgress.gamesPlayed).length
        };
    }
}

// ========================================
// SPEECH SYNTHESIS MANAGER
// ========================================

/**
 * Manages text-to-speech functionality
 */
class SpeechManager {
    constructor() {
        this.voices = [];
        this.selectedVoice = null;
        this.isEnabled = window.speechSynthesis !== undefined;

        if (this.isEnabled) {
            this.initVoices();
            window.speechSynthesis.onvoiceschanged = () => this.initVoices();
        }
    }

    /**
     * Initialize and select the best voice
     */
    initVoices() {
        this.voices = window.speechSynthesis.getVoices();

        const preferredVoices = [
            'Samantha', 'Karen', 'Victoria', 'Fiona',
            'Microsoft Zira', 'Microsoft Susan',
            'Google US English Female', 'Google UK English Female'
        ];

        // Try to find preferred voice
        for (const preferred of preferredVoices) {
            const voice = this.voices.find(v => v.name.includes(preferred));
            if (voice) {
                this.selectedVoice = voice;
                console.log('Selected voice:', voice.name);
                return;
            }
        }

        // Fallback: female English voice
        this.selectedVoice = this.voices.find(v =>
            v.lang.startsWith('en') && v.name.toLowerCase().includes('female')
        ) || this.voices.find(v => v.lang.startsWith('en'));
    }

    /**
     * Speak text with default settings
     * @param {string} text - Text to speak
     * @param {Object} options - Speech options
     * @returns {Promise} Promise that resolves when speech is complete
     */
    async speak(text, options = {}) {
        if (!this.isEnabled) return Promise.resolve();

        window.speechSynthesis.cancel();

        return new Promise((resolve) => {
            setTimeout(() => {
                const utterance = new SpeechSynthesisUtterance(text);
                if (this.selectedVoice) utterance.voice = this.selectedVoice;
                utterance.rate = options.rate || 0.8;
                utterance.pitch = options.pitch || 1.1;
                utterance.volume = options.volume || 1.0;
                utterance.onend = () => resolve();
                window.speechSynthesis.speak(utterance);
            }, 100);
        });
    }

    /**
     * Speak text slowly and clearly (for sight words)
     * Speaks the word twice with a pause in between
     * @param {string} text - Text to speak
     * @returns {Promise} Promise that resolves when complete
     */
    async speakClearly(text) {
        if (!this.isEnabled) return Promise.resolve();

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Wait a moment for cancel to complete
        await new Promise(resolve => setTimeout(resolve, 100));

        // Speak the word the first time
        await this.speak(text, { rate: 0.75, pitch: 1.0 });

        // Pause between repetitions
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Speak the word the second time
        await this.speak(text, { rate: 0.75, pitch: 1.0 });
    }

    /**
     * Speak syllables separately
     * Speaks each syllable individually, then the whole word
     * @param {string} dividedWord - Word with syllables divided by hyphens (e.g., "BUT-TER-FLY")
     * @returns {Promise} Promise that resolves when complete
     */
    async speakSyllables(dividedWord) {
        if (!this.isEnabled) return Promise.resolve();

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Wait for cancel to complete
        await new Promise(resolve => setTimeout(resolve, 100));

        const syllables = dividedWord.split('-');

        // Speak each syllable separately with pauses
        for (const syllable of syllables) {
            await this.speak(syllable, { rate: 0.7, pitch: 1.0 });
            await new Promise(resolve => setTimeout(resolve, 700));
        }

        // Pause before saying whole word
        await new Promise(resolve => setTimeout(resolve, 800));

        // Say the complete word
        const wholeWord = dividedWord.replace(/-/g, '');
        await this.speak(wholeWord, { rate: 0.8, pitch: 1.0 });
    }

    /**
     * Speak individual sounds
     * @param {Object} wordData - Word data with sounds array
     * @returns {Promise} Promise that resolves when complete
     */
    async speakSounds(wordData) {
        if (!this.isEnabled) return Promise.resolve();

        window.speechSynthesis.cancel();

        // First say the whole word
        await this.speak(wordData.word);
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Then say each sound
        for (const sound of wordData.sounds) {
            await this.speak(sound, { rate: 0.6, pitch: 1.1 });
            await new Promise(resolve => setTimeout(resolve, 700));
        }
    }

    /**
     * Cancel all speech
     */
    cancel() {
        if (this.isEnabled) {
            window.speechSynthesis.cancel();
        }
    }
}

// ========================================
// ACHIEVEMENT SYSTEM
// ========================================

/**
 * Manages achievements and badges
 */
class AchievementSystem {
    static ACHIEVEMENTS = {
        FIRST_GAME: { id: 'first_game', name: 'First Steps', description: 'Play your first game!', icon: '🎮' },
        PERFECT_ROUND: { id: 'perfect_round', name: 'Perfect!', description: 'Get all questions right!', icon: '🏆' },
        STREAK_5: { id: 'streak_5', name: 'On Fire!', description: 'Get a 5 answer streak!', icon: '🔥' },
        STREAK_10: { id: 'streak_10', name: 'Unstoppable!', description: 'Get a 10 answer streak!', icon: '⚡' },
        PLAY_10: { id: 'play_10', name: 'Dedicated', description: 'Play 10 games!', icon: '📚' },
        HIGH_SCORE_100: { id: 'high_score_100', name: 'Century!', description: 'Score 100 points in one game!', icon: '💯' },
        ALL_GAMES: { id: 'all_games', name: 'Explorer', description: 'Try all game types!', icon: '🌟' }
    };

    /**
     * Check and unlock achievements based on game stats
     * @param {Object} stats - Game statistics
     * @returns {Array} Newly unlocked achievements
     */
    static checkAchievements(stats) {
        const newAchievements = [];

        // First game
        if (stats.gamesPlayed === 1) {
            if (GameStorageManager.unlockAchievement('first_game', this.ACHIEVEMENTS.FIRST_GAME)) {
                newAchievements.push(this.ACHIEVEMENTS.FIRST_GAME);
            }
        }

        // Perfect round
        if (stats.perfectRound) {
            if (GameStorageManager.unlockAchievement('perfect_round', this.ACHIEVEMENTS.PERFECT_ROUND)) {
                newAchievements.push(this.ACHIEVEMENTS.PERFECT_ROUND);
            }
        }

        // Streak achievements
        if (stats.bestStreak >= 5) {
            if (GameStorageManager.unlockAchievement('streak_5', this.ACHIEVEMENTS.STREAK_5)) {
                newAchievements.push(this.ACHIEVEMENTS.STREAK_5);
            }
        }
        if (stats.bestStreak >= 10) {
            if (GameStorageManager.unlockAchievement('streak_10', this.ACHIEVEMENTS.STREAK_10)) {
                newAchievements.push(this.ACHIEVEMENTS.STREAK_10);
            }
        }

        // Play count
        if (stats.totalGamesPlayed >= 10) {
            if (GameStorageManager.unlockAchievement('play_10', this.ACHIEVEMENTS.PLAY_10)) {
                newAchievements.push(this.ACHIEVEMENTS.PLAY_10);
            }
        }

        // High score
        if (stats.score >= 100) {
            if (GameStorageManager.unlockAchievement('high_score_100', this.ACHIEVEMENTS.HIGH_SCORE_100)) {
                newAchievements.push(this.ACHIEVEMENTS.HIGH_SCORE_100);
            }
        }

        return newAchievements;
    }

    /**
     * Show achievement notification
     * @param {Object} achievement - Achievement data
     */
    static showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-content">
                <div class="achievement-title">Achievement Unlocked!</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.description}</div>
            </div>
        `;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
}

// ========================================
// BASE GAME CLASS
// ========================================

/**
 * Base class for all games
 */
class BaseGame {
    constructor(gameManager, gameName) {
        this.gameManager = gameManager;
        this.gameName = gameName;
        this.gameData = [];
        this.currentIndex = 0;
        this.difficulty = 0; // 0 = all levels, 1-3 = specific difficulty
    }

    /**
     * Initialize the game
     */
    init() {
        throw new Error('init() must be implemented by subclass');
    }

    /**
     * Load next question
     */
    loadQuestion() {
        throw new Error('loadQuestion() must be implemented by subclass');
    }

    /**
     * Check answer
     * @param {*} _answer - User's answer
     */
    checkAnswer(_answer) {
        throw new Error('checkAnswer() must be implemented by subclass');
    }

    /**
     * Cleanup when leaving game
     */
    cleanup() {
        this.gameManager.speechManager.cancel();
    }

    /**
     * Get current question data
     * @returns {Object} Current question data
     */
    getCurrentData() {
        return this.gameData[this.currentIndex];
    }

    /**
     * Show result and update score
     * @param {boolean} correct - Whether answer was correct
     * @param {string} message - Message to display
     */
    showResult(correct, message) {
        this.gameManager.showResult(correct, message);
    }
}

// ========================================
// BLENDS GAME
// ========================================

class BlendsGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'blends');
        this.allBlends = ['ST', 'SK', 'FR', 'DR', 'SL', 'GL', 'TR', 'CR', 'SW', 'SP', 'SN', 'FL', 'BR', 'SPL', 'SPR', 'STR', 'SCR'];
    }

    init() {
        const filtered = Utils.filterByDifficulty(BLEND_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('blends-game').classList.add('active');
        document.getElementById('blend-sound').onclick = () =>
            this.gameManager.speechManager.speak(this.getCurrentData().word);
        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('blend-word').textContent = data.word;

        // Update position hint
        const positionEl = document.getElementById('blend-position');
        if (positionEl) {
            positionEl.textContent = data.position === 'start' ? 'beginning' : 'end';
        }

        // Create choices - similar length to correct answer for better learning
        let choices = [data.blend];
        const similarBlends = this.allBlends.filter(b =>
            b !== data.blend &&
            Math.abs(b.length - data.blend.length) <= 1 // Similar length blends
        );
        const otherBlends = Utils.shuffle(similarBlends.length >= 3 ? similarBlends : this.allBlends.filter(b => b !== data.blend));
        choices.push(...otherBlends.slice(0, 3));
        choices = Utils.shuffle(choices);

        const container = document.getElementById('blend-choices');
        container.innerHTML = choices.map(blend =>
            `<div class="blend-choice" data-answer="${blend}">${blend}</div>`
        ).join('');

        // Add event listeners
        container.querySelectorAll('.blend-choice').forEach(el => {
            el.onclick = () => this.checkAnswer(el.dataset.answer);
        });

        setTimeout(() => this.gameManager.speechManager.speak(data.word), 500);
    }

    checkAnswer(selected) {
        const data = this.getCurrentData();
        const correct = selected === data.blend;

        document.querySelectorAll('.blend-choice').forEach(el => {
            el.style.pointerEvents = 'none';
            if (el.dataset.answer === selected) {
                el.classList.add(correct ? 'correct' : 'wrong');
            }
        });

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Yes! ${data.word} starts with the blend ${data.blend}!` :
                `Not quite. ${data.word} starts with ${data.blend}, not ${selected}.`
            );
        }, 800);
    }
}

// ========================================
// DIGRAPHS GAME
// ========================================

class DigraphsGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'digraphs');
        this.allDigraphs = ['SH', 'CH', 'TH', 'WH', 'PH', 'CK', 'NG'];
    }

    init() {
        const filtered = Utils.filterByDifficulty(DIGRAPH_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('digraphs-game').classList.add('active');
        document.getElementById('digraph-sound').onclick = () =>
            this.gameManager.speechManager.speak(this.getCurrentData().word);
        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('digraph-word').textContent = data.word;

        let choices = [data.digraph];
        const otherDigraphs = Utils.shuffle(this.allDigraphs.filter(d => d !== data.digraph));
        choices.push(...otherDigraphs.slice(0, 3));
        choices = Utils.shuffle(choices);

        const container = document.getElementById('digraph-choices');
        container.innerHTML = choices.map(digraph =>
            `<div class="digraph-choice" data-answer="${digraph}">${digraph}</div>`
        ).join('');

        container.querySelectorAll('.digraph-choice').forEach(el => {
            el.onclick = () => this.checkAnswer(el.dataset.answer);
        });

        setTimeout(() => this.gameManager.speechManager.speak(data.word), 500);
    }

    checkAnswer(selected) {
        const data = this.getCurrentData();
        const correct = selected === data.digraph;

        document.querySelectorAll('.digraph-choice').forEach(el => {
            el.style.pointerEvents = 'none';
            if (el.dataset.answer === selected) {
                el.classList.add(correct ? 'correct' : 'wrong');
            }
        });

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Perfect! ${data.word} has the digraph ${data.digraph}!` :
                `Not quite. ${data.word} has ${data.digraph}, not ${selected}.`
            );
        }, 800);
    }
}

// ========================================
// VOWEL TEAMS GAME
// ========================================

class VowelTeamsGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'vowel-teams');
        this.allVowelTeams = ['AI', 'OA', 'EA', 'EE', 'OO', 'AU', 'IE', 'UE'];
    }

    init() {
        const filtered = Utils.filterByDifficulty(VOWEL_TEAM_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('vowel-teams-game').classList.add('active');
        document.getElementById('vowel-sound').onclick = () =>
            this.gameManager.speechManager.speak(this.getCurrentData().word);
        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('vowel-before').textContent = data.before;
        document.getElementById('vowel-after').textContent = data.after;

        // Don't give away the answer - make students listen and think!
        document.getElementById('vowel-hint').textContent = 'Listen for the vowel sound in the middle';

        let choices = [data.vowelTeam];
        const otherTeams = Utils.shuffle(this.allVowelTeams.filter(v => v !== data.vowelTeam));
        choices.push(...otherTeams.slice(0, 3));
        choices = Utils.shuffle(choices);

        const container = document.getElementById('vowel-choices');
        container.innerHTML = choices.map(team =>
            `<div class="vowel-choice" data-answer="${team}">${team}</div>`
        ).join('');

        container.querySelectorAll('.vowel-choice').forEach(el => {
            el.onclick = () => this.checkAnswer(el.dataset.answer);
        });

        setTimeout(() => this.gameManager.speechManager.speak(data.word), 500);
    }

    checkAnswer(selected) {
        const data = this.getCurrentData();
        const correct = selected === data.vowelTeam;

        document.querySelectorAll('.vowel-choice').forEach(el => {
            el.style.pointerEvents = 'none';
            if (el.dataset.answer === selected) {
                el.classList.add(correct ? 'correct' : 'wrong');
            }
        });

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Awesome! ${data.word} uses the vowel team ${data.vowelTeam}!` :
                `Not quite. ${data.word} uses ${data.vowelTeam}, not ${selected}.`
            );
        }, 800);
    }
}

// ========================================
// SOUND OUT GAME
// ========================================

class SoundOutGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'sound-out');
        this.selectedSounds = [];
    }

    init() {
        const filtered = Utils.filterByDifficulty(SOUND_OUT_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('sound-out-game').classList.add('active');

        document.getElementById('sound-submit').onclick = () => this.submitAnswer();
        document.getElementById('sound-clear').onclick = () => this.clearSounds();
        document.getElementById('sound-sound').onclick = () =>
            this.gameManager.speechManager.speakSounds(this.getCurrentData());

        this.loadQuestion();
    }

    loadQuestion() {
        this.selectedSounds = [];
        const data = this.getCurrentData();
        document.getElementById('sound-word').textContent = data.word;

        const container = document.getElementById('sound-builder');
        container.innerHTML = `
            <div class="sound-counter">Sounds selected: <strong>0</strong></div>
            <div class="sound-buttons">
                <button class="sound-btn">Add Sound 🔊</button>
            </div>
            <div class="sound-display" id="sound-display"></div>
        `;

        container.querySelector('.sound-btn').onclick = () => this.addSound();
        document.getElementById('sound-submit').disabled = true;

        setTimeout(() => this.gameManager.speechManager.speakSounds(data), 500);
    }

    addSound() {
        this.selectedSounds.push('🔊');
        const display = document.getElementById('sound-display');
        display.innerHTML = this.selectedSounds.map((s, i) =>
            `<span class="sound-bubble">${i + 1}</span>`
        ).join('');

        document.getElementById('sound-submit').disabled = false;
        document.querySelector('.sound-counter strong').textContent = this.selectedSounds.length;
    }

    clearSounds() {
        this.selectedSounds = [];
        document.getElementById('sound-display').innerHTML = '';
        document.getElementById('sound-submit').disabled = true;
        document.querySelector('.sound-counter strong').textContent = '0';
    }

    submitAnswer() {
        const data = this.getCurrentData();
        const correct = this.selectedSounds.length === data.count;

        this.showResult(correct, correct ?
            `Perfect! ${data.word} has ${data.count} sounds: ${data.sounds.join('-')}!` :
            `Not quite. ${data.word} has ${data.count} sounds (${data.sounds.join('-')}), not ${this.selectedSounds.length}.`
        );
    }

    checkAnswer(_answer) {
        // Not used - submitAnswer is called instead
    }
}

// ========================================
// FLUENCY GAME
// ========================================

class FluencyGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'fluency');
    }

    init() {
        const filtered = Utils.filterByDifficulty(FLUENCY_SENTENCES, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('fluency-game').classList.add('active');

        document.getElementById('fluency-submit').onclick = () => this.submitAnswer();
        document.getElementById('fluency-skip').onclick = () => this.gameManager.nextQuestion();
        document.getElementById('fluency-sound').onclick = () =>
            this.gameManager.speechManager.speak(this.getCurrentData().text);

        const input = document.getElementById('fluency-input');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.submitAnswer();
        });

        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('fluency-sentence').textContent = data.text;
        const input = document.getElementById('fluency-input');
        input.value = '';
        input.focus();

        setTimeout(() => this.gameManager.speechManager.speak(data.text), 500);
    }

    submitAnswer() {
        const data = this.getCurrentData();
        const answer = document.getElementById('fluency-input').value.trim();

        if (!answer) {
            alert('Please type what you read!');
            return;
        }

        const correct = answer.toLowerCase() === data.text.toLowerCase();
        const closeEnough = Utils.calculateSimilarity(answer.toLowerCase(), data.text.toLowerCase()) > 0.8;

        this.showResult(correct || closeEnough, correct || closeEnough ?
            'Great reading! You got it right!' :
            `Good try! The sentence was: "${data.text}"`
        );
    }

    checkAnswer(_answer) {
        // Not used - submitAnswer is called instead
    }
}

// ========================================
// SYLLABLE GAME
// ========================================

class SyllableGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'syllables');
        this.clapCount = 0;
        this.isPlaying = false;
    }

    init() {
        const filtered = Utils.filterByDifficulty(SYLLABLE_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('syllables-game').classList.add('active');

        document.getElementById('clap-btn').onclick = () => this.handleClap();
        document.getElementById('syl-submit').onclick = () => this.submitAnswer();
        document.getElementById('syl-skip').onclick = () => this.gameManager.nextQuestion();

        // Set up the sound button with proper audio control
        const soundBtn = document.getElementById('syl-sound');
        soundBtn.onclick = async () => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                soundBtn.disabled = true;
                await this.gameManager.speechManager.speakSyllables(this.getCurrentData().divided);
                this.isPlaying = false;
                soundBtn.disabled = false;
            }
        };

        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('syl-word').textContent = data.word;
        document.getElementById('claps-made').innerHTML = '';
        document.getElementById('syl-submit').disabled = true;
        this.clapCount = 0;

        // Play syllables automatically when question loads (only once)
        this.isPlaying = true;
        const soundBtn = document.getElementById('syl-sound');
        soundBtn.disabled = true;

        setTimeout(async () => {
            await this.gameManager.speechManager.speakSyllables(data.divided);
            this.isPlaying = false;
            soundBtn.disabled = false;
        }, 800);
    }

    handleClap() {
        this.clapCount++;
        const bubble = document.createElement('div');
        bubble.className = 'clap-bubble';
        bubble.textContent = '👏';
        document.getElementById('claps-made').appendChild(bubble);
        document.getElementById('syl-submit').disabled = false;
    }

    submitAnswer() {
        const data = this.getCurrentData();
        const correct = this.clapCount === data.syllables;

        // Stop any playing audio
        this.gameManager.speechManager.cancel();
        this.isPlaying = false;

        this.showResult(correct, correct ?
            `Perfect! ${data.divided} has ${data.syllables} syllable${data.syllables > 1 ? 's' : ''}!` :
            `${data.divided} has ${data.syllables} syllable${data.syllables > 1 ? 's' : ''}, not ${this.clapCount}.`
        );
    }

    checkAnswer(_answer) {
        // Not used - submitAnswer is called instead
    }

    cleanup() {
        super.cleanup();
        this.isPlaying = false;
    }
}

// ========================================
// SIGHT WORDS GAME
// ========================================

class SightWordsGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'sight-words');
        this.isPlaying = false;
    }

    init() {
        const filtered = Utils.filterByDifficulty(SIGHT_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('sight-words-game').classList.add('active');

        // Set up the sound button to play word on demand
        const soundBtn = document.getElementById('sight-sound');
        soundBtn.onclick = async () => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                soundBtn.disabled = true;
                await this.gameManager.speechManager.speakClearly(this.getCurrentData().word);
                this.isPlaying = false;
                soundBtn.disabled = false;
            }
        };

        this.loadQuestion();
    }

    loadQuestion() {
        const target = this.getCurrentData().word;
        // Don't show the target word - students must listen!

        let choices = [target];
        const allWords = SIGHT_WORDS.map(w => w.word);
        let available = Utils.shuffle(allWords.filter(w => w !== target));
        choices.push(...available.slice(0, 5)); // 6 total choices for appropriate challenge
        choices = Utils.shuffle(choices);

        const container = document.getElementById('word-choices');
        container.innerHTML = choices.map(word =>
            `<div class="word-choice" data-answer="${word}">${word}</div>`
        ).join('');

        container.querySelectorAll('.word-choice').forEach(el => {
            el.onclick = () => this.checkAnswer(el.dataset.answer);
        });

        // Play the word automatically when question loads (only once)
        this.isPlaying = true;
        const soundBtn = document.getElementById('sight-sound');
        soundBtn.disabled = true;

        setTimeout(async () => {
            await this.gameManager.speechManager.speakClearly(target);
            this.isPlaying = false;
            soundBtn.disabled = false;
        }, 800);
    }

    checkAnswer(selected) {
        const target = this.getCurrentData().word;
        const correct = selected === target;

        // Stop any playing audio
        this.gameManager.speechManager.cancel();
        this.isPlaying = false;

        document.querySelectorAll('.word-choice').forEach(el => {
            el.style.pointerEvents = 'none';
            if (el.dataset.answer === selected) {
                el.classList.add(correct ? 'correct' : 'wrong');
            }
        });

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Yes! The word is ${target}!` :
                `Not quite. The word was ${target}, not ${selected}.`
            );
        }, 800);
    }

    cleanup() {
        super.cleanup();
        this.isPlaying = false;
    }
}

// ========================================
// RHYMING GAME
// ========================================

class RhymingGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'rhyming');
    }

    init() {
        const filtered = Utils.filterByDifficulty(RHYMING_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('rhyming-game').classList.add('active');
        document.getElementById('rhyme-sound').onclick = () =>
            this.gameManager.speechManager.speak(this.getCurrentData().target);
        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('rhyme-target').textContent = data.target;

        let choices = [data.rhymes[0]];
        choices.push(...Utils.shuffle(data.notRhyme).slice(0, 3));
        choices = Utils.shuffle(choices);

        const container = document.getElementById('rhyme-choices');
        container.innerHTML = choices.map(word =>
            `<div class="rhyme-choice" data-answer="${word}">${word}</div>`
        ).join('');

        container.querySelectorAll('.rhyme-choice').forEach(el => {
            el.onclick = () => this.checkAnswer(el.dataset.answer);
        });

        setTimeout(() => this.gameManager.speechManager.speak(data.target), 500);
    }

    checkAnswer(selected) {
        const data = this.getCurrentData();
        const correct = data.rhymes.includes(selected);

        document.querySelectorAll('.rhyme-choice').forEach(el => {
            el.style.pointerEvents = 'none';
            if (el.dataset.answer === selected) {
                el.classList.add(correct ? 'correct' : 'wrong');
            }
        });

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Great! ${selected} rhymes with ${data.target}!` :
                `${selected} doesn't rhyme with ${data.target}. ${data.rhymes[0]} does!`
            );
        }, 800);
    }
}

/**
 * Word Builder Game - Build words from letters
 */
class WordBuilderGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'word-builder');
        this.isPlaying = false;
        this.builtWord = [];
    }

    init() {
        const filtered = Utils.filterByDifficulty(WORD_BUILDER_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('word-builder-game').classList.add('active');

        const soundBtn = document.getElementById('builder-sound');
        soundBtn.onclick = async () => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                soundBtn.disabled = true;
                await this.gameManager.speechManager.speakClearly(this.getCurrentData().word);
                this.isPlaying = false;
                soundBtn.disabled = false;
            }
        };

        document.getElementById('builder-submit').onclick = () => this.checkWord();
        document.getElementById('builder-clear').onclick = () => this.clearWord();

        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        this.builtWord = [];

        // Create shuffled letters
        const letters = data.word.split('');
        const shuffled = Utils.shuffle(letters);

        const letterBank = document.getElementById('letter-bank');
        letterBank.innerHTML = shuffled.map((letter, idx) =>
            `<div class="letter-tile" data-letter="${letter}" data-idx="${idx}">${letter}</div>`
        ).join('');

        document.getElementById('built-word').innerHTML = '';

        letterBank.querySelectorAll('.letter-tile').forEach(el => {
            el.onclick = () => this.addLetter(el);
        });

        // Play word automatically
        this.isPlaying = true;
        const soundBtn = document.getElementById('builder-sound');
        soundBtn.disabled = true;
        setTimeout(async () => {
            await this.gameManager.speechManager.speakClearly(data.word);
            this.isPlaying = false;
            soundBtn.disabled = false;
        }, 800);
    }

    addLetter(tile) {
        if (tile.classList.contains('used')) return;

        this.builtWord.push(tile.dataset.letter);
        tile.classList.add('used');

        document.getElementById('built-word').innerHTML = this.builtWord.join('');
    }

    clearWord() {
        this.builtWord = [];
        document.getElementById('built-word').innerHTML = '';
        document.querySelectorAll('.letter-tile').forEach(el => {
            el.classList.remove('used');
        });
    }

    checkWord() {
        const data = this.getCurrentData();
        const answer = this.builtWord.join('');
        const correct = answer === data.word;

        this.gameManager.speechManager.cancel();
        this.isPlaying = false;

        document.querySelectorAll('.letter-tile').forEach(el => {
            el.style.pointerEvents = 'none';
        });

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Perfect! You built ${data.word}!` :
                `Not quite. The word was ${data.word}.`
            );
        }, 500);
    }

    cleanup() {
        super.cleanup();
        this.isPlaying = false;
        this.builtWord = [];
    }
}

/**
 * Beginning Sounds Game - Match pictures to beginning sounds
 */
class BeginningSoundsGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'beginning-sounds');
        this.isPlaying = false;
    }

    init() {
        const filtered = Utils.filterByDifficulty(BEGINNING_SOUNDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('beginning-sounds-game').classList.add('active');

        const soundBtn = document.getElementById('beginning-sound');
        soundBtn.onclick = async () => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                soundBtn.disabled = true;
                await this.gameManager.speechManager.speak(this.getCurrentData().word);
                this.isPlaying = false;
                soundBtn.disabled = false;
            }
        };

        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('picture-emoji').textContent = data.emoji;

        let choices = [data.letter, ...data.wrong];
        choices = Utils.shuffle(choices);

        const container = document.getElementById('letter-choices');
        container.innerHTML = choices.map(letter =>
            `<div class="letter-choice" data-answer="${letter}">${letter}</div>`
        ).join('');

        container.querySelectorAll('.letter-choice').forEach(el => {
            el.onclick = () => this.checkAnswer(el.dataset.answer);
        });

        // Play word automatically
        this.isPlaying = true;
        const soundBtn = document.getElementById('beginning-sound');
        soundBtn.disabled = true;
        setTimeout(async () => {
            await this.gameManager.speechManager.speak(data.word);
            this.isPlaying = false;
            soundBtn.disabled = false;
        }, 800);
    }

    checkAnswer(selected) {
        const data = this.getCurrentData();
        const correct = selected === data.letter;

        this.gameManager.speechManager.cancel();
        this.isPlaying = false;

        document.querySelectorAll('.letter-choice').forEach(el => {
            el.style.pointerEvents = 'none';
            if (el.dataset.answer === selected) {
                el.classList.add(correct ? 'correct' : 'wrong');
            }
        });

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Yes! ${data.word} starts with ${data.letter}!` :
                `${data.word} starts with ${data.letter}, not ${selected}.`
            );
        }, 800);
    }

    cleanup() {
        super.cleanup();
        this.isPlaying = false;
    }
}

/**
 * Magic E Game - Transform words with silent E
 */
class MagicEGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'magic-e');
        this.isPlaying = false;
    }

    init() {
        const filtered = Utils.filterByDifficulty(MAGIC_E_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('magic-e-game').classList.add('active');

        document.getElementById('magic-sound-before').onclick = async () => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                await this.gameManager.speechManager.speak(this.getCurrentData().before);
                this.isPlaying = false;
            }
        };

        document.getElementById('magic-sound-after').onclick = async () => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                await this.gameManager.speechManager.speak(this.getCurrentData().after);
                this.isPlaying = false;
            }
        };

        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('before-word').textContent = data.before;
        document.getElementById('after-word').textContent = data.before + 'E';
        document.getElementById('magic-question-text').textContent = 'What does the new word spell?';

        const container = document.getElementById('magic-choices');
        container.innerHTML = data.choices.map(word =>
            `<div class="magic-choice" data-answer="${word}">${word}</div>`
        ).join('');

        container.querySelectorAll('.magic-choice').forEach(el => {
            el.onclick = () => this.checkAnswer(el.dataset.answer);
        });

        // Play both words automatically
        this.isPlaying = true;
        setTimeout(async () => {
            await this.gameManager.speechManager.speak(data.before);
            await new Promise(resolve => setTimeout(resolve, 800));
            await this.gameManager.speechManager.speak(data.after);
            this.isPlaying = false;
        }, 800);
    }

    checkAnswer(selected) {
        const data = this.getCurrentData();
        const correct = selected === data.after;

        this.gameManager.speechManager.cancel();
        this.isPlaying = false;

        document.querySelectorAll('.magic-choice').forEach(el => {
            el.style.pointerEvents = 'none';
            if (el.dataset.answer === selected) {
                el.classList.add(correct ? 'correct' : 'wrong');
            }
        });

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Magic! ${data.before} + E = ${data.after}!` :
                `Not quite. ${data.before} + E = ${data.after}.`
            );
        }, 800);
    }

    cleanup() {
        super.cleanup();
        this.isPlaying = false;
    }
}

/**
 * Word Families Game - Sort words by patterns
 */
class WordFamiliesGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'word-families');
        this.selectedWords = [];
    }

    init() {
        const filtered = Utils.filterByDifficulty(WORD_FAMILIES, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('word-families-game').classList.add('active');
        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        this.selectedWords = [];

        document.getElementById('family-pattern').textContent = data.pattern;

        // Mix correct and wrong words
        let allWords = [...Utils.shuffle(data.words).slice(0, 4), ...data.wrong];
        allWords = Utils.shuffle(allWords);

        const container = document.getElementById('sortable-words');
        container.innerHTML = allWords.map(word =>
            `<div class="family-word" data-word="${word}">${word}</div>`
        ).join('');

        container.querySelectorAll('.family-word').forEach(el => {
            el.onclick = () => this.selectWord(el);
        });

        setTimeout(() => {
            this.gameManager.speechManager.speak(`Select all the ${data.pattern} family words`);
        }, 500);
    }

    selectWord(el) {
        const word = el.dataset.word;

        if (el.classList.contains('selected')) {
            el.classList.remove('selected');
            this.selectedWords = this.selectedWords.filter(w => w !== word);
        } else {
            el.classList.add('selected');
            this.selectedWords.push(word);
        }

        // Auto-check when enough words selected
        if (this.selectedWords.length >= 4) {
            setTimeout(() => this.checkAnswer(), 500);
        }
    }

    checkAnswer() {
        const data = this.getCurrentData();
        let correctCount = 0;

        document.querySelectorAll('.family-word').forEach(el => {
            const word = el.dataset.word;
            const isCorrect = data.words.includes(word);
            const wasSelected = this.selectedWords.includes(word);

            if (isCorrect && wasSelected) {
                correctCount++;
                el.classList.add('correct');
            } else if (wasSelected) {
                el.classList.add('wrong');
            }
            el.style.pointerEvents = 'none';
        });

        const correct = correctCount >= 3;

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Great job finding the ${data.pattern} family words!` :
                `Keep trying! Look for words ending in ${data.pattern}.`
            );
        }, 800);
    }
}

/**
 * Story Sequencer Game - Put story in order
 */
class StorySequencerGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'story-sequencer');
        this.isPlaying = false;
        this.currentOrder = [];
    }

    init() {
        const filtered = Utils.filterByDifficulty(STORY_SEQUENCES, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('story-sequencer-game').classList.add('active');

        const soundBtn = document.getElementById('story-sound');
        soundBtn.onclick = async () => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                soundBtn.disabled = true;
                const data = this.getCurrentData();
                for (const sentence of data.sentences) {
                    await this.gameManager.speechManager.speak(sentence);
                    await new Promise(resolve => setTimeout(resolve, 800));
                }
                this.isPlaying = false;
                soundBtn.disabled = false;
            }
        };

        document.getElementById('story-submit').onclick = () => this.checkOrder();
        document.getElementById('story-skip').onclick = () => this.nextQuestion();

        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('story-title').textContent = data.title;

        const shuffled = Utils.shuffle(data.sentences.map((s, idx) => ({ text: s, original: idx })));
        this.currentOrder = shuffled;

        const container = document.getElementById('story-sentences');
        container.innerHTML = shuffled.map((item, idx) =>
            `<div class="story-sentence" data-idx="${idx}" draggable="true">
                <span class="sentence-number">${idx + 1}</span>
                <span class="sentence-text">${item.text}</span>
            </div>`
        ).join('');

        this.setupDragDrop();
    }

    setupDragDrop() {
        const sentences = document.querySelectorAll('.story-sentence');
        let draggedEl = null;

        sentences.forEach(el => {
            el.addEventListener('dragstart', () => {
                draggedEl = el;
                el.classList.add('dragging');
            });

            el.addEventListener('dragend', () => {
                el.classList.remove('dragging');
            });

            el.addEventListener('dragover', (e) => {
                e.preventDefault();
                const container = document.getElementById('story-sentences');
                const afterElement = this.getDragAfterElement(container, e.clientY);
                if (afterElement == null) {
                    container.appendChild(draggedEl);
                } else {
                    container.insertBefore(draggedEl, afterElement);
                }
            });
        });
    }

    getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.story-sentence:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    checkOrder() {
        const sentences = document.querySelectorAll('.story-sentence');
        const currentOrder = Array.from(sentences).map(el => {
            const idx = parseInt(el.dataset.idx);
            return this.currentOrder[idx].original;
        });

        const correct = currentOrder.every((val, idx) => val === idx);

        sentences.forEach(el => {
            el.draggable = false;
            el.style.cursor = 'default';
        });

        setTimeout(() => {
            this.showResult(correct, correct ?
                'Perfect! You got the story in order!' :
                'Not quite right. Try listening to the story again!'
            );
        }, 500);
    }

    cleanup() {
        super.cleanup();
        this.isPlaying = false;
        this.currentOrder = [];
    }
}

/**
 * Word Detective Game - Unscramble letters
 */
class WordDetectiveGame extends BaseGame {
    constructor(gameManager) {
        super(gameManager, 'word-detective');
        this.isPlaying = false;
    }

    init() {
        const filtered = Utils.filterByDifficulty(WORD_DETECTIVE_WORDS, this.difficulty);
        this.gameData = Utils.shuffle(filtered).slice(0, this.gameManager.totalQuestions);
        document.getElementById('word-detective-game').classList.add('active');

        const input = document.getElementById('detective-input');
        const soundBtn = document.getElementById('detective-sound');

        soundBtn.onclick = async () => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                soundBtn.disabled = true;
                await this.gameManager.speechManager.speakClearly(this.getCurrentData().answer);
                this.isPlaying = false;
                soundBtn.disabled = false;
            }
        };

        document.getElementById('detective-submit').onclick = () => this.checkAnswer();
        document.getElementById('detective-skip').onclick = () => this.nextQuestion();

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkAnswer();
        });

        this.loadQuestion();
    }

    loadQuestion() {
        const data = this.getCurrentData();
        document.getElementById('scrambled-word').textContent = data.scrambled;
        document.getElementById('detective-hint').textContent = `Hint: ${data.hint}`;
        document.getElementById('detective-input').value = '';
        document.getElementById('detective-input').focus();

        // Play word automatically
        this.isPlaying = true;
        const soundBtn = document.getElementById('detective-sound');
        soundBtn.disabled = true;
        setTimeout(async () => {
            await this.gameManager.speechManager.speakClearly(data.answer);
            this.isPlaying = false;
            soundBtn.disabled = false;
        }, 800);
    }

    checkAnswer() {
        const data = this.getCurrentData();
        const input = document.getElementById('detective-input');
        const answer = input.value.trim().toUpperCase();
        const correct = answer === data.answer;

        this.gameManager.speechManager.cancel();
        this.isPlaying = false;

        input.disabled = true;
        input.classList.add(correct ? 'correct' : 'wrong');

        setTimeout(() => {
            this.showResult(correct, correct ?
                `Excellent detective work! The word is ${data.answer}!` :
                `Not quite. The word was ${data.answer}.`
            );
        }, 500);
    }

    cleanup() {
        super.cleanup();
        this.isPlaying = false;
        const input = document.getElementById('detective-input');
        input.disabled = false;
        input.classList.remove('correct', 'wrong');
    }
}

// ========================================
// GAME MANAGER - CENTRAL CONTROLLER
// ========================================

/**
 * Main game manager that coordinates all game activities
 */
class GameManager {
    constructor() {
        this.currentGame = null;
        this.currentGameName = null;
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 8;
        this.speechManager = new SpeechManager();

        // DOM Elements
        this.mainMenu = document.getElementById('main-menu');
        this.gameArea = document.getElementById('game-area');
        this.progressBar = document.getElementById('progress-bar');
        this.scoreEl = document.getElementById('score');
        this.streakEl = document.getElementById('streak');
        this.streakFireEl = document.getElementById('streak-fire');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.resultDisplay = document.getElementById('result-display');
        this.resultEmoji = document.getElementById('result-emoji');
        this.resultMessage = document.getElementById('result-message');
        this.resultDetails = document.getElementById('result-details');

        this.initializeEventListeners();
        this.loadProgress();
    }

    /**
     * Initialize all event listeners
     */
    initializeEventListeners() {
        // Game card clicks
        document.querySelectorAll('.game-card').forEach(card => {
            card.querySelector('.btn-play').addEventListener('click', () => {
                const game = card.dataset.game;
                this.startGame(game);
            });
        });

        // Navigation buttons
        document.getElementById('back-to-menu').addEventListener('click', () => this.backToMenu());
        document.getElementById('continue-btn').addEventListener('click', () => this.nextQuestion());

        // Progress report button
        const progressBtn = document.getElementById('show-progress');
        if (progressBtn) {
            progressBtn.addEventListener('click', () => this.showStandardsProgress());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.gameArea.classList.contains('active')) {
                this.backToMenu();
            }
        });
    }

    /**
     * Load saved progress from storage
     */
    loadProgress() {
        const progress = GameStorageManager.load(GameStorageManager.KEYS.PROGRESS, {});
        console.log('Loaded progress:', progress);
    }

    /**
     * Start a specific game
     * @param {string} gameName - Name of the game to start
     */
    startGame(gameName) {
        // Cleanup previous game
        if (this.currentGame) {
            this.currentGame.cleanup();
        }

        // Reset state
        this.currentGameName = gameName;
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.correctAnswers = 0;

        // UI transitions
        this.mainMenu.classList.remove('active');
        this.gameArea.classList.add('active');
        this.progressBar.classList.add('active');

        // Hide all game contents
        document.querySelectorAll('.game-content').forEach(el => el.classList.remove('active'));

        // Create and initialize appropriate game
        switch(gameName) {
        case 'blends':
            this.currentGame = new BlendsGame(this);
            break;
        case 'digraphs':
            this.currentGame = new DigraphsGame(this);
            break;
        case 'vowel-teams':
            this.currentGame = new VowelTeamsGame(this);
            break;
        case 'sound-out':
            this.currentGame = new SoundOutGame(this);
            break;
        case 'fluency':
            this.currentGame = new FluencyGame(this);
            break;
        case 'syllables':
            this.currentGame = new SyllableGame(this);
            break;
        case 'sight-words':
            this.currentGame = new SightWordsGame(this);
            break;
        case 'rhyming':
            this.currentGame = new RhymingGame(this);
            break;
        case 'word-builder':
            this.currentGame = new WordBuilderGame(this);
            break;
        case 'beginning-sounds':
            this.currentGame = new BeginningSoundsGame(this);
            break;
        case 'magic-e':
            this.currentGame = new MagicEGame(this);
            break;
        case 'word-families':
            this.currentGame = new WordFamiliesGame(this);
            break;
        case 'story-sequencer':
            this.currentGame = new StorySequencerGame(this);
            break;
        case 'word-detective':
            this.currentGame = new WordDetectiveGame(this);
            break;
        default:
            console.error('Unknown game:', gameName);
            return;
        }

        this.currentGame.init();
        this.updateScore();
        this.updateProgress();
    }

    /**
     * Show result after answer
     * @param {boolean} correct - Whether answer was correct
     * @param {string} message - Message to display
     */
    showResult(correct, message) {
        if (correct) {
            this.score += 10 + (this.streak * 2);
            this.streak++;
            this.correctAnswers++;
            if (this.streak > this.bestStreak) {
                this.bestStreak = this.streak;
            }
        } else {
            this.streak = 0;
        }

        this.updateScore();

        this.resultEmoji.textContent = correct ? Utils.getCorrectEmoji() : '😅';
        this.resultMessage.textContent = correct ? Utils.getCorrectMessage() : 'Not quite!';
        this.resultDetails.textContent = message;

        this.resultDisplay.classList.add('active');
    }

    /**
     * Move to next question or end game
     */
    nextQuestion() {
        // Stop any playing audio when moving to next question
        this.speechManager.cancel();

        this.resultDisplay.classList.remove('active');
        this.currentGame.currentIndex++;
        this.updateProgress();

        if (this.currentGame.currentIndex >= this.currentGame.gameData.length) {
            this.endGame();
            return;
        }

        this.currentGame.loadQuestion();
    }

    /**
     * End the current game and show results
     */
    endGame() {
        const percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        const perfectRound = this.correctAnswers === this.totalQuestions;

        // Save progress
        const progress = GameStorageManager.getProgress(this.currentGameName);
        const stats = {
            gamesPlayed: (progress.gamesPlayed || 0) + 1,
            totalGamesPlayed: this.getTotalGamesPlayed() + 1,
            totalScore: (progress.totalScore || 0) + this.score,
            bestStreak: Math.max(progress.bestStreak || 0, this.bestStreak),
            score: this.score,
            perfectRound: perfectRound
        };

        GameStorageManager.saveProgress(this.currentGameName, stats);

        // Track educational standards progress
        const gameObjectives = GAME_LEARNING_OBJECTIVES[this.currentGameName];
        if (gameObjectives && gameObjectives.standards) {
            const performance = {
                totalQuestions: this.totalQuestions,
                correctAnswers: this.correctAnswers
            };
            gameObjectives.standards.forEach(standardCode => {
                GameStorageManager.trackStandardProgress(standardCode, this.currentGameName, performance);
            });
        }

        // Check for high score
        const isHighScore = GameStorageManager.saveHighScore(this.currentGameName, this.score);

        // Check for achievements
        const newAchievements = AchievementSystem.checkAchievements(stats);

        // Display results
        this.resultEmoji.textContent = '🎊';
        this.resultMessage.textContent = 'Game Complete!';

        let resultsHTML = `
            <p>Final Score: <strong>${this.score}</strong></p>
            <p>Accuracy: <strong>${percentage}%</strong></p>
            <p>Best Streak: <strong>${this.bestStreak}</strong></p>
        `;

        if (isHighScore) {
            resultsHTML += '<p class="high-score-badge">🏆 New High Score! 🏆</p>';
        }

        if (perfectRound) {
            resultsHTML += '<p class="perfect-badge">✨ Perfect Round! ✨</p>';
        }

        resultsHTML += '<p>Great job! 🌟</p>';

        this.resultDetails.innerHTML = resultsHTML;
        this.resultDisplay.classList.add('active');

        document.getElementById('continue-btn').textContent = 'Back to Menu';
        document.getElementById('continue-btn').onclick = () => this.backToMenu();

        // Show achievement notifications
        newAchievements.forEach((achievement, index) => {
            setTimeout(() => {
                AchievementSystem.showAchievementNotification(achievement);
            }, 1000 + (index * 1000));
        });
    }

    /**
     * Return to main menu
     */
    backToMenu() {
        if (this.currentGame) {
            this.currentGame.cleanup();
        }

        this.gameArea.classList.remove('active');
        this.mainMenu.classList.add('active');
        this.progressBar.classList.remove('active');
        this.resultDisplay.classList.remove('active');

        document.getElementById('continue-btn').textContent = 'Continue →';
        document.getElementById('continue-btn').onclick = () => this.nextQuestion();

        this.currentGame = null;
        this.currentGameName = null;
    }

    /**
     * Update score display
     */
    updateScore() {
        this.scoreEl.textContent = this.score;
        this.streakEl.textContent = this.streak;
        this.streakFireEl.classList.toggle('active', this.streak >= 3);
    }

    /**
     * Update progress bar
     */
    updateProgress() {
        const current = this.currentGame ? this.currentGame.currentIndex : 0;
        const total = this.currentGame ? this.currentGame.gameData.length : this.totalQuestions;
        const percentage = (current / total) * 100;

        this.progressFill.style.width = percentage + '%';
        this.progressText.textContent = `${current} / ${total}`;
    }

    /**
     * Get total games played across all game types
     * @returns {number} Total games played
     */
    getTotalGamesPlayed() {
        const allProgress = GameStorageManager.load(GameStorageManager.KEYS.PROGRESS, {});
        return Object.values(allProgress).reduce((sum, p) => sum + (p.gamesPlayed || 0), 0);
    }

    /**
     * Show educational standards modal
     */
    showStandardsProgress() {
        let html = '<div class="standards-modal-overlay" onclick="this.remove()">';
        html += '<div class="standards-modal" onclick="event.stopPropagation()">';
        html += '<div class="standards-header">';
        html += '<h2>📊 Learning Progress Report</h2>';
        html += '<button class="btn-close" onclick="this.closest(\'.standards-modal-overlay\').remove()">✕</button>';
        html += '</div>';
        html += '<div class="standards-content">';

        // Show progress for each standard
        Object.keys(EDUCATIONAL_STANDARDS).forEach(code => {
            const standard = EDUCATIONAL_STANDARDS[code];
            const mastery = GameStorageManager.getStandardMastery(code);

            html += `
                <div class="standard-card">
                    <div class="standard-header">
                        <span class="standard-icon">${standard.icon}</span>
                        <div class="standard-info">
                            <div class="standard-name">${standard.code}: ${standard.name}</div>
                            <div class="standard-desc">${standard.description}</div>
                        </div>
                        <div class="standard-mastery">
                            <span class="mastery-badge">${mastery.badge}</span>
                            <span class="mastery-level">${mastery.level}</span>
                        </div>
                    </div>
                    <div class="standard-progress-bar">
                        <div class="standard-progress-fill" style="width: ${mastery.percentage}%; background: ${standard.color}"></div>
                        <span class="standard-progress-text">${mastery.percentage}%</span>
                    </div>
                    ${mastery.attempts > 0 ? `
                        <div class="standard-stats">
                            <span>${mastery.correct} / ${mastery.attempts} correct</span>
                            <span>${mastery.gamesPlayed} game${mastery.gamesPlayed !== 1 ? 's' : ''} played</span>
                        </div>
                    ` : '<div class="standard-stats">Not yet practiced</div>'}
                </div>
            `;
        });

        html += '</div>';
        html += '<div class="standards-footer">';
        html += '<button class="btn btn-continue" onclick="this.closest(\'.standards-modal-overlay\').remove()">Close</button>';
        html += '</div>';
        html += '</div></div>';

        document.body.insertAdjacentHTML('beforeend', html);
    }
}

// ========================================
// INITIALIZE APPLICATION
// ========================================

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Reading Games - Advanced Version');
    console.log('✨ Powered by modern ES6+ JavaScript');

    // Create global game manager
    window.gameManager = new GameManager();

    // For debugging
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.debug = {
            storage: StorageManager,
            achievements: AchievementSystem,
            utils: Utils
        };
        console.log('🔧 Debug mode enabled. Access via window.debug');
    }
});

// ========================================
// LEGACY GLOBAL FUNCTIONS (for backwards compatibility with HTML)
// ========================================

// These functions are kept for any inline onclick handlers in HTML
// They delegate to the game manager

window.checkBlend = function(selected) {
    if (window.gameManager?.currentGame instanceof BlendsGame) {
        window.gameManager.currentGame.checkAnswer(selected);
    }
};

window.checkDigraph = function(selected) {
    if (window.gameManager?.currentGame instanceof DigraphsGame) {
        window.gameManager.currentGame.checkAnswer(selected);
    }
};

window.checkVowelTeam = function(selected) {
    if (window.gameManager?.currentGame instanceof VowelTeamsGame) {
        window.gameManager.currentGame.checkAnswer(selected);
    }
};

window.checkSightWord = function(selected) {
    if (window.gameManager?.currentGame instanceof SightWordsGame) {
        window.gameManager.currentGame.checkAnswer(selected);
    }
};

window.checkRhyme = function(selected) {
    if (window.gameManager?.currentGame instanceof RhymingGame) {
        window.gameManager.currentGame.checkAnswer(selected);
    }
};

window.addSound = function() {
    if (window.gameManager?.currentGame instanceof SoundOutGame) {
        window.gameManager.currentGame.addSound();
    }
};
