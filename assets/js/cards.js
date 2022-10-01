let cards = [
    {
        id: 1,
        name: 'Uniform',
        img: 'assets/img/cards/1-2-stars/Uniform.png',
        rarity: 1,
        trained: null
    },
    {
        id: 2,
        name: 'DJ-LIVE!',
        img: 'assets/img/cards/1-2-stars/DJ-LIVE!.png',
        rarity: 2,
        trained: null
    },
    {
        id: 3,
        name: 'DJ-MIX!',
        img: 'assets/img/cards/1-2-stars/DJ-MIX!.png',
        rarity: 2,
        trained: null
    },
    {
        id: 4,
        name: 'Because I Want To Make You Happy',
        img: 'assets/img/cards/3-stars/Because_I_Want_To_Make_You_Happy.png',
        rarity: 3,
        trained: 'assets/img/cards/3-stars/Because_I_Want_To_Make_You_Happy_T.png'
    },
    {
        id: 5,
        name: 'Electrifying Voice',
        img: 'assets/img/cards/3-stars/Electrifying_Voice.png',
        rarity: 3,
        trained: 'assets/img/cards/3-stars/Electrifying_Voice_T.png'
    },
    {
        id: 6,
        name: 'Get What I Want',
        img: 'assets/img/cards/3-stars/Get_what_I_want.png',
        rarity: 3,
        trained: 'assets/img/cards/3-stars/Get_what_I_want_T.png'
    },
    {
        id: 7,
        name: 'Hidden Feelings',
        img: 'assets/img/cards/3-stars/Hidden_Feelings.png',
        rarity: 3,
        trained: 'assets/img/cards/3-stars/Hidden_Feelings_T.png'
    },
    {
        id: 8,
        name: 'Rainy Night Detective',
        img: 'assets/img/cards/3-stars/Rainy_Night_Detective.png',
        rarity: 3,
        trained: 'assets/img/cards/3-stars/Rainy_Night_Detective_T.png'
    },
    {
        id: 9,
        name: 'The Spring Evening Diva',
        img: 'assets/img/cards/3-stars/The_Spring_Evening_Diva.png',
        rarity: 3,
        trained: 'assets/img/cards/3-stars/The_Spring_Evening_Diva_T.png'
    },
    {
        id: 10,
        name: 'Little_Devil\'s_Sweet_Temptation',
        img: 'assets/img/cards/3-stars/Little_Devil\'s_Sweet_Temptation.png',
        rarity: 3,
        trained: 'assets/img/cards/3-stars/Little_Devil\'s_Sweet_Temptation_T.png'
    },
    {
        id: 11,
        name: 'Birthday Aoyagi Tsubaki',
        img: 'assets/img/cards/4-stars/Birthday_Aoyagi_Tsubaki.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/Birthday_Aoyagi_Tsubaki_T.png'
    },
    {
        id: 12,
        name: 'Birthday -Museum- Aoyagi Tsubaki',
        img: 'assets/img/cards/4-stars/Birthday_-Museum-_Aoyagi_Tsubaki.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/Birthday_-Museum-_Aoyagi_Tsubaki_T.png'
    },
    {
        id: 13,
        name: 'Canary In The Sky',
        img: 'assets/img/cards/4-stars/Canary_in_the_Sky.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/Canary_in_the_Sky_T.png'
    },
    {
        id: 14,
        name: 'Moonlight Diva',
        img: 'assets/img/cards/4-stars/Moonlight_Diva.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/Moonlight_Diva_T.png'
    },
    {
        id: 15,
        name: 'Passionate Bystander',
        img: 'assets/img/cards/4-stars/Passionate_Bystander.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/Passionate_Bystander_T.png'
    },
    {
        id: 16,
        name: 'Shana And The Blue Flame Hunter',
        img: 'assets/img/cards/4-stars/Shana_and_the_Blue_Flame_Hunter.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/Shana_and_the_Blue_Flame_Hunter_T.png'
    },
    {
        id: 17,
        name: 'The Flower That Shines In The Moon\'s Light',
        img: 'assets/img/cards/4-stars/The_Flower_That_Shines_in_the_Moon\'s_Light.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/The_Flower_That_Shines_in_the_Moon\'s_Light_T.png'
    },
    {
        id: 18,
        name: 'Wavering Solo Camellia',
        img: 'assets/img/cards/4-stars/Wavering_Solo_Camellia.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/Wavering_Solo_Camellia_T.png'
    },
    {
        id: 19,
        name: 'White Rose Diva',
        img: 'assets/img/cards/4-stars/White_Rose_Diva.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/White_Rose_Diva_T.png'
    },
    {
        id: 20,
        name: 'Wistful Blue Moon',
        img: 'assets/img/cards/4-stars/Wistful_Blue_Moon.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/Wistful_Blue_Moon_T.png'
    },
    {
        id: 21,
        name: 'You Can\'t Veto It',
        img: 'assets/img/cards/4-stars/You_Can\'t_Veto_It.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/You_Can\'t_Veto_It_T.png'
    },
    {
        id: 22,
        name: 'Evanescent_Avenger_of_Solitude',
        img: 'assets/img/cards/4-stars/Evanescent_Avenger_of_Solitude.png',
        rarity: 4,
        trained: 'assets/img/cards/4-stars/Evanescent_Avenger_of_Solitude_T.png'
    },
    {
        id: 23,
        name: '1st Anniversary',
        img: 'assets/img/cards/sp/1st_Anniversary.png',
        rarity: 5,
        trained: null
    },
    {
        id: 24,
        name: 'At Your Service',
        img: 'assets/img/cards/cameo-appearances/At_Your_Service.png',
        rarity: 6,
        trained: null
    },
]