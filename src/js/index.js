let dir = process.env.NODE_ENV === 'production' ? '/sahaja-music-discs/' : '/'
export const Discs = [
    {
        discsName: 'Kundala:Thousand Petals',
        discsChinaName: '中文简称 Kundala 1 或者 Kundala:千瓣莲花',
        // discsPic: dir + 'assets/img/thousand-petals.png',
        discsPic: "https://foruda.gitee.com/images/1729603519056357078/5193bb48_13838675.png",
        discsAuthor: '德国Kundala',
        discsContent: [
            { label: '24首歌曲；' },
            { label: '儿童拜赞，以每个轮穴的神祗为主；' },
            { label: '歌曲包含：sa sa sa,here we are,Shri Hanumana 等等' },
        ],
        discsTypeAndLug: 'CD英语',
        highlyRecommended: [
            { label: '大人可以通过音乐了解轮穴的特质' },
            { label: '学习如何向儿童讲解轮穴的特质' },
            { label: '组织儿童活动的好素材和灵感来源' },
        ],
        burntVersionDetail:
        {
            'burnInclud': '碟片+歌词本+光盘盒',
            'burnPic': [dir + 'assets/img/burnt/kundala1-burnt.png'],
        }
    },
    {
        discsName: 'Kundala:Together We are Strong',
        discsChinaName: '中文简称 Kundala 2',
        // discsPic: dir + 'assets/img/together-we-are-strong.png',
        discsPic: "https://foruda.gitee.com/images/1729603567426153924/ca2f9a00_13838675.png",
        discsAuthor: '德国Kundala',
        discsContent: [
            { label: '16首歌曲 + 16首都应歌曲的纯音乐；' },
            { label: '以儿童生活为主题；' },
        ],
        discsTypeAndLug: 'CD英语',
        highlyRecommended: [
            { label: '生动活泼的儿童生活题材' },
        ],
        burntVersionDetail:
        {
            'burnInclud': '碟片+歌词本+光盘盒',
            'burnPic': [dir + 'assets/img/burnt/kundala2-burnt.png'],
        }
    },
    {
        discsName: 'Little Ganesha',
        discsChinaName: '',
        // discsPic: dir + 'assets/img/little-ganesha.png',
        discsPic: "https://foruda.gitee.com/images/1729603470062477645/8de01305_13838675.png",
        discsAuthor: '捷克Borotin幼儿园',
        discsContent: [
            { label: '32首儿童拜赞；' },
        ],
        discsTypeAndLug: 'CD英语',
        highlyRecommended: [
            { label: '大人可以通过音乐了解轮穴的特质' },
            { label: '学习如何向儿童讲解轮穴的特质' },
            { label: '组织儿童活动的好素材和灵感来源' },
        ],
        burntVersionDetail:
        {
            'burnInclud': '碟片+歌词本+光盘盒',
            'burnPic': [dir + 'assets/img/burnt/little-ganesha-burnt.png'],
        }
    },
    {
        discsName: 'A Day in Borotin',
        discsChinaName: '中文：Borotin 幼儿园的一天',
        // discsPic: dir + 'assets/img/a-day-in-borotin.png',
        discsPic: "https://foruda.gitee.com/images/1729603131966016496/c0774dcc_13838675.png",
        discsAuthor: '捷克Borotin幼儿园',
        discsContent: [
            { label: '14首歌曲 + 7首霎哈嘉知识引导音频 + 3个儿童剧视频；' },
            { label: '孩子们参与的儿童剧表演：Little Krishna 、 睡美人等' },
        ],
        discsTypeAndLug: 'DVD英语',
        highlyRecommended: [
            { label: '希望了解Borotin幼儿园的日常生活点滴' },
            { label: '有愿望参与霎哈嘉儿童活动，向儿童讲解霎哈嘉知识' },
            { label: '想取得儿童活动剧的灵感' },
        ],
        burntVersionDetail:
        {
            'burnInclud': '碟片+歌词本+光盘盒',
            'burnPic': [dir + 'assets/img/burnt/day-in-borotin-burnt.png'],
        }
    },
    {
        discsName: 'Borotin 幼儿园儿童冥想系列 1',
        discsChinaName: '',
        // discsPic: dir + 'assets/img/borotin1.png',
        discsPic: "https://foruda.gitee.com/images/1729603247246342974/64a5f4cd_13838675.png",
        discsAuthor: '捷克Borotin幼儿园',
        discsContent: [
            { label: 'Introduction to Meditation and Sahaj Techniques 冥想与Sahaj 技巧' },
            { label: 'Morning meditation 清晨冥想；' },
            { label: 'Shoe beat 鞋打；' },
            { label: 'Foot soak 泡脚；' },
            { label: 'Raksha Bandhan 兄妹结；' },
            { label: 'Puja；' },
        ],
        discsTypeAndLug: 'DVD',
        highlyRecommended: [
            { label: '希望了解Borotin幼儿园的日常生活点滴' },
            { label: '有愿望参与霎哈嘉儿童活动，向儿童讲解霎哈嘉知识' },
            { label: '想取得儿童活动剧的灵感' },
        ],
        burntVersionDetail:
        {
            'burnInclud': '碟片+光盘盒',
            'burnPic': [dir + 'assets/img/burnt/borotin1-burnt.png'],
        }
    },
    {
        discsName: 'Borotin 幼儿园儿童冥想系列 2',
        discsChinaName: '',
        // discsPic: dir + 'assets/img/borotin2.png',
        discsPic: "https://foruda.gitee.com/images/1729603324384705430/2d7be9ea_13838675.png",
        discsAuthor: '捷克Borotin幼儿园',
        discsContent: [
            { label: 'Mooladhara Chakra：the child within 根轮:儿童的内在' },
            { label: 'Meditation on Mooladhara chakra对根轮冥想；' },
            { label: 'Drawing Shri Ganesha  画Ganesha；' },
            { label: 'Shri Ganesha’s Creation-dance  舞蹈—Ganesha创生记；' },
            { label: 'Wisdom 智慧；' },
            { label: 'Shiny eyes 闪亮的眼睛；' },
            { label: 'Worship；' },
            { label: 'Little Hands；' },
        ],
        discsTypeAndLug: 'DVD英语',
        highlyRecommended: [
            { label: '希望了解Borotin幼儿园的日常生活点滴' },
            { label: '有愿望参与霎哈嘉儿童活动，向儿童讲解霎哈嘉知识' },
            { label: '想取得儿童活动剧的灵感' },
        ],
        burntVersionDetail:
        {
            'burnInclud': '碟片+光盘盒',
            'burnPic': [dir + 'assets/img/burnt/borotin2-burnt.png'],
        }
    },
    {
        discsName: 'Borotin 幼儿园儿童冥想系列 3',
        discsChinaName: '',
        // discsPic: dir + 'assets/img/borotin3.png',
        discsPic: "https://foruda.gitee.com/images/1729603369640850808/221bda21_13838675.png",
        discsAuthor: '捷克Borotin幼儿园',
        discsContent: [
            { label: 'Swadisthana chakra: The source of Creativity 腹轮：创造力的来源' },
            { label: 'Shri Brahmadeva Saraswati, 请教我们如何' },
            { label: 'Meditate 冥想；' },
            { label: 'Sing  歌唱；' },
            { label: 'Dance  跳舞；' },
            { label: 'Act  行动；' },
            { label: 'Paint  绘画；' },
            { label: 'Write and Read  读写；' },
        ],
        discsTypeAndLug: 'DVD英语',
        highlyRecommended: [
            { label: '希望了解Borotin幼儿园的日常生活点滴' },
            { label: '有愿望参与霎哈嘉儿童活动，向儿童讲解霎哈嘉知识' },
            { label: '想取得儿童活动剧的灵感' },
        ],
        burntVersionDetail:
        {
            'burnInclud': '碟片+光盘盒',
            'burnPic': [dir + 'assets/img/burnt/borotin3-burnt.png'],
        }
    },
    {
        discsName: 'Borotin Universe',
        discsChinaName: '',
        // discsPic: dir + 'assets/img/borotin-universe.png',
        discsPic: "https://foruda.gitee.com/images/1729603415412656982/f2755aa4_13838675.png",
        discsAuthor: '捷克Borotin幼儿园',
        discsContent: [
            { label: '14首小拜赞，由幼儿园小朋友演出，部分歌曲前有简短母亲讲话；' },
        ],
        discsTypeAndLug: 'DVD英语',
        highlyRecommended: [
            { label: '希望了解Borotin幼儿园的日常生活点滴' },
            { label: '有愿望参与霎哈嘉儿童活动，向儿童讲解霎哈嘉知识' },
            { label: '想取得儿童活动剧的灵感' },
        ],
        burntVersionDetail:
        {
            'burnInclud': '碟片+歌词本+光盘盒(7月后可以出来)',
            'burnPic': [],
        }
    },
    // {
    //     discsName: '碟片名称',
    //     discsChinaName: '碟片中文名称',
    //     discsPic: '碟片图片',
    //     discsAuthor: '碟片制作者',
    //     discsContent: [
    //         {1: '碟片内容1'},
    //         {2: '碟片内容2'},
    //     ],
    //     discsTypeAndLug: '碟片类型语言',
    //     highlyRecommended: [
    //         {1: '特别推荐1'},
    //         {2: '特别推荐2'},
    //     ],
    //     burntVersionDetail: [
    //         {
    //             'burnInclud': '刻录版包含1',
    //             'burnPic': '刻录版图片',
    //         }
    //     ]
    // },
]