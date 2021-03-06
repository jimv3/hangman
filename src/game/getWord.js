export const getWord = () => {
    const words = [
        'aardvark',
        'address',
        'adore',
        'airplane',
        'alarm',
        'album',
        'amber',
        'animal',
        'animosity',
        'answer',
        'ant',
        'antelope',
        'anxious',
        'apple',
        'armadillo',
        'automobile',
        'avalanche',
        'awesome',
        'baboon',
        'baby',
        'badger',
        'ball',
        'banana',
        'band',
        'bandage',
        'bandana',
        'barn',
        'bat',
        'batch',
        'bath',
        'bear',
        'beautiful',
        'beaver',
        'beige',
        'believe',
        'bend',
        'bible',
        'billion',
        'black',
        'blackberry',
        'blob',
        'block',
        'blue',
        'blueberry',
        'blur',
        'boar',
        'boat',
        'book',
        'bore',
        'boulder',
        'bounce',
        'bowl',
        'boy',
        'bracelet',
        'brick',
        'brother',
        'brown',
        'build',
        'building',
        'bump',
        'burgundy',
        'burp',
        'cage',
        'cake',
        'call',
        'camel',
        'canister',
        'canteloupe',
        'car',
        'card',
        'carpet',
        'carrot',
        'cash',
        'castle',
        'cat',
        'chair',
        'challenge',
        'champion',
        'chance',
        'change',
        'charisma',
        'charm',
        'chartreuse',
        'chat',
        'chief',
        'child',
        'chimpanzee',
        'chowder',
        'church',
        'cinnamon',
        'clam',
        'cobra',
        'code',
        'cohort',
        'college',
        'computer',
        'concept',
        'conspicuous',
        'contagious',
        'convey',
        'conveyor',
        'convict',
        'coop',
        'cooperate',
        'cop',
        'corn',
        'cougar',
        'countenance',
        'cousin',
        'cowboy',
        'cowgirl',
        'coyote',
        'crab',
        'critter',
        'crow',
        'crowd',
        'crutch',
        'cute',
        'cyan',
        'cymbal',
        'dance',
        'danger',
        'dear',
        'deer',
        'despise',
        'dinner',
        'dog',
        'dolphin',
        'donkey',
        'donor',
        'dove',
        'dream',
        'duck',
        'eager',
        'eagle',
        'eclectic',
        'egg',
        'eggnog',
        'ego',
        'elated',
        'electric',
        'elegant',
        'elephant',
        'elk',
        'embrace',
        'encourage',
        'enemy',
        'energetic',
        'energy',
        'engage',
        'engine',
        'enigma',
        'entertain',
        'entertaining',
        'entice',
        'entourage',
        'evade',
        'excite',
        'exciting',
        'extra',
        'extravagant',
        'farm',
        'farmer',
        'father',
        'feel',
        'felt',
        'ferret',
        'fever',
        'fiction',
        'file',
        'fire',
        'fireplace',
        'first',
        'fish',
        'follow',
        'football',
        'forge',
        'forget',
        'fowl',
        'fox',
        'frog',
        'function',
        'funny',
        'gain',
        'game',
        'garden',
        'gather',
        'generous',
        'ghost',
        'giant',
        'gift',
        'girl',
        'globe',
        'glove',
        'goat',
        'gold',
        'goose',
        'gorilla',
        'grandfather',
        'grandmother',
        'grant',
        'graph',
        'gray',
        'green',
        'group',
        'grow',
        'growth',
        'guild',
        'guitar',
        'gymnasium',
        'hair',
        'hall',
        'handsome',
        'harm',
        'harmful',
        'harmony',
        'hawk',
        'heap',
        'hear',
        'heart',
        'help',
        'hero',
        'hill',
        'hold',
        'holiday',
        'home',
        'honor',
        'hop',
        'hope',
        'horse',
        'house',
        'humor',
        'humorous',
        'hump',
        'indigo',
        'infant',
        'injury',
        'insult',
        'jack',
        'jam',
        'jar',
        'jaw',
        'jewel',
        'jump',
        'junction',
        'jungle',
        'junior',
        'junk',
        'jury',
        'kaboodle',
        'kangaroo',
        'keep',
        'kind',
        'kindergarten',
        'kite',
        'kitten',
        'kneed',
        'kneel',
        'knife',
        'knit',
        'koala',
        'laboratory',
        'lake',
        'lame',
        'lane',
        'laptop',
        'large',
        'last',
        'late',
        'later',
        'latest',
        'lavender',
        'lawn',
        'lazy',
        'leader',
        'ledger',
        'lemon',
        'lender',
        'letter',
        'lightning',
        'lilac',
        'lion',
        'lizard',
        'llama',
        'lobster',
        'lonely',
        'lost',
        'lotion',
        'love',
        'lump',
        'magenta',
        'mail',
        'mailbox',
        'mallet',
        'man',
        'mansion',
        'maroon',
        'mauve',
        'maze',
        'meal',
        'meat',
        'meet',
        'meeting',
        'megaphone',
        'melon',
        'methane',
        'method',
        'middle',
        'mild',
        'mile',
        'million',
        'miser',
        'mistake',
        'mist',
        'mister',
        'mob',
        'mold',
        'mole',
        'monkey',
        'monopoly',
        'monsoon',
        'monster',
        'moose',
        'mother',
        'mountain',
        'mouse',
        'movie',
        'mule',
        'mullet',
        'music',
        'napkin',
        'necklace',
        'newt',
        'note',
        'oath',
        'obvious',
        'ocean',
        'office',
        'often',
        'old',
        'omen',
        'only',
        'orange',
        'orangutan',
        'orca',
        'organ',
        'otter',
        'owl',
        'oyster',
        'package',
        'pail',
        'palace',
        'pale',
        'pallet',
        'palm',
        'panda',
        'pants',
        'paper',
        'park',
        'part',
        'parrot',
        'peace',
        'pear',
        'peanut',
        'pen',
        'pencil',
        'penguin',
        'pension',
        'perch',
        'person',
        'phone',
        'pie',
        'piece',
        'pig',
        'pigeon',
        'pimple',
        'pink',
        'pizza',
        'plain',
        'plan',
        'plane',
        'plank',
        'point',
        'police',
        'pond',
        'porch',
        'powder',
        'power',
        'present',
        'president',
        'pretty',
        'principal',
        'prison',
        'professional',
        'professor',
        'prom',
        'promise',
        'propane',
        'proper',
        'pullet',
        'purple',
        'push',
        'python',
        'question',
        'rabbit',
        'radar',
        'rain',
        'ram',
        'rank',
        'rat',
        'ratio',
        'ration',
        'raven',
        'record',
        'red',
        'rhino',
        'rift',
        'ring',
        'rise',
        'risk',
        'river',
        'road',
        'roam',
        'rope',
        'rowdy',
        'rug',
        'rythm',
        'saddle',
        'salamander',
        'salmon',
        'school',
        'science',
        'scoop',
        'seal',
        'seat',
        'seek',
        'seldom',
        'senior',
        'shake',
        'shark',
        'sheep',
        'short',
        'show',
        'shrimp',
        'shrink',
        'signal',
        'silver',
        'simple',
        'sister',
        'ski',
        'skunk',
        'sky',
        'sloth',
        'smack',
        'small',
        'smile',
        'snake',
        'snow',
        'soccer',
        'song',
        'sour',
        'speak',
        'speech',
        'spider',
        'squirrel',
        'stoop',
        'stork',
        'strawberry',
        'strange',
        'subtle',
        'swan',
        'swim',
        'symbol',
        'symbolic',
        'table',
        'tall',
        'tan',
        'taupe',
        'teacher',
        'teal',
        'television',
        'thief',
        'thunder',
        'tiger',
        'timer',
        'toad',
        'toilet',
        'told',
        'top',
        'toy',
        'traffic',
        'trail',
        'train',
        'trapeze',
        'trial',
        'trout',
        'truck',
        'tummy',
        'turkey',
        'turtle',
        'umbrella',
        'university',
        'unless',
        'until',
        'unusual',
        'usual',
        'vagabond',
        'vagrant',
        'valiant',
        'value',
        'valuable',
        'vegetable',
        'vehicle',
        'vigorous',
        'villain',
        'violet',
        'virtual',
        'virtue',
        'virtuous',
        'volume',
        'wagon',
        'wall',
        'wallet',
        'warden',
        'warm',
        'watermelon',
        'weasel',
        'weather',
        'whale',
        'wheel',
        'when',
        'whether',
        'which',
        'white',
        'wind',
        'window',
        'wise',
        'witch',
        'with',
        'wolf',
        'woman',
        'wombat',
        'word',
        'xenial',
        'xenophobia',
        'xylophone',
        'yacht',
        'yard',
        'yarn',
        'year',
        'yearbook',
        'yearly',
        'yearn',
        'yearning',
        'yellow',
        'yoke',
        'yolk',
        'young',
        'youth',
        'youthful',
        'yummy',
        'zany',
        'zeal',
        'zebra',
        'zero',
        'zilch',
        'zone',
        'zoo',
        'zoom',
        'zucchini',
        'zygote'
    ]
    return words[Math.floor(Math.random() * words.length)]
}
